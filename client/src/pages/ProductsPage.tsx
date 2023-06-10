import ProductCard from '../components/ProductCard'
import Accordion from '../components/Accordion'
import { Select, Option } from '@material-tailwind/react'

const ProductsPage = () => {
	return (
		<div className="mx-auto max-w-7xl">
			<div className="px-4 py-8 sm:px-6 md:py-16 lg:px-8">
				<div className="mb-4 flex items-center justify-between">
					<h2 className="text-lg font-bold text-gray-700 md:text-2xl">
						All Products <span className="block pl-1 text-sm font-thin sm:inline">7 products</span>
					</h2>

					{/* Dropdown Menu */}
					<div className="md:w-52">
						<Select label="Sort by" className="font-class">
							<Option className="font-class">Relevance</Option>
							<Option className="font-class">Price: Low to High</Option>
							<Option className="font-class">Price: High to Low</Option>
							<Option className="font-class">Newest</Option>
						</Select>
					</div>
				</div>

				{/* Filters */}
				<div className="flex flex-col sm:flex-row">
					<div className="w-full space-y-3 pr-4 sm:mr-4 sm:w-1/3 sm:pr-0">
						<Accordion header="Category" options={['Barbells', 'Plates', 'Rings', 'Accessories']} accordionId={1} />
						<Accordion header="Collections" options={['Powerlifting', 'Calisthenics', 'Functional', 'Rigs & Racks']} accordionId={2} />
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
