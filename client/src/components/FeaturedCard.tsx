import Product from '../types/productType'

const FeaturedCard = ({ product }: { product: Product }) => {
	const image = import.meta.env.VITE_IMAGE + product.image.data.attributes.url

	return (
		<div key={product.id} className="group relative">
			<div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full transform overflow-hidden rounded-md shadow-2xl transition duration-300 ease-in-out hover:scale-105">
				<div className="flex h-full items-center justify-center">
					<img src={image} alt={product.name} className="max-h-full object-cover object-center" />
				</div>
			</div>
			<div className="mt-4 flex justify-between">
				<div>
					<h3 className="text-base font-semibold text-gray-900">
						{/* <a href={product.href}> */}
						<span aria-hidden="true" className="absolute inset-0" />
						{product.name}
						{/* </a> */}
					</h3>
				</div>
				<p className="text-base font-semibold text-gray-900">${product.price}</p>
			</div>
		</div>
	)
}

export default FeaturedCard
