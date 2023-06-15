import ProductType from '../types/productType'
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react'

const FeaturedCard = ({ product }: { product: ProductType }) => {
	const image = import.meta.env.VITE_IMAGE + product.attributes.image.data.attributes.url

	return (
		<Card className="w-72">
			<CardHeader shadow={false} floated={false} className="h-60">
				<img src={image} alt={product.attributes.name} className="h-full w-full object-cover" />
			</CardHeader>
			<CardBody>
				<div className="mb-2 flex items-center justify-between">
					<Typography color="blue-gray" className="font-class text-sm">
						{product.attributes.name}
					</Typography>
					<Typography color="blue-gray" className="font-class text-sm font-bold">
						${product.attributes.price}
					</Typography>
				</div>
			</CardBody>
			<CardFooter className="pt-0">
				<Button
					ripple={false}
					fullWidth={true}
					className="font-class bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
				>
					Add to Cart
				</Button>
			</CardFooter>
		</Card>
	)
}
export default FeaturedCard
