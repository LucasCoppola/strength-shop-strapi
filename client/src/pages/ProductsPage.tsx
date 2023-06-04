import { useState } from 'react'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
import { RiArrowRightSLine, RiHome2Fill, RiHome2Line } from 'react-icons/ri'
const products = [
	{
		id: 1,
		name: 'Earthen Bottle',
		href: '#',
		price: '$48',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
		imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.'
	},
	{
		id: 2,
		name: 'Nomad Tumbler',
		href: '#',
		price: '$35',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
		imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.'
	},
	{
		id: 3,
		name: 'Focus Paper Refill',
		href: '#',
		price: '$89',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
		imageAlt: 'Person using a pen to cross a task off a productivity paper card.'
	},
	{
		id: 4,
		name: 'Machined Mechanical Pencil',
		href: '#',
		price: '$35',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
		imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
	}
	// More products...
]

const ProductsPage = () => {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
			<nav className="mb-8 flex justify-between text-lg" aria-label="Breadcrumb">
				<ol className="inline-flex items-center space-x-1 md:space-x-3">
					<li className="inline-flex items-center">
						<a
							href="#"
							className="inline-flex items-center text-sm font-medium text-gray-700"
							onMouseOver={() => setIsHovered(true)}
							onMouseOut={() => setIsHovered(false)}
						>
							{isHovered ? <RiHome2Fill size={20} /> : <RiHome2Line size={20} />}
						</a>
					</li>
					<li>
						<div className="flex items-center">
							<RiArrowRightSLine />
							<a href="#" className="ml-1 text-sm font-medium text-gray-700 md:ml-2">
								Products
							</a>
						</div>
					</li>
				</ol>
			</nav>

			<div className="mb-4 flex items-center justify-between">
				<h2 className="text-2xl font-bold text-gray-700">All Products</h2>

				<button className="ml-auto flex items-center rounded-full bg-gray-300 px-5 py-3 font-bold">
					<span className="mr-2">
						<HiOutlineAdjustmentsHorizontal size={24} color="black" />
					</span>
					Filter &amp; Sort
				</button>
			</div>

			<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
				{products.map((product) => (
					<a key={product.id} href={product.href} className="group">
						<div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 relative w-full overflow-hidden rounded-lg bg-gray-200">
							<img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center group-hover:opacity-75" />
							<button
								title="Add to cart"
								className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform items-center rounded-full bg-white px-6 py-2 opacity-0 transition-colors duration-300 group-hover:opacity-100"
							>
								<MdOutlineAddShoppingCart size={24} color="gray" />
							</button>
						</div>
						<h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
						<p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
					</a>
				))}
			</div>
		</div>
	)
}

export default ProductsPage
