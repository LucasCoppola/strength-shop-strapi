import React, { useEffect, useState } from 'react'
import Commerce from '@chec/commerce.js'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductItem from '../components/ProductItem'
import PropTypes from 'prop-types'

const commercePublicKey = import.meta.env.VITE_COMMERCE_JS_PUBLIC_KEY
const commerce = new Commerce(commercePublicKey)

const HomePage = () => {
	const [products, setProducts] = useState([])

	const fetchProducts = () => {
		commerce.products
			.list()
			.then((products) => {
				setProducts(products.data)
			})
			.catch((error) => {
				console.log('There was an error fetching the products', error)
			})
	}

	useEffect(() => {
		fetchProducts()
	}, [])
	console.log(products)

	return (
		<>
			<div className="bg-image">
				<Navbar />
				<main className="py-16">
					<div className="container mx-auto flex justify-center px-4 align-middle">
						<div className="relative text-center">
							<h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Welcome to Strength Shop</h1>
							<p className="mb-8 text-lg text-white lg:text-xl">
								Discover high-quality strength training equipment and accessories for your fitness journey.
							</p>
							<a href="#" className="shop-btn mx-auto mt-28">
								Shop Now
							</a>
						</div>
					</div>
				</main>
			</div>

			<section className="featured text-center">
				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					<h2 className="text-2xl font-bold tracking-tight text-white">Trending Now</h2>

					<div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-10">
						{products.map((product) => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
				</div>

				<section className="body-font  text-gray-400">
					<div className="container mx-auto px-5 py-24">
						<div className="mb-20 text-center">
							<h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">Raw Denim Heirloom Man Braid</h1>
							<p className="mx-auto text-base leading-relaxed text-gray-400 text-opacity-80 lg:w-3/4 xl:w-2/4">
								Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
								mi pug.
							</p>
							<div className="mt-6 flex justify-center">
								<div className="inline-flex h-1 w-16 rounded-full bg-indigo-500"></div>
							</div>
						</div>
						<div className="-mx-4 -mb-10 -mt-4 flex flex-wrap space-y-6 sm:-m-4 md:space-y-0">
							<div className="flex flex-col items-center p-4 text-center md:w-1/3">
								<div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 text-indigo-400">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="h-10 w-10"
										viewBox="0 0 24 24"
									>
										<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
									</svg>
								</div>
								<div className="flex-grow">
									<h2 className="title-font mb-3 text-lg font-medium text-white">Shooting Stars</h2>
									<p className="text-base leading-relaxed">
										Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps
										microdosing banh mi pug VHS try-hard.
									</p>
									<a className="mt-3 inline-flex items-center text-indigo-400">
										Learn More
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="ml-2 h-4 w-4"
											viewBox="0 0 24 24"
										>
											<path d="M5 12h14M12 5l7 7-7 7"></path>
										</svg>
									</a>
								</div>
							</div>
							<div className="flex flex-col items-center p-4 text-center md:w-1/3">
								<div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 text-indigo-400">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="h-10 w-10"
										viewBox="0 0 24 24"
									>
										<circle cx="6" cy="6" r="3"></circle>
										<circle cx="6" cy="18" r="3"></circle>
										<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
									</svg>
								</div>
								<div className="flex-grow">
									<h2 className="title-font mb-3 text-lg font-medium text-white">The Catalyzer</h2>
									<p className="text-base leading-relaxed">
										Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps
										microdosing banh mi pug VHS try-hard.
									</p>
									<a className="mt-3 inline-flex items-center text-indigo-400">
										Learn More
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="ml-2 h-4 w-4"
											viewBox="0 0 24 24"
										>
											<path d="M5 12h14M12 5l7 7-7 7"></path>
										</svg>
									</a>
								</div>
							</div>
							<div className="flex flex-col items-center p-4 text-center md:w-1/3">
								<div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 text-indigo-400">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="h-10 w-10"
										viewBox="0 0 24 24"
									>
										<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
										<circle cx="12" cy="7" r="4"></circle>
									</svg>
								</div>
								<div className="flex-grow">
									<h2 className="title-font mb-3 text-lg font-medium text-white">Neptune</h2>
									<p className="text-base leading-relaxed">
										Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps
										microdosing banh mi pug VHS try-hard.
									</p>
									<a className="mt-3 inline-flex items-center text-indigo-400">
										Learn More
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="ml-2 h-4 w-4"
											viewBox="0 0 24 24"
										>
											<path d="M5 12h14M12 5l7 7-7 7"></path>
										</svg>
									</a>
								</div>
							</div>
						</div>
						<button className="mx-auto mt-16 flex rounded border-0 bg-indigo-500 px-8 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
							Button
						</button>
					</div>
				</section>
				<Footer />
			</section>
		</>
	)
}

HomePage.propTypes = {
	products: PropTypes.array
}

export default HomePage
