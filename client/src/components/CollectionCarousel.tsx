import { useState, useEffect } from 'react'
import { IconButton } from '@material-tailwind/react'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import ProductCard from '../components/ProductCard'
import ProductType from '../types/productType'

const CategoryCarousel = ({ products, productsPerSet }: { products: ProductType[]; productsPerSet: number }) => {
	const [isCardClicked, setIsCardClicked] = useState(false)
	const [startIndex, setStartIndex] = useState(0)

	const handlePrevClick = () => {
		setStartIndex((prevIndex) => Math.max(0, prevIndex - productsPerSet))
	}

	const handleNextClick = () => {
		setStartIndex((prevIndex) => Math.min(prevIndex + productsPerSet, products.length - productsPerSet))
	}

	const showPrevButton = startIndex !== 0
	const showNextButton = startIndex + productsPerSet < products.length

	const visibleProducts = products.slice(startIndex, startIndex + productsPerSet)

	useEffect(() => {
		if (isCardClicked) {
			window.scrollTo(0, 0)
			setIsCardClicked(false)
		}
	}, [isCardClicked])

	return (
		<div className="flex items-center justify-center space-x-10">
			<IconButton
				color="gray"
				className={`rounded-full bg-gray-600 p-2 hover:bg-gray-500 ${!showPrevButton ? 'cursor-not-allowed opacity-80' : ''}`}
				onClick={handlePrevClick}
				disabled={!showPrevButton}
			>
				<BsChevronLeft className="text-xl text-white" />
			</IconButton>

			<div className="flex translate-x-0 transform overflow-x-auto">
				<div className="flex w-full justify-center md:space-x-6 lg:space-x-12 xl:space-x-20">
					{visibleProducts.map((product) => (
						<div
							onClick={() => {
								window.scrollTo(0, 0)
							}}
							key={product.id}
							className="h-[19rem] w-52 overflow-hidden rounded-lg hover:shadow-lg md:h-[19.5rem] lg:h-[16.5rem] lg:w-40 xl:h-[18rem] xl:w-52"
						>
							<ProductCard product={product} setIsCardClicked={setIsCardClicked} />
						</div>
					))}
				</div>
			</div>

			<IconButton
				color="gray"
				className={`rounded-full bg-gray-600 p-2 hover:bg-gray-500 ${!showNextButton ? 'cursor-not-allowed opacity-80' : ''}`}
				onClick={handleNextClick}
				disabled={!showNextButton}
			>
				<BsChevronRight className="text-xl text-white" />
			</IconButton>
		</div>
	)
}

export default CategoryCarousel
