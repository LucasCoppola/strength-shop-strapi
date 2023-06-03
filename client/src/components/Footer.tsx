import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {
	return (
		<footer className="bg-gray-200 text-gray-900">
			<div className="container mx-auto px-6 py-8">
				<div className="flex flex-col items-center text-center">
					<a href="#">
						<img className="h-7 w-auto" src="https://merakiui.com/images/full-logo.svg" alt="" />
					</a>

					<div className="-mx-4 mt-6 flex flex-wrap justify-center">
						<a href="#" className="mx-4 text-sm transition-colors duration-300 hover:text-blue-500" aria-label="Reddit">
							{' '}
							Home{' '}
						</a>

						<a href="#" className="mx-4 text-sm transition-colors duration-300 hover:text-blue-500" aria-label="Reddit">
							{' '}
							About{' '}
						</a>

						<a href="#" className="mx-4 text-sm transition-colors duration-300 hover:text-blue-500" aria-label="Reddit">
							{' '}
							Teams{' '}
						</a>

						<a href="#" className="mx-4 text-sm transition-colors duration-300 hover:text-blue-500" aria-label="Reddit">
							{' '}
							Privacy{' '}
						</a>

						<a href="#" className="mx-4 text-sm transition-colors duration-300 hover:text-blue-500" aria-label="Reddit">
							{' '}
							Cookies{' '}
						</a>
					</div>
				</div>

				<hr className="my-6 border-gray-200 dark:border-gray-700 md:my-10" />

				<div className="flex flex-col items-center sm:flex-row sm:justify-between">
					<p className="text-sm">© Copyright 2021. All Rights Reserved.</p>

					<div className="-mx-2 flex">
						<a href="#" className="mx-2 transition-colors duration-300 hover:text-blue-500" aria-label="Reddit">
							<FaFacebook />
						</a>

						<a href="#" className="mx-2 transition-colors duration-300 hover:text-blue-500" aria-label="Facebook">
							<FaTwitter />
						</a>

						<a href="#" className="mx-2 transition-colors duration-300 hover:text-blue-500" aria-label="Github">
							<FaInstagram />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
