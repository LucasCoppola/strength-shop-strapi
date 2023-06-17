import { useState } from 'react'
import ProductType from '../types/productType'
import { useParams } from 'react-router-dom'

const ProductDetailsPage = ({ products, isLoading, isError }: { products: ProductType[]; isLoading: boolean; isError: boolean }) => {
	const { id } = useParams()
	const product = products.find((product) => product.id === Number(id))
	const image = import.meta.env.VITE_IMAGE + product?.attributes.image.data.attributes.url

	const [currentSetIndex, setCurrentSetIndex] = useState(0)
	const productsPerSet = 3

	const handleNextSet = () => {
		setCurrentSetIndex((prevIndex) => (prevIndex === Math.floor(products.length / productsPerSet) ? 0 : prevIndex + 1))
	}

	const handlePrevSet = () => {
		setCurrentSetIndex((prevIndex) => (prevIndex === 0 ? Math.floor(products.length / productsPerSet) : prevIndex - 1))
	}

	const productImg = (product: ProductType) => {
		return import.meta.env.VITE_IMAGE + product?.attributes.image.data.attributes.url
	}

	return (
		<div className="container mx-auto px-4 py-8">
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
						<h2 className="mb-4 text-3xl font-semibold">{product?.attributes.name}</h2>
						<p className="mb-4 text-lg text-gray-600">${product?.attributes.price}</p>
						<p className="mb-6 text-gray-700">{product?.attributes.description}</p>
						<h3 className="mb-2 text-lg font-semibold">Features:</h3>
						<ul className="list-inside list-disc">
							<li>Built for competition</li>
							<li>Precision and durability</li>
							<li>Solid rubber construction</li>
							<li>Impact absorption and noise reduction</li>
							<li>Bold color coding for easy weight identification</li>
							<li>Stainless steel inserts for secure fit</li>
						</ul>
						<button className="mt-8 rounded-full bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600">Add to Cart</button>
					</div>
				</div>
			)}

			<div className="mt-12">
				<h3 className="mb-4 text-2xl font-semibold">Similar Items</h3>
				<div className="flex items-center">
					<button className="rounded-full bg-gray-200 p-2 hover:bg-gray-300" onClick={handlePrevSet}>
						Prev
					</button>
					<div className="flex flex-grow space-x-4 overflow-x-auto">
						{products.slice(currentSetIndex * productsPerSet, currentSetIndex * productsPerSet + productsPerSet).map((product) => (
							<div key={product.id} className="rounded-lg border border-gray-300 p-4">
								<img src={productImg(product)} alt={product?.attributes.name} className="w-full" />
								<h4 className="mt-2 text-lg font-semibold">{product?.attributes.name}</h4>
								<p className="text-gray-600">${product?.attributes.price}</p>
							</div>
						))}
					</div>
					<button className="rounded-full bg-gray-200 p-2 hover:bg-gray-300" onClick={handleNextSet}>
						Next
					</button>
				</div>
			</div>
		</div>
	)
}

export default ProductDetailsPage
