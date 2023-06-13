import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import Accordion from '../components/Accordion'
import fetchProducts from '../api/fetchProducts'

import { Select, Option } from '@material-tailwind/react'

type Product = {
	id: number
	attributes: {
		id: number
		name: string
		price: number
		type: string
		image: {
			data: {
				attributes: {
					url: string
				}
			}
		}
	}
}

const ProductsPage = () => {
	const [products, setProducts] = useState<Product[]>([])
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

	return (
		<div className="mx-auto max-w-7xl bg-gray-50">
			<div className="px-4 py-8 sm:px-6 md:py-16 lg:px-8">
				<div className="mb-4 flex items-center justify-between">
					<h2 className="text-lg font-bold text-gray-700 md:text-2xl">
						All Products <span className="block pl-1 text-sm font-thin sm:inline">{products.length} products</span>
					</h2>

					{/* Dropdown Menu */}
					<div className="md:w-52">
						<Select label="Sort by" className="font-class">
							<Option className="font-class">Relevance</Option>
							<Option className="font-class">Price: Low to High</Option>
							<Option className="font-class">Price: High to Low</Option>
							<Option className="font-class">Newest</Option>
						</Select>
					</div>
				</div>

				{/* Filters */}
				<div className="flex flex-col sm:flex-row">
					<div className="w-full space-y-3 pr-4 sm:mr-4 sm:w-1/3 sm:pr-0">
						<Accordion header="Category" options={['Barbells', 'Plates', 'Racks', 'Accessories']} accordionId={1} />
						<Accordion header="Collections" options={['Powerlifting', 'Calisthenics', 'Functional']} accordionId={2} />
						<Accordion
							header="Price"
							options={['Under $50', '$50 - $100', '$100 - $200', '$200 - $300', '$300 - $400', '$400 - $500', 'Over $500']}
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
								{products.map((product) => (
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
