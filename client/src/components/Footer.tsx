import { Typography } from '@material-tailwind/react'
import { FaDribbble, FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

const SITEMAP = [
	{
		title: 'Company',
		links: ['About Us', 'Careers', 'Our Team', 'Projects']
	},
	{
		title: 'Help Center',
		links: ['Discord', 'Twitter', 'GitHub', 'Contact Us']
	},
	{
		title: 'Resources',
		links: ['Blog', 'Newsletter', 'Free Products', 'Affiliate Program']
	}
]

const currentYear = new Date().getFullYear()

function Footer() {
	return (
		<footer id="footer" className="relative w-full bg-gray-100">
			<div className="mx-auto w-full max-w-7xl px-8">
				<div className="grid grid-cols-1 justify-center gap-6 py-12 md:grid-cols-3">
					{SITEMAP.map(({ title, links }, key) => (
						<div key={key} className="w-full">
							<Typography variant="small" color="blue-gray" className="mb-4 font-bold uppercase opacity-50">
								{title}
							</Typography>
							<ul className="space-y-1">
								{links.map((link, key) => (
									<Typography key={key} as="li" color="blue-gray" className="font-normal">
										<a className="inline-block py-1 pr-2 transition-transform hover:scale-105">{link}</a>
									</Typography>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
					<Typography variant="small" className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
						&copy; {currentYear} <a href="/">Strength Shop</a>. All Rights Reserved.
					</Typography>
					<div className="flex gap-4 text-blue-gray-900 sm:justify-center">
						<Typography
							as="a"
							href="https://www.facebook.com/"
							target="_blank"
							rel="noreferrer"
							className="opacity-80 transition-opacity hover:opacity-100"
						>
							<FaFacebook className="h-5 w-5" />
						</Typography>
						<Typography
							as="a"
							href="https://www.instagram.com/"
							target="_blank"
							rel="noreferrer"
							className="opacity-80 transition-opacity hover:opacity-100"
						>
							<FaInstagram className="h-5 w-5" />
						</Typography>
						<Typography
							as="a"
							href="https://www.twitter.com/"
							target="_blank"
							rel="noreferrer"
							className="opacity-80 transition-opacity hover:opacity-100"
						>
							<FaTwitter className="h-5 w-5" />
						</Typography>
						<Typography
							as="a"
							href="https://www.github.com/"
							target="_blank"
							rel="noreferrer"
							className="opacity-80 transition-opacity hover:opacity-100"
						>
							<FaGithub className="h-5 w-5" />
						</Typography>
						<Typography
							as="a"
							href="https://dribbble.com/"
							target="_blank"
							rel="noreferrer"
							className="opacity-80 transition-opacity hover:opacity-100"
						>
							<FaDribbble className="h-5 w-5" />
						</Typography>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
