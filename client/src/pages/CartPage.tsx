import { Drawer, Typography, IconButton } from '@material-tailwind/react'
import { HiOutlineXMark } from 'react-icons/hi2'

const products = [
	{
		id: 1,
		name: 'Throwback Hip Bag',
		href: '#',
		color: 'Salmon',
		price: '$90.00',
		quantity: 1,
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
		imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.'
	},
	{
		id: 2,
		name: 'Medium Stuff Satchel',
		href: '#',
		color: 'Blue',
		price: '$32.00',
		quantity: 1,
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
		imageAlt: 'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.'
	}
	// More products...
]

const CartPage = ({ isDrawerOpen, setIsDrawerOpen }: { isDrawerOpen: boolean; setIsDrawerOpen: (value: boolean) => void }) => {
	return (
		<>
			<Drawer size={350} placement="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} className="p-4">
				<div className="mb-6 flex items-center justify-between">
					<Typography variant="h4" color="blue-gray" className="font-class font-thin">
						Shopping cart
					</Typography>
					<IconButton variant="text" color="blue-gray" onClick={() => setIsDrawerOpen(false)}>
						<HiOutlineXMark className="h-6 w-6" />
					</IconButton>
				</div>

				<div className="overflow-y-auto">
					<ul className="divide-y divide-gray-200">
						{products.map((product) => (
							<li key={product.id} className="flex py-6">
								<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
									<img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center" />
								</div>

								<div className="ml-4 flex flex-1 flex-col">
									<div>
										<div className="flex justify-between text-base font-medium text-gray-900">
											<h3>
												<a href={product.href}>{product.name}</a>
											</h3>
											<p className="ml-4">{product.price}</p>
										</div>
										<p className="mt-1 text-sm text-gray-500">{product.color}</p>
									</div>
									<div className="flex flex-1 items-end justify-between text-sm">
										<p className="text-gray-500">Qty {product.quantity}</p>

										<div className="flex">
											<button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
												Remove
											</button>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>

				<div className="border-t border-gray-200 pt-6">
					<div className="flex justify-between text-base font-medium text-gray-900">
						<p>Total:</p>
						<p>$262.00</p>
					</div>

					<div className="mt-6">
						<a
							href="#"
							className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
						>
							Checkout
						</a>
					</div>
					<div className="mt-6 flex justify-center text-center text-sm text-gray-500">
						<p>
							or{' '}
							<button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => setIsDrawerOpen(false)}>
								Continue Shopping
								<span aria-hidden="true"> &rarr;</span>
							</button>
						</p>
					</div>
				</div>
			</Drawer>
		</>
	)
}
export default CartPage
