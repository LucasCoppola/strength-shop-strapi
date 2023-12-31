import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import Accordion from '../components/Accordion'
import ProductType from '../types/productType'

import { Select, Option, Spinner } from '@material-tailwind/react'
import { priceHighToLow, priceLowToHigh, sortNewest } from '../filter&sort/sort'
import { filterCategory, filterCollection, filterPrice } from '../filter&sort/filters'
import { useLocation } from 'react-router-dom'

type Props = {
	products: ProductType[]
	isLoading: boolean
	isError: boolean
	setIsDrawerOpen: (open: boolean) => void
}

const ProductsPage = ({ products, isLoading, isError, setIsDrawerOpen }: Props) => {
	const [sortedProducts, setSortedProducts] = useState<ProductType[]>([])
	const [selectedSort, setSelectedSort] = useState<string | undefined>('')

	// Filters
	const [categoryFilters, setCategoryFilters] = useState<(string | null)[]>([])
	const [collectionFilters, setCollectionFilters] = useState<(string | null)[]>([])
	const [priceFilters, setPriceFilters] = useState<(string | null)[]>([])

	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	const collectionFilter = queryParams.get('collection')

	useEffect(() => {
		if (collectionFilter) {
			setCollectionFilters([collectionFilter])
		}
		window.scrollTo(0, 0)
	}, [collectionFilter])

	useEffect(() => {
		let filteredProducts = [...products]

		if (categoryFilters.length > 0) {
			filteredProducts = filterCategory(filteredProducts, categoryFilters)
		}

		if (collectionFilters.length > 0) {
			filteredProducts = filterCollection(filteredProducts, collectionFilters)
		}

		if (priceFilters.length > 0) {
			filteredProducts = filterPrice(filteredProducts, priceFilters)
		}

		// Apply sorting
		switch (selectedSort) {
			case 'Relevance':
				// No sorting needed
				break
			case 'Price: Low to High':
				filteredProducts = priceLowToHigh(filteredProducts)
				break
			case 'Price: High to Low':
				filteredProducts = priceHighToLow(filteredProducts)
				break
			case 'Newest':
				filteredProducts = sortNewest(filteredProducts)
				break
			default:
				// No sorting needed
				break
		}

		setSortedProducts(filteredProducts)
	}, [selectedSort, categoryFilters, collectionFilters, priceFilters, products])

	return (
		<div className="mx-auto max-w-7xl bg-gray-50">
			<div className="px-4 py-8 sm:px-6 md:py-16 lg:px-8">
				<div className="mb-4 flex items-center justify-between">
					<h2 className="text-lg font-bold text-gray-700 md:text-2xl">
						All Products <span className="block pl-1 text-sm font-thin sm:inline">{sortedProducts.length} products</span>
					</h2>

					{/* Sort */}
					<div className="md:w-52">
						<Select label="Sort by" className="font-class" value={selectedSort} onChange={(val: string | undefined) => setSelectedSort(val)}>
							<Option className="font-class" value="Relevance">
								Relevance
							</Option>
							<Option className="font-class" value="Price: Low to High">
								Price: Low to High
							</Option>
							<Option className="font-class" value="Price: High to Low">
								Price: High to Low
							</Option>
							<Option className="font-class" value="Newest">
								Newest
							</Option>
						</Select>
					</div>
				</div>

				{/* Filters */}
				<div className="flex flex-col sm:flex-row">
					<div className="w-full space-y-3 pr-4 sm:mr-4 sm:w-60 sm:pr-0">
						<Accordion
							header="Category"
							options={['Barbells', 'Plates', 'Racks', 'Accessories']}
							selectedFilters={categoryFilters}
							setSelectedFilters={setCategoryFilters}
							accordionId={1}
						/>
						<Accordion
							header="Collections"
							options={['Powerlifting', 'Calisthenics', 'Functional', 'Racks']}
							selectedFilters={collectionFilters}
							setSelectedFilters={setCollectionFilters}
							accordionId={2}
						/>
						<Accordion
							header="Price"
							options={['Under $50', '$50 - $100', '$100 - $200', '$200 - $300', '$300 - $400', '$400 - $500', 'Over $500']}
							selectedFilters={priceFilters}
							setSelectedFilters={setPriceFilters}
							accordionId={3}
						/>
					</div>

					{/* Products List */}
					<div className="flex flex-grow flex-col">
						{isLoading ? (
							<Spinner className="m-auto flex h-10 w-10 " color="gray" />
						) : isError ? (
							<p className="flex justify-center text-xl font-semibold text-gray-800">Error fetching products</p>
						) : (
							<div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:mt-0 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
								{sortedProducts.map((product) => (
									<ProductCard product={product} key={product.id} setIsDrawerOpen={setIsDrawerOpen} />
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductsPage
