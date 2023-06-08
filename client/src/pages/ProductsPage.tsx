import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
import { Select, Option } from '@material-tailwind/react'

const ProductsPage = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState('')

	const handleOptionSelect = (option: string) => {
		setSelectedOption(option)
		setIsOpen(false)
		// Add your logic here for sorting based on the selected option
	}

	return (
		<div className="mx-auto max-w-7xl">
			<div className="px-4 py-8 sm:px-6 md:py-16 lg:px-8">
				<div className="mb-4 flex items-center justify-between">
					<h2 className="text-2xl font-bold text-gray-700">
						All Products <span className="block pl-1 text-sm font-thin sm:inline">7 products</span>
					</h2>

					{/* Dropdown Menu */}
					<div className="relative inline-block">
						<button className="ml-auto flex items-center rounded-full bg-gray-300 px-5 py-3 font-bold" onClick={() => setIsOpen(!isOpen)}>
							<span className="mr-2">
								<HiOutlineAdjustmentsHorizontal size={24} color="black" />
							</span>
							Sort by {!selectedOption ? 'Relevancy' : selectedOption}
						</button>
						{isOpen && (
							<ul className="absolute left-0 z-10 mt-2 w-60 rounded-lg border border-gray-300 bg-white shadow-lg">
								<li className="cursor-pointer px-4 py-2 hover:bg-gray-200" onClick={() => handleOptionSelect('Price: Low to High')}>
									Price: Low to High
								</li>
								<li className="cursor-pointer px-4 py-2 hover:bg-gray-200" onClick={() => handleOptionSelect('Price: High to Low')}>
									Price: High to Low
								</li>
								<li className="cursor-pointer px-4 py-2 hover:bg-gray-200" onClick={() => handleOptionSelect('Relevancy')}>
									Relevancy
								</li>
								<li className="cursor-pointer px-4 py-2 hover:bg-gray-200" onClick={() => handleOptionSelect('Newest')}>
									Newest
								</li>
							</ul>
						)}
					</div>
				</div>

				{/* Filters */}
				<div className="flex flex-col sm:flex-row">
					<div className="w-full space-y-3 pr-4 sm:mr-4 sm:w-1/3 sm:pr-0">
						<Select variant="standard" label="Availability" className="w-64 pb-2 font-medium text-gray-700 hover:text-gray-900">
							<Option>In Stock</Option>
							<Option>Pre-Order</Option>
						</Select>
						<Select variant="standard" label="Category" className="w-64 pb-2 font-medium text-gray-700 hover:text-gray-900">
							<Option>Barbells</Option>
							<Option>Plates</Option>
							<Option>Accesories</Option>
						</Select>
						<Select variant="standard" label="Collections" className="w-64 font-medium text-gray-700 hover:text-gray-900">
							<Option>Powerlifting</Option>
							<Option>Calisthenics</Option>
							<Option>Functional</Option>
							<Option>Rig & Rack Equipment</Option>
						</Select>
					</div>

					{/* Products List */}
					<div className="flex flex-grow flex-col">
						<ProductCard />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductsPage
