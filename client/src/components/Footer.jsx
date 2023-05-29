import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'

function Footer() {
	return (
		<footer className="bg-neutral-900">
			<div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
				<div className="md:flex md:justify-between">
					<div className="mb-6 md:mb-0">
						<a href="https://flowbite.com/" className="flex items-center">
							<img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="FlowBite Logo" />
							<span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Strenght Shop</span>
						</a>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
						<div>
							<h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Resources</h2>
							<ul className="font-medium text-gray-600 dark:text-gray-400">
								<li className="mb-4">
									<a href="https://flowbite.com/" className="hover:underline">
										Flowbite
									</a>
								</li>
								<li>
									<a href="https://tailwindcss.com/" className="hover:underline">
										Tailwind CSS
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2>
							<ul className="font-medium text-gray-600 dark:text-gray-400">
								<li className="mb-4">
									<a href="https://github.com/themesberg/flowbite" className="hover:underline ">
										Github
									</a>
								</li>
								<li>
									<a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
										Discord
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
							<ul className="font-medium text-gray-600 dark:text-gray-400">
								<li className="mb-4">
									<a href="#" className="hover:underline">
										Privacy Policy
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Terms &amp; Conditions
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
				<div className="sm:flex sm:items-center sm:justify-between">
					<span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
						© 2023{' '}
						<a href="https://flowbite.com/" className="hover:underline">
							Flowbite™
						</a>
						. All Rights Reserved.
					</span>
					<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
						<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
							<FaFacebook />
						</a>
						<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
							<FaInstagram />
						</a>
						<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
							<FaGithub />
						</a>
						<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
							<FaTwitter />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
