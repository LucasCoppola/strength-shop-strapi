import Product from '../types/productType'
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react'
import { MdOutlineAddShoppingCart } from 'react-icons/md'

const ProductCard = ({ product }: { product: Product }) => {
	const image = import.meta.env.VITE_IMAGE + product.image.data.attributes.url

	return (
		// <Card className="w-auto ">
		// 	<CardHeader shadow={false} floated={false} className="h-auto">
		// 		<img src={image} alt={product.name} className="h-full w-full object-cover" />
		// 	</CardHeader>
		// 	<CardBody>
		// 		<div className="mb-2 flex items-center justify-between">
		// 			<Typography color="blue-gray" className="font-class text-sm">
		// 				{product.name}
		// 			</Typography>
		// 			<Typography color="blue-gray" className="font-class text-sm font-bold">
		// 				${product.price}
		// 			</Typography>
		// 		</div>
		// 	</CardBody>
		// 	<CardFooter className="pt-0">
		// 		<Button
		// 			ripple={false}
		// 			fullWidth={true}
		// 			className="font-class bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
		// 		>
		// 			Add to Cart
		// 		</Button>
		// 	</CardFooter>
		// </Card>
		<a title={product.name} className="group rounded-lg border hover:shadow-md">
			<div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 relative w-full overflow-hidden">
				<img
					src={image}
					alt={product.name}
					className="h-full w-full object-cover object-center transition-opacity duration-300 group-hover:opacity-50"
				/>
				<button
					title="Add to cart"
					className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform items-center rounded-full bg-gray-900 px-6 py-2 opacity-0 transition-colors duration-300 group-hover:opacity-100"
				>
					<MdOutlineAddShoppingCart size={24} color="white" />
				</button>
			</div>
			<h3 className="mt-4 px-3 pb-1 text-sm text-gray-700">{product.name}</h3>
			<p className="mt-1 px-3 pb-1 text-base font-medium text-gray-900">${product.price}</p>
		</a>
	)
}

export default ProductCard
