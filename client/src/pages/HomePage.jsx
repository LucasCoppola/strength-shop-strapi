import React, { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductItem from '../components/ProductItem'
import PropTypes from 'prop-types'

import { RiTruckLine, RiCustomerServiceFill } from 'react-icons/ri'
import { BiWorld, BiCheckShield } from 'react-icons/bi'

const HomePage = () => {
	const [products, setProducts] = useState([])

	const fetchProducts = () => {
		const headers = {
			Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
		}

		fetch(import.meta.env.VITE_API_URL + '/items?populate=*', { headers })
			.then((res) => res.json())
			.then((data) => setProducts(data.data))
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
							<h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Welcome to Strength Shop</h1>
							<p className="mb-8 text-lg lg:text-xl">
								Discover high-quality strength training equipment and accessories for your fitness journey.
							</p>
							<a href="#" className="shop-btn mx-auto mt-28">
								Shop Now
							</a>
						</div>
					</div>
				</main>
			</div>

			{/* Featured */}
			<div className="gradient">
				<section className="featured text-center">
					<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
						<h2 className="mb-12 text-4xl font-bold tracking-tight text-gray-900">Trending</h2>
						<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
							{products.map((product) => (
								<ProductItem key={product.id} product={product.attributes} />
							))}
						</div>
					</div>
				</section>

				{/* Why Choose Us? */}
				<section className="pb-24 pt-12 text-gray-800">
					<div className="container mx-auto px-4">
						<h2 className="mb-16 text-center text-4xl font-bold tracking-tight">Why Choose Us?</h2>
						<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
							{/* Delivery Grid Card */}
							<div className="text-center">
								<RiTruckLine className="mb-4 inline-block text-6xl" />
								<h3 className="mb-2 text-2xl font-semibold leading-tight">Delivery</h3>
								<p className="text-sm leading-relaxed">
									We understand the importance of timely delivery. Our strength shop ensures fast and reliable shipping services.
								</p>
							</div>

							{/* Customer Grid Card */}
							<div className="text-center">
								<RiCustomerServiceFill className="mb-4 inline-block text-6xl" />
								<h3 className="mb-2 text-2xl font-semibold leading-tight">Customer Care</h3>
								<p className="text-sm leading-relaxed">
									Our knowledgeable and friendly customer support team is available to assist you with any queries or concerns.
								</p>
							</div>

							{/* Recycle Grid Card */}
							<div className="text-center">
								<BiWorld className="mb-4 inline-block text-6xl" />
								<h3 className="mb-2 text-2xl font-semibold leading-tight">Intl. Competition Standards</h3>
								<p className="text-sm leading-relaxed">Our strength shop adheres to international competition standards.</p>
							</div>

							{/* Secure Payment Card */}
							<div className="text-center">
								<BiCheckShield className="mb-4 inline-block text-6xl" />
								<h3 className="mb-2 text-2xl font-semibold leading-tight">Product Quality</h3>
								<p className="text-sm leading-relaxed">
									Top-notch quality products. We ensure that all our equipment, accessories, and gear meet the highest standards of quality
									and durability.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</>
	)
}

HomePage.propTypes = {
	products: PropTypes.array
}

export default HomePage
