import { useState } from 'react'
import FeaturedCard from '../components/FeaturedCard'
import CategoryImages from '../api/CategoryImages'
import ProductType from '../types/productType'
import { useNavigate } from 'react-router-dom'
import { Spinner, Dialog } from '@material-tailwind/react'
import { RiTruckLine, RiCustomerServiceFill } from 'react-icons/ri'
import { BiWorld, BiCheckShield, BiCalendar } from 'react-icons/bi'
import { HiOutlineHandRaised } from 'react-icons/hi2'

type Props = {
	products: ProductType[]
	isLoading: boolean
	isError: boolean
	setIsDrawerOpen: (open: boolean) => void
}

const HomePage = ({ products, isLoading, isError, setIsDrawerOpen }: Props) => {
	const [open, setOpen] = useState(false)
	const [email, setEmail] = useState('')
	const [validEmail, setValidEmail] = useState(true)
	const navigate = useNavigate()

	const handleCollectionFilter = (collection: string) => {
		navigate(`/products?collection=${encodeURIComponent(collection)}`)
	}

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
		setValidEmail(true)
	}

	const handleSubmit = () => {
		const emailRegex = /^\S+@\S+\.\S+$/
		const isValidEmail = emailRegex.test(email)
		setValidEmail(isValidEmail)

		if (isValidEmail) {
			setOpen(true)
			setEmail('')
		}
	}
	return (
		<>
			<main className="py-16">
				<div className="container mx-auto flex justify-center px-4 align-middle">
					<div className="relative text-center">
						<h1 className="my-6 text-4xl font-bold md:text-5xl lg:text-6xl">Welcome to Strength Shop</h1>
						<p className="mb-8 text-lg lg:text-xl">Discover high-quality strength training equipment and accessories for your fitness journey.</p>
						<a href="/products" className="shop-btn mx-auto mt-28 bg-gray-50">
							Shop Now
						</a>
					</div>
				</div>
			</main>

			{/* Featured */}
			<section className="bg-gray-50 text-center">
				<div className=" px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					<h2 className="mb-16 text-4xl font-bold text-gray-900">Trending Now</h2>
					{isLoading ? (
						<Spinner className="m-auto flex h-10 w-10 " color="gray" />
					) : isError ? (
						<p className="flex justify-center text-xl font-semibold text-gray-800">Error fetching products</p>
					) : (
						<div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-10 md:gap-x-12 xl:gap-x-20 ">
							{products
								.filter((product) => product.attributes.type === 'featured')
								.map((product) => (
									<FeaturedCard key={product.id} product={product} setIsDrawerOpen={setIsDrawerOpen} />
								))}
						</div>
					)}
				</div>
			</section>

			{/* Collections */}
			<section className="bg-gray-50 text-center">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
						<h2 className="mb-16 text-4xl font-bold text-gray-900">Collections</h2>

						<div className="mt-6 space-y-12 lg:flex lg:gap-x-6 lg:space-y-0">
							<div className="lg:w-1/3">
								<div className="group relative h-full">
									<div className="relative overflow-hidden rounded-[1rem]" style={{ height: '100%' }}>
										<a className="cursor-pointer" onClick={() => handleCollectionFilter('Racks')}>
											<img
												src={CategoryImages[0].imageSrc}
												alt={CategoryImages[0].imageAlt}
												className="h-full w-full object-cover object-center brightness-50 filter"
												style={{ height: '100%' }}
											/>
											<p className="absolute bottom-0 left-0 px-4 py-2 text-xl font-semibold text-white">{CategoryImages[0].name}</p>
										</a>
									</div>
								</div>
							</div>
							<div className="space-y-6 lg:w-2/3">
								<div className="relative h-80 overflow-hidden rounded-[1rem] bg-white group-hover:opacity-75">
									<a className="cursor-pointer" onClick={() => handleCollectionFilter('Powerlifting')}>
										<img
											src={CategoryImages[1].imageSrc}
											alt={CategoryImages[1].imageAlt}
											className="h-full w-full object-cover object-center brightness-50 filter"
										/>
										<p className="absolute bottom-0 left-0 px-4 py-2 text-xl font-semibold text-white">{CategoryImages[1].name}</p>
									</a>
								</div>
								<div className="relative h-80 overflow-hidden rounded-[1rem] group-hover:opacity-75">
									<a className="cursor-pointer" onClick={() => handleCollectionFilter('Calisthenics')}>
										<img
											src={CategoryImages[2].imageSrc}
											alt={CategoryImages[2].imageAlt}
											className="h-full w-full object-cover object-center brightness-50 filter"
										/>
										<p className="absolute bottom-0 left-0 px-4 py-2 text-xl font-semibold text-white">{CategoryImages[2].name}</p>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Us? */}
			<section className="bg-gray-50 pb-24 pt-12 text-center text-gray-800">
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

			<section>
				<div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
							<div className="max-w-xl lg:max-w-lg">
								<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Subscribe to our newsletter.</h2>
								<p className="mt-4 text-lg leading-8 text-gray-800">
									Stay up to date with the latest news, offers, and updates from Strength Shop. Subscribe to our newsletter to receive weekly
									articles and exclusive content directly to your inbox.
								</p>
								<div className="mt-6 flex max-w-md gap-x-4">
									<label htmlFor="email-address" className="sr-only">
										Email address
									</label>
									<input
										id="email-address"
										name="email"
										type="email"
										required
										className={`min-w-0 flex-auto rounded-md border px-3.5 py-2 shadow-sm sm:text-sm sm:leading-6 ${
											!validEmail ? 'border-[1.5px] border-red-500' : ''
										}`}
										placeholder="Enter your email"
										value={email}
										onChange={handleEmailChange}
									/>
									<button
										type="submit"
										onClick={handleSubmit}
										className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
									>
										Subscribe
									</button>
								</div>
							</div>
							<dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
								<div className="flex flex-col items-start">
									<div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
										<BiCalendar className="h-6 w-6" aria-hidden="true" />
									</div>
									<dt className="mt-4 font-semibold">Weekly articles</dt>
									<dd className="mt-2 leading-7 text-gray-700">
										Get valuable insights and tips from our experts with our weekly articles covering various aspects of strength training
										and fitness.
									</dd>
								</div>
								<div className="flex flex-col items-start">
									<div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
										<HiOutlineHandRaised className="h-6 w-6" aria-hidden="true" />
									</div>
									<dt className="mt-4 font-semibold">No spam</dt>
									<dd className="mt-2 leading-7 text-gray-700">
										We respect your privacy. You can trust us to never share your information or send you spam emails. Your email address is
										safe with us.
									</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>
				<Dialog handler={() => setOpen(false)} open={open}>
					<div className="font-class rounded-lg bg-white p-6 shadow-md">
						<h3 className="mb-2 text-lg font-semibold">Thank you for subscribing to our newsletter!</h3>
						<p className="text-gray-800">You will now receive the latest news, articles, and exclusive content directly in your inbox.</p>
					</div>
				</Dialog>
			</section>
		</>
	)
}

export default HomePage
