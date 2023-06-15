import { Link } from 'react-router-dom'
import ProductType from '../types/productType'
import { MdOutlineAddShoppingCart } from 'react-icons/md'

const ProductCard = ({ product }: { product: ProductType }) => {
	const image = import.meta.env.VITE_IMAGE + product.attributes.image.data.attributes.url

	return (
		<Link to={`/products/${product.id}`} title={product.attributes.name} className="group rounded-lg border hover:shadow-lg">
			<div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 relative w-full overflow-hidden">
				<img
					src={image}
					alt={product.attributes.name}
					className="w-full object-cover object-center transition-opacity duration-300 group-hover:opacity-50 md:h-52 lg:h-36 xl:h-48"
				/>
				<button
					title="Add to cart"
					className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform items-center rounded-full bg-gray-900 px-6 py-2 opacity-0 transition-colors duration-300 group-hover:opacity-100"
				>
					<MdOutlineAddShoppingCart size={24} color="white" />
				</button>
			</div>
			<h3 className="mt-4 px-2 pb-1 text-sm text-gray-700">{product.attributes.name}</h3>
			<p className="mt-1 px-2 pb-2 text-base font-medium text-gray-900">${product.attributes.price}</p>
		</Link>
	)
}

export default ProductCard
