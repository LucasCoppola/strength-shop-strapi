import { useState, useEffect, useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'
import { CartContext } from '../contexts/CartProvider'
import ProductType from '../types/productType'

const Navbar = ({ setIsDrawerOpen }: { setIsDrawerOpen: (value: boolean) => void }) => {
	const [cartProducts] = useContext<ProductType[]>(CartContext)
	const [isOpen, setIsOpen] = useState(false)
	const [prevScrollPos, setPrevScrollPos] = useState(0)
	const [isVisible, setIsVisible] = useState(true)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset
			const visible = prevScrollPos > currentScrollPos

			setPrevScrollPos(currentScrollPos)
			setIsVisible(visible)
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [prevScrollPos])

	return (
		<nav className={`sticky top-0 z-50 bg-gray-50 shadow-md transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
			<div className="container mx-auto px-6 py-3 text-gray-700 md:flex md:justify-between md:py-2">
				<div className="flex items-center justify-between">
					<a href="/">
						<img className="h-6 w-auto sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
					</a>

					<div className="flex md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							type="button"
							className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
							aria-label="toggle menu"
						>
							{isOpen ? <RxCross2 color="gray" /> : <RxHamburgerMenu color="gray" />}
						</button>
					</div>
				</div>

				<div
					className={`${
						isOpen ? 'translate-x-0  opacity-100' : '-translate-x-full opacity-0'
					} absolute inset-x-0 z-20 bg-gray-100 py-4 transition-all duration-300 ease-in-out md:relative md:top-0 md:mt-0 md:flex md:translate-x-0 md:items-center md:bg-transparent md:p-0 md:opacity-100`}
				>
					<div className="flex flex-col px-2 md:flex-row md:items-center md:p-0 md:opacity-100 lg:mr-20 xl:mr-52 2xl:mr-80">
						<a href="#" className="transform rounded-lg px-2.5 py-2 transition-colors duration-300 md:mx-2">
							About
						</a>
						<a href="/products" className="transform rounded-lg px-2.5 py-2 transition-colors duration-300 md:mx-2">
							Shop
						</a>
						<a href="#" className="transform rounded-lg px-2.5 py-2 transition-colors duration-300 md:mx-2">
							Contact
						</a>
					</div>
					<div className="relative mt-2 flex items-center md:mt-0">
						<div className="relative mx-4">
							<span className="absolute inset-y-0 left-0 flex items-center pl-3">
								<HiOutlineMagnifyingGlass size={24} color="gray" />
							</span>

							<input
								type="text"
								className="rounded-lg border bg-transparent py-2 pl-[2.7rem] text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 md:w-52 lg:w-full"
								placeholder="Search"
							/>
						</div>

						<div className="flex justify-center">
							<a onClick={() => setIsDrawerOpen(true)} className="relative transform transition-colors duration-300 hover:text-gray-600" href="#">
								<AiOutlineShoppingCart size={24} />
								{cartProducts.length > 0 && (
									<span className="absolute right-[-0.6rem] top-[-0.2rem] rounded-full bg-blue-500 px-1.5 py-2 font-body text-xs/[0.5px] font-semibold text-white">
										{cartProducts.length}
									</span>
								)}
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
