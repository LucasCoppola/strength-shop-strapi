import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartProvider'
import ProductType from '../types/productType'

const FeaturedCard = ({ product, setIsDrawerOpen }: { product: ProductType; setIsDrawerOpen: (open: boolean) => void }) => {
	const [cartProducts, setCartProducts] = useContext(CartContext)

	const image = import.meta.env.VITE_IMAGE + product.attributes.image.data.attributes.url

	return (
		<Card className="w-72">
			<a href={`/products/${product.id}`}>
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
			</a>
			<CardFooter className="pt-0">
				<Button
					onClick={() => {
						setCartProducts([...cartProducts, product])
						setIsDrawerOpen(true)
					}}
					disabled={cartProducts.some((p: ProductType) => p.id === product.id)}
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
