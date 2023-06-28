import { useContext } from 'react'
import { CartContext } from '../App'
import { Spinner } from '@material-tailwind/react'
import ProductType from '../types/productType'

const CheckoutPage = ({ isError, isLoading }: { isError: boolean; isLoading: boolean }) => {
	const [cartProducts] = useContext(CartContext)

	const handleImage = (product: ProductType) => {
		const image = import.meta.env.VITE_IMAGE + product.attributes.image.data.attributes.url
		return image
	}

	return (
		<div className="flex justify-center py-8">
			<div className="mx-4 w-full max-w-5xl rounded-md bg-gray-50">
				<div className="flex flex-col md:flex-row">
					{/* Payment Info */}
					<div className="w-full border-b px-16 py-8 md:w-2/3 md:border-b-0 md:border-r">
						<button className="my-8 flex w-full justify-center rounded-md bg-[#FFBF00] py-2 text-sm font-semibold hover:bg-[#FFA500]">
							<img src="../../assets/paypal.png" alt="paypal logo" className="w-30 h-7 object-cover" />
						</button>

						<hr className="my-4" />

						<div className="mb-4">
							<label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
								Email Address
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
								Name on Card
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="cardNumber" className="mb-1 block text-sm font-medium text-gray-700">
								Card Number
							</label>
							<input
								type="text"
								id="cardNumber"
								name="cardNumber"
								className="block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
						<div className="mb-4 flex items-center">
							<div className="mr-2 w-1/2">
								<label htmlFor="expiration" className="mb-1 block text-sm font-medium text-gray-700">
									Expiration Date
								</label>
								<input
									type="text"
									id="expiration"
									name="expiration"
									className="block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
							<div className="ml-2 w-1/2">
								<label htmlFor="cvc" className="mb-1 block text-sm font-medium text-gray-700">
									CVC
								</label>
								<input
									type="text"
									id="cvc"
									name="cvc"
									className="block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
						</div>
						<div className="mb-4">
							<label htmlFor="address" className="mb-1 block text-sm font-medium text-gray-700">
								Address
							</label>
							<input
								type="text"
								id="address"
								name="address"
								className="block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
						<div className="mb-4 flex items-center">
							<div className="mr-2 w-1/3">
								<label htmlFor="city" className="mb-1 block text-sm font-medium text-gray-700">
									City
								</label>
								<input
									type="text"
									id="city"
									name="city"
									className="block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
							<div className="mr-2 w-1/3">
								<label htmlFor="state" className="mb-1 block text-sm font-medium text-gray-700">
									State/Province
								</label>
								<input
									type="text"
									id="state"
									name="state"
									className="block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
							<div className="ml-2 w-1/3">
								<label htmlFor="postalCode" className="mb-1 block text-sm font-medium text-gray-700">
									Postal Code
								</label>
								<input
									type="text"
									id="postalCode"
									name="postalCode"
									className="block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
						</div>
						<div className="mb-4 flex items-center">
							<input type="checkbox" id="terms" name="terms" className="mr-2" />
							<label htmlFor="terms" className="text-sm text-gray-700">
								Save this information for next time
							</label>
						</div>
						<button className="w-full rounded-md bg-gray-800 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-900">
							Pay (insert total)
						</button>
					</div>

					{/* Product List */}
					<div className="w-full px-6 py-8 md:w-1/3">
						{isLoading ? (
							<Spinner className="m-auto flex h-10 w-10" color="gray" />
						) : isError ? (
							<p className="flex justify-center text-xl font-semibold text-gray-800">Error fetching products</p>
						) : (
							<div className="custom-scrollbar max-h-[300px] flex-grow overflow-y-auto overflow-x-hidden p-3">
								{cartProducts.map((product: ProductType) => (
									<div key={product.id} className="mb-4 flex items-center justify-between">
										<div className="flex items-center">
											<div className="relative max-w-[80px]">
												<img
													src={handleImage(product)}
													alt={product.attributes.name}
													className="mr-4 h-20 w-20 rounded-md object-contain"
												/>
												<span className="absolute right-0 top-0 w-6 rounded-full bg-gray-500 p-1 text-center text-xs text-white">
													{product.attributes.quantity}
												</span>
											</div>
											<div className="ml-1 flex flex-grow flex-col">
												<h3 className="text-base font-medium text-gray-900">{product.attributes.name}</h3>
												<p className="text-sm text-gray-600">${product.attributes.price}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						)}

						{/* Add Discount Code */}
						<div className="mb-4 mt-6 flex flex-col">
							<label htmlFor="discountCode" className="mb-1 mr-auto text-xs font-medium text-gray-800">
								Discount code
							</label>
							<div className="flex">
								<input
									id="discountCode"
									type="text"
									className="block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								/>
								<button className="ml-4 rounded-md bg-gray-400 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-500">Apply</button>
							</div>
						</div>

						{/* Summary */}
						<div>
							<p className="mb-2 flex justify-between text-sm">
								<span className="font-semibold text-gray-700">Subtotal</span>
								<span className="text-gray-900">$149.98</span>
							</p>
							<p className="mb-2 flex justify-between text-sm">
								<span className="font-semibold text-gray-700">Taxes</span>
								<span className="text-gray-900">$14.99</span>
							</p>
							<p className="mb-2 flex justify-between text-sm">
								<span className="font-semibold text-gray-700">Shipping</span>
								<span className="text-gray-900">$5.00</span>
							</p>
							<hr className="my-4" />
							<p className="flex justify-between text-xl font-semibold text-gray-800">
								<span>Total</span>
								<span>$169.97</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CheckoutPage
