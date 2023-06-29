import { useContext, useEffect, useRef } from 'react'
import { Drawer, Typography, IconButton } from '@material-tailwind/react'
import { HiOutlineXMark } from 'react-icons/hi2'
import { FaTrash } from 'react-icons/fa'
import ProductType from '../types/productType'
import useLocalStorageState from '../hooks/useLocalStorageState'
import { CartContext } from '../contexts/CartProvider'

const CartPage = ({ isDrawerOpen, setIsDrawerOpen }: { isDrawerOpen: boolean; setIsDrawerOpen: (value: boolean) => void }) => {
	const [cartProducts, setCartProducts] = useContext(CartContext)
	const overlayRef = useRef<HTMLDivElement>(null)
	const [selectQuantity, setSelectQuantity] = useLocalStorageState('selectQuantity', {})

	const handleImage = (product: ProductType) => {
		const image = import.meta.env.VITE_IMAGE + product.attributes.image.data.attributes.url
		return image
	}

	const handleRemove = (id: number) => {
		setCartProducts((prevProducts: ProductType[]) => {
			const updatedProducts = prevProducts.filter((product: ProductType) => product.id !== id)
			return updatedProducts
		})

		setSelectQuantity((prevSelectQuantity: { [key: number]: number }) => {
			const updatedQuantity = { ...prevSelectQuantity }
			delete updatedQuantity[id]
			return updatedQuantity
		})
	}

	const handleQuantity = (id: number, quantity: number) => {
		setCartProducts((prevProducts: ProductType[]) => {
			return prevProducts.map((product: ProductType) => {
				if (product.id === id) {
					return {
						...product,
						attributes: {
							...product.attributes,
							quantity: quantity
						}
					}
				}
				return product
			})
		})
		setSelectQuantity((prevSelectQuantity: { [key: number]: number }) => ({
			...prevSelectQuantity,
			[id]: quantity
		}))
	}

	const handleTotal = () => {
		return cartProducts.reduce((total: number, product: ProductType) => total + product.attributes.price * (selectQuantity[product.id] || 1), 0)
	}

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
				zIndex: 50,
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%'
			}}
		>
			<div className="flex h-full flex-col">
				<Drawer
					transition={{ type: 'tween', duration: 0.2 }}
					size={350}
					placement="right"
					open={isDrawerOpen}
					onClose={() => setIsDrawerOpen(false)}
					className="p-4"
				>
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
							<div className="custom-scrollbar max-h-[calc(100vh-300px)] flex-grow overflow-y-auto p-3">
								<ul className="divide-y divide-gray-200">
									{cartProducts.map((product: ProductType) => (
										<li key={product.id} className="flex py-6">
											<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
												<a href={`/products/${product.id}`}>
													<img
														src={handleImage(product)}
														alt={product.attributes.name}
														className="h-full w-full object-cover object-center"
													/>
												</a>
											</div>

											<div className="ml-4 flex flex-1 flex-col">
												<div className="flex justify-between text-base font-medium text-gray-900">
													<h3>{product.attributes.name}</h3>
													<div className="flex items-center">
														<button
															onClick={() => handleRemove(product.id)}
															type="button"
															className="font-medium text-gray-700 hover:text-gray-800"
														>
															<FaTrash />
														</button>
													</div>
												</div>

												<div className="mb-3 flex flex-1 items-end justify-between text-sm">
													<div className="text-right text-base">${product.attributes.price}</div>
													<div className="mt-4 flex items-center">
														<label htmlFor="select-qty" className="mr-1">
															Qty:
														</label>
														<select
															name="select-qty"
															value={selectQuantity[product.id] || 1}
															onChange={(e) => {
																const quantity = Number(e.target.value)
																handleQuantity(product.id, quantity)
															}}
															className="rounded border border-gray-300 px-1 py-0.5"
														>
															{Array.from({ length: 7 }, (_, i) => i + 1).map((qty) => (
																<option key={qty} value={qty}>
																	{qty}
																</option>
															))}
														</select>
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
									<p className="ml-4">${handleTotal().toFixed(2)}</p>
								</div>

								<div className="mt-6">
									<a
										href="/checkout"
										className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
									>
										Checkout
									</a>
								</div>
								<div className="mt-6 flex justify-center text-center text-sm text-gray-500">
									<p>
										or{' '}
										<button onClick={() => setIsDrawerOpen(false)} className="font-medium text-indigo-600 hover:text-indigo-500">
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
