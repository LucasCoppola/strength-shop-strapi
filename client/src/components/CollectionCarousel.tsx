import { IconButton } from '@material-tailwind/react'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import ProductCard from '../components/ProductCard'
import ProductType from '../types/productType'

interface CollectionCarouselProps {
	products: ProductType[]
	productsPerSet: number
	currentSetIndex: number
	totalSets: number
	handlePrevClick: () => void
	handleNextClick: () => void
}

const CollectionCarousel = ({ products, productsPerSet, currentSetIndex, totalSets, handlePrevClick, handleNextClick }: CollectionCarouselProps) => {
	return (
		<div className="flex items-center">
			<IconButton
				color="gray"
				className={`rounded-full bg-gray-600 p-2 hover:bg-gray-500 ${currentSetIndex === 0 ? 'cursor-not-allowed opacity-80' : ''}`}
				onClick={handlePrevClick}
				disabled={currentSetIndex === 0}
			>
				<BsChevronLeft className="text-xl text-white" />
			</IconButton>

			<div className="flex translate-x-0 transform overflow-x-auto px-6">
				<div
					className="flex justify-center lg:space-x-16 xl:space-x-20"
					style={{
						width: `${productsPerSet * 320}px`,
						transform: `translateX(-${currentSetIndex * productsPerSet}px)`,
						transition: 'transform 0.5s ease'
					}}
				>
					{products.slice(currentSetIndex * productsPerSet, currentSetIndex * productsPerSet + productsPerSet).map((product) => (
						<div key={product.id} className="lg:w-40 xl:w-52">
							<ProductCard product={product} />
						</div>
					))}
				</div>
			</div>

			<IconButton
				color="gray"
				className={`rounded-full bg-gray-600 p-2 hover:bg-gray-500 ${currentSetIndex === totalSets - 1 ? 'cursor-not-allowed opacity-80' : ''}`}
				onClick={handleNextClick}
				disabled={currentSetIndex === totalSets - 1}
			>
				<BsChevronRight className="text-xl text-white" />
			</IconButton>
		</div>
	)
}

export default CollectionCarousel
