import { useContext, useEffect, useRef } from 'react'
import { CartContext } from '../App'
import { Drawer, Typography, IconButton } from '@material-tailwind/react'
import { HiOutlineXMark } from 'react-icons/hi2'
import ProductType from '../types/productType'

const CartPage = ({ isDrawerOpen, setIsDrawerOpen }: { isDrawerOpen: boolean; setIsDrawerOpen: (value: boolean) => void }) => {
	const [cartProducts] = useContext<ProductType[]>(CartContext)
	const overlayRef = useRef<HTMLDivElement>(null)

	const handleImage = (product: ProductType) => {
		const image = import.meta.env.VITE_IMAGE + product.attributes.image.data.attributes.url
		return image
	}
	useEffect(() => {
		if (cartProducts.length > 0) {
			setIsDrawerOpen(true)
		}
	}, [cartProducts])

	useEffect(() => {
		if (isDrawerOpen) {
			document.body.style.overflow = 'hidden'
			if (overlayRef.current) {
				overlayRef.current.style.backdropFilter = 'blur(2px)'
			}
		} else {
			document.body.style.overflow = 'auto'
			if (overlayRef.current) {
				overlayRef.current.style.backdropFilter = 'none'
			}
		}
	}, [isDrawerOpen])

	return (
		<div
			ref={overlayRef}
			style={{
				pointerEvents: isDrawerOpen ? 'auto' : 'none',
				zIndex: 9999,
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%'
			}}
		>
			<div className="flex h-full flex-col">
				<Drawer size={350} placement="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} className="p-4">
					<div className="mb-6 flex items-center justify-between">
						<Typography variant="h4" color="blue-gray" className="font-class font-thin">
							Shopping cart
						</Typography>
						<IconButton variant="text" color="blue-gray" onClick={() => setIsDrawerOpen(false)}>
							<HiOutlineXMark className="h-6 w-6" />
						</IconButton>
					</div>

					{cartProducts.length > 0 ? (
						<>
							<div className="custom-scrollbar max-h-[calc(100vh-300px)] flex-grow overflow-y-auto p-2">
								<ul className="divide-y divide-gray-200">
									{Array.isArray(cartProducts) &&
										cartProducts.map((product: ProductType) => (
											<li key={product.id} className="flex py-6">
												<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
													<img
														src={handleImage(product)}
														alt={product.attributes.name}
														className="h-full w-full object-cover object-center"
													/>
												</div>

												<div className="ml-4 flex flex-1 flex-col">
													<div>
														<div className="flex justify-between text-base font-medium text-gray-900">
															<h3>
																<a
																// href={product.href}
																>
																	{product.attributes.name}
																</a>
															</h3>
															<p className="ml-4">{product.attributes.price}</p>
														</div>
													</div>
													<div className="flex flex-1 items-end justify-between text-sm">
														<p className="text-gray-500">Qty 3</p>

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
										<button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
											Continue Shopping
											<span aria-hidden="true"> &rarr;</span>
										</button>
									</p>
								</div>
							</div>
						</>
					) : (
						<div className="flex h-96 items-center justify-center">
							<h1 className="text-3xl font-bold text-gray-800">Your cart is empty</h1>
						</div>
					)}
				</Drawer>
			</div>
		</div>
	)
}
export default CartPage
