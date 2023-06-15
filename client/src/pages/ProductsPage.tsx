import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import Accordion from '../components/Accordion'
import fetchProducts from '../api/fetchProducts'
import ProductType from '../types/productType'
import { priceHighToLow, priceLowToHigh, sortNewest } from '../filter&sort/sort'
import { filterCategory, filterCollection, filterPrice } from '../filter&sort/filters'

import { Select, Option } from '@material-tailwind/react'

const ProductsPage = () => {
	const [products, setProducts] = useState<ProductType[]>([])
	const [sortedProducts, setSortedProducts] = useState<ProductType[]>([])
	const [selectedSort, setSelectedSort] = useState<string | undefined>('')

	// Filters
	const [categoryFilters, setCategoryFilters] = useState<(string | null)[]>([])
	const [collectionFilters, setCollectionFilters] = useState<(string | null)[]>([])
	const [priceFilters, setPriceFilters] = useState<(string | null)[]>([])

	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchProducts()
				setProducts(data)
				setIsLoading(false)
			} catch (error) {
				setIsLoading(false)
				setIsError(true)
			}
		}

		fetchData()
	}, [])

	useEffect(() => {
		let filteredProducts = [...products]

		// Apply category filter
		if (categoryFilters.length > 0) {
			filteredProducts = filterCategory(filteredProducts, categoryFilters)
		}

		// Apply collection filter
		if (collectionFilters.length > 0) {
			filteredProducts = filterCollection(filteredProducts, collectionFilters)
		}

		// Apply price filter
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
		<div className="mx-auto max-w-7xl bg-white">
			<div className="px-4 py-8 sm:px-6 md:py-16 lg:px-8">
				<div className="mb-4 flex items-center justify-between">
					<h2 className="text-lg font-bold text-gray-700 md:text-2xl">
						All Products <span className="block pl-1 text-sm font-thin sm:inline">{products.length} products</span>
					</h2>

					{/* Dropdown Menu */}
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
							<p>Loading...</p>
						) : isError ? (
							<p>Error fetching products.</p>
						) : (
							<div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:mt-0 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
								{sortedProducts.map((product) => (
									<ProductCard product={product.attributes} key={product.id} />
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
