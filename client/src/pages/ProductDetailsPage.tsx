import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '@material-tailwind/react'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import ProductType from '../types/productType'
import CategoryCarousel from '../components/CategoryCarousel'
import CollectionCarousel from '../components/CollectionCarousel'

const ProductDetailsPage = ({ products, isLoading, isError }: { products: ProductType[]; isLoading: boolean; isError: boolean }) => {
	const { id } = useParams()
	const product = products.find((product) => product.id === Number(id))
	const image = import.meta.env.VITE_IMAGE + product?.attributes.image.data.attributes.url

	const [productsPerSet, setProductsPerSet] = useState<number>(3)
	const currentProductCategory = product?.attributes.category
	const filteredProductsByCategory = products.filter((product) => product.attributes.category === currentProductCategory && product.id !== Number(id))

	const currentProductCollection = product?.attributes.collection
	const filteredProductsByCollection = products.filter((product) => product.attributes.collection === currentProductCollection && product.id !== Number(id))

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024) {
				setProductsPerSet(3)
			} else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
				setProductsPerSet(2)
			} else {
				setProductsPerSet(1)
			}
		}

		// Add event listener to window resize
		window.addEventListener('resize', handleResize)

		// Call the handleResize function initially
		handleResize()

		// Clean up the event listener on component unmount
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<div className="container mx-auto bg-gray-50 px-4 py-8">
			{isLoading ? (
				<p className="flex justify-center text-xl font-semibold text-gray-800">Loading...</p>
			) : isError ? (
				<p className="flex justify-center text-xl font-semibold text-gray-800">Error fetching product</p>
			) : (
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
					<div className="flex items-center justify-center">
						<img src={image} alt={product?.attributes.name} className="w-2/3" />
					</div>
					<div>
						<h2 className="mb-4 text-3xl font-bold text-gray-800">{product?.attributes.name}</h2>
						<p className="mb-4 text-2xl  text-gray-900">${product?.attributes.price}</p>
						<p className="mb-6 text-sm text-gray-700">{product?.attributes.description}</p>
						<h3 className="mb-2 text-lg font-semibold">Features:</h3>
						<ul className="list-inside list-disc">
							<li>Built for competition</li>
							<li>Precision and durability</li>
							<li>Solid rubber construction</li>
						</ul>
						<Button
							color="gray"
							className="mt-6 inline-flex items-center rounded-full border-none bg-gray-900 px-8 py-2 text-base font-semibold hover:shadow-xl"
						>
							<MdOutlineAddShoppingCart size={18} className="mr-2" />
							Add to Cart
						</Button>
					</div>
				</div>
			)}

			{/* By Category */}
			<div className="mt-12">
				<h3 className="mb-6 text-3xl font-bold text-gray-800">
					Similar {product?.attributes.category.charAt(0).toUpperCase().concat(product?.attributes.category.slice(1))}
				</h3>
				<CategoryCarousel products={filteredProductsByCategory} productsPerSet={productsPerSet} />
			</div>

			{/* By Collection */}
			<div className="mt-12">
				<h3 className="mb-6 text-3xl font-bold text-gray-800">
					More of {product?.attributes.collection.charAt(0).toUpperCase().concat(product?.attributes.collection.slice(1))}
				</h3>
				<CollectionCarousel products={filteredProductsByCollection} productsPerSet={productsPerSet} />
			</div>
		</div>
	)
}

export default ProductDetailsPage
