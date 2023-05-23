import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const HomePage: React.FC = () => {
	return (
		<div className="">
			<header className="bg-white shadow">
				<Navbar />
			</header>
			<main className="">
				<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
					<div className="mr-auto place-self-center lg:col-span-7">
						<h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
							Payments tool for software companies
						</h1>
						<p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
							From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
						</p>
						<a
							href="#"
							className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
						>
							Get started
							<svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</a>
						<a
							href="#"
							className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
						>
							Speak to Sales
						</a>
					</div>
				</div>
			</main>

			<section className="text-gray-400  py-8 text-center">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold mb-4">Trending Now</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="bg-white rounded-lg shadow-md p-4">
							<img className="w-full h-auto mb-4 rounded-lg" src="https://example.com/product1.jpg" alt="Product 1" />
							<h3 className="text-xl font-bold mb-2">Product 1</h3>
							<p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Buy Now</button>
						</div>
						<div className="bg-white rounded-lg shadow-md p-4">
							<img className="w-full h-auto mb-4 rounded-lg" src="https://example.com/product2.jpg" alt="Product 2" />
							<h3 className="text-xl font-bold mb-2">Product 2</h3>
							<p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Buy Now</button>
						</div>
						<div className="bg-white rounded-lg shadow-md p-4">
							<img className="w-full h-auto mb-4 rounded-lg" src="https://example.com/product3.jpg" alt="Product 3" />
							<h3 className="text-xl font-bold mb-2">Product 3</h3>
							<p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Buy Now</button>
						</div>
					</div>
				</div>
			</section>

			<section className="text-gray-400  body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="text-center mb-20">
						<h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">Raw Denim Heirloom Man Braid</h1>
						<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">
							Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
							pug.
						</p>
						<div className="flex mt-6 justify-center">
							<div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
						</div>
					</div>
					<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-10 h-10"
									viewBox="0 0 24 24"
								>
									<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
								</svg>
							</div>
							<div className="flex-grow">
								<h2 className="text-white text-lg title-font font-medium mb-3">Shooting Stars</h2>
								<p className="leading-relaxed text-base">
									Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing
									banh mi pug VHS try-hard.
								</p>
								<a className="mt-3 text-indigo-400 inline-flex items-center">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-10 h-10"
									viewBox="0 0 24 24"
								>
									<circle cx="6" cy="6" r="3"></circle>
									<circle cx="6" cy="18" r="3"></circle>
									<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
								</svg>
							</div>
							<div className="flex-grow">
								<h2 className="text-white text-lg title-font font-medium mb-3">The Catalyzer</h2>
								<p className="leading-relaxed text-base">
									Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing
									banh mi pug VHS try-hard.
								</p>
								<a className="mt-3 text-indigo-400 inline-flex items-center">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-10 h-10"
									viewBox="0 0 24 24"
								>
									<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
									<circle cx="12" cy="7" r="4"></circle>
								</svg>
							</div>
							<div className="flex-grow">
								<h2 className="text-white text-lg title-font font-medium mb-3">Neptune</h2>
								<p className="leading-relaxed text-base">
									Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing
									banh mi pug VHS try-hard.
								</p>
								<a className="mt-3 text-indigo-400 inline-flex items-center">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
					<button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
						Button
					</button>
				</div>
			</section>

			<Footer />
		</div>
	)
}

export default HomePage
