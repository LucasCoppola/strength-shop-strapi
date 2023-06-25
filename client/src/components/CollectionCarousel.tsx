import { useState } from 'react'
import { IconButton, Spinner } from '@material-tailwind/react'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import ProductCard from '../components/ProductCard'
import ProductType from '../types/productType'

type Props = {
	products: ProductType[]
	productsPerSet: number
	isLoading: boolean
	isError: boolean
}

const CategoryCarousel = ({ products, productsPerSet, isLoading, isError }: Props) => {
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

			{isLoading ? (
				<Spinner className="m-auto flex h-10 w-10 " color="gray" />
			) : isError ? (
				<p className="flex justify-center text-xl font-semibold text-gray-800">Error fetching product</p>
			) : (
				<div className="flex translate-x-0 transform overflow-x-auto">
					<div className="flex w-full justify-center md:space-x-6 lg:space-x-12 xl:space-x-20">
						{visibleProducts.map((product) => (
							<div
								key={product.id}
								className="h-[19rem] w-52 overflow-hidden rounded-lg hover:shadow-lg md:h-[19.5rem] lg:h-[16.5rem] lg:w-40 xl:h-[18rem] xl:w-52"
							>
								<ProductCard product={product} />
							</div>
						))}
					</div>
				</div>
			)}

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
