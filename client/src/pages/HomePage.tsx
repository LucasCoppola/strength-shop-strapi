import { useEffect, useState } from 'react'

import ProductCardBig from '../components/ProductCardBig'

import { RiTruckLine, RiCustomerServiceFill } from 'react-icons/ri'
import { BiWorld, BiCheckShield } from 'react-icons/bi'

type Product = {
	id: number
	attributes: {
		id: number
		name: string
		price: number
		image: {
			data: {
				attributes: {
					url: string
				}
			}
		}
	}
}

const HomePage: React.FC = (): JSX.Element => {
	const [products, setProducts] = useState<Product[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)

	const fetchProducts = () => {
		const headers = {
			Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
		}

		fetch(import.meta.env.VITE_API_URL + '/items?populate=*', { headers })
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.data)
				setIsLoading(false)
			})
			.catch(() => {
				setIsLoading(false)
				setIsError(true)
			})
	}

	useEffect(() => {
		fetchProducts()
	}, [])

	const imageCategory = [
		{
			name: 'Rigs & Racks',
			imageSrc: '../../assets/rack.webp',
			imageAlt: 'Single gym rack',
			href: '#'
		},
		{
			name: 'Powerlifting',
			imageSrc: '../../assets/powerlifting.jpg',
			imageAlt: 'Bar with plates',
			href: '#'
		},
		{
			name: 'Calisthenics',
			imageSrc: '../../assets/calisthenics.jpg',
			imageAlt: 'Pair of parallettes',
			href: '#'
		}
	]

	return (
		<>
			<main className="py-16">
				<div className="container mx-auto flex justify-center px-4 align-middle">
					<div className="relative text-center">
						<h1 className="my-6 text-4xl font-bold md:text-5xl lg:text-6xl">Welcome to Strength Shop</h1>
						<p className="mb-8 text-lg lg:text-xl">Discover high-quality strength training equipment and accessories for your fitness journey.</p>
						<a href="/products" className="shop-btn mx-auto mt-28 bg-gray-100">
							Shop Now
						</a>
					</div>
				</div>
			</main>

			{/* Featured */}
			<section className="featured bg-gray-100 text-center">
				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					<h2 className="mb-16 text-4xl font-bold text-gray-900">Trending Now</h2>
					{isLoading ? (
						<p>Loading...</p>
					) : isError ? (
						<p>Error fetching products.</p>
					) : (
						<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
							{products.map((product) => (
								<ProductCardBig key={product.id} product={product.attributes} />
							))}
						</div>
					)}
				</div>
			</section>

			{/* Collections */}
			<section className="bg-gray-100 text-center">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
						<h2 className="mb-16 text-4xl font-bold text-gray-900">Collections</h2>

						<div className="mt-6 space-y-12 lg:flex lg:gap-x-6 lg:space-y-0">
							<div className="lg:w-1/3">
								<div className="group relative h-full">
									<div className="relative overflow-hidden rounded-[1rem]" style={{ height: '100%' }}>
										<img
											src={imageCategory[0].imageSrc}
											alt={imageCategory[0].imageAlt}
											className="h-full w-full object-cover object-center brightness-50 filter"
											style={{ height: '100%' }}
										/>
										<p className="absolute bottom-0 left-0 px-4 py-2 text-xl font-semibold text-white">{imageCategory[0].name}</p>
									</div>
								</div>
							</div>
							<div className="space-y-6 lg:w-2/3">
								<div className="relative h-80 overflow-hidden rounded-[1rem] bg-white group-hover:opacity-75">
									<img
										src={imageCategory[1].imageSrc}
										alt={imageCategory[1].imageAlt}
										className="h-full w-full object-cover object-center brightness-50 filter"
									/>
									<p className="absolute bottom-0 left-0 px-4 py-2 text-xl font-semibold text-white">{imageCategory[1].name}</p>
								</div>
								<div className="relative h-80 overflow-hidden rounded-[1rem] group-hover:opacity-75">
									<img
										src={imageCategory[2].imageSrc}
										alt={imageCategory[2].imageAlt}
										className="h-full w-full object-cover object-center brightness-50 filter"
									/>
									<p className="absolute bottom-0 left-0 px-4 py-2 text-xl font-semibold text-white">{imageCategory[2].name}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Us? */}
			<section className="bg-gray-100 pb-24 pt-12 text-center text-gray-800">
				<div className="container mx-auto px-4">
					<h2 className="mb-16 text-4xl font-bold text-gray-900">Why Choose Us?</h2>
					<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
						<div className="text-center">
							<RiTruckLine className="mb-4 inline-block text-6xl" />
							<h3 className="mb-2 text-2xl font-semibold leading-tight">Delivery</h3>
							<p className="text-sm leading-relaxed">
								We understand the importance of timely delivery. Our strength shop ensures fast and reliable shipping services.
							</p>
						</div>

						<div className="text-center">
							<RiCustomerServiceFill className="mb-4 inline-block text-6xl" />
							<h3 className="mb-2 text-2xl font-semibold leading-tight">Customer Care</h3>
							<p className="text-sm leading-relaxed">
								Our knowledgeable and friendly customer support team is available to assist you with any queries or concerns.
							</p>
						</div>

						<div className="text-center">
							<BiWorld className="mb-4 inline-block text-6xl" />
							<h3 className="mb-2 text-2xl font-semibold leading-tight">Intl. Competition Standards</h3>
							<p className="text-sm leading-relaxed">Our strength shop adheres to international competition standards.</p>
						</div>

						<div className="text-center">
							<BiCheckShield className="mb-4 inline-block text-6xl" />
							<h3 className="mb-2 text-2xl font-semibold leading-tight">Product Quality</h3>
							<p className="text-sm leading-relaxed">
								Top-notch quality products. We ensure that all our equipment, accessories, and gear meet the highest standards of quality and
								durability.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default HomePage
