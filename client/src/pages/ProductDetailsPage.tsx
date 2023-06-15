import ProductType from '../types/productType'
import { useParams } from 'react-router-dom'

const ProductDetailsPage = ({ products, isLoading, isError }: { products: ProductType[]; isLoading: boolean; isError: boolean }) => {
	const { id } = useParams()
	const product = products.find((product) => product.id === Number(id))
	const image = import.meta.env.VITE_IMAGE + product?.attributes.image.data.attributes.url

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
				<div className="flex items-center justify-center">
					<img src={image} alt={product?.attributes.name} className="w-2/3" />
				</div>
				<div>
					<h2 className="mb-4 text-3xl font-semibold">{product?.attributes.name}</h2>
					<p className="mb-4 text-lg text-gray-600">${product?.attributes.price.toFixed(2)}</p>
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

			<div className="mt-12">
				<h3 className="mb-4 text-2xl font-semibold">Similar Items</h3>
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
					{/* {similarItems.map((item) => (
						<div key={item.id} className="rounded-lg border border-gray-300 p-4">
							<img src={item.imageUrl} alt={item.name} className="w-full" />
							<h4 className="mt-2 text-lg font-semibold">{item.name}</h4>
							<p className="text-gray-600">${item.price.toFixed(2)}</p>
						</div>
					))} */}
				</div>
			</div>
		</div>
	)
}

export default ProductDetailsPage
