import { useState } from 'react'
import ProductType from '../types/productType'
import { useParams } from 'react-router-dom'
import CategoryCarousel from '../components/CategoryCarousel'
import CollectionCarousel from '../components/CollectionCarousel'

const ProductDetailsPage = ({ products, isLoading, isError }: { products: ProductType[]; isLoading: boolean; isError: boolean }) => {
	const { id } = useParams()
	const product = products.find((product) => product.id === Number(id))
	const image = import.meta.env.VITE_IMAGE + product?.attributes.image.data.attributes.url

	const [categorySetIndex, setCategorySetIndex] = useState(0)
	const [collectionSetIndex, setCollectionSetIndex] = useState(0)

	const productsPerSet = 3

	const currentProductCategory = product?.attributes.category
	const filteredProductsByCategory = products.filter((product) => product.attributes.category === currentProductCategory && product.id !== Number(id))
	const totalCategorySets = Math.ceil(filteredProductsByCategory.length / productsPerSet)

	const currentProductCollection = product?.attributes.collection
	const filteredProductsByCollection = products.filter((product) => product.attributes.collection === currentProductCollection && product.id !== Number(id))
	const totalCollectionSets = Math.ceil(filteredProductsByCollection.length / productsPerSet)

	const handlePrevCategoryClick = () => {
		setCategorySetIndex((prevIndex) => (prevIndex === 0 ? Math.floor(filteredProductsByCategory.length / productsPerSet) : prevIndex - 1))
	}

	const handleNextCategoryClick = () => {
		setCategorySetIndex((prevIndex) => (prevIndex === totalCategorySets - 1 ? 0 : prevIndex + 1))
	}

	const handlePrevCollectionClick = () => {
		setCollectionSetIndex((prevIndex) => (prevIndex === 0 ? Math.floor(filteredProductsByCollection.length / productsPerSet) : prevIndex - 1))
	}

	const handleNextCollectionClick = () => {
		setCollectionSetIndex((prevIndex) => (prevIndex === totalCollectionSets - 1 ? 0 : prevIndex + 1))
	}

	return (
		<div className="container mx-auto px-4 py-8">
			{isLoading ? (
				<p className="flex justify-center text-xl font-semibold text-gray-800">Loading...</p>
			) : isError ? (
				<p className="flex justify-center text-xl font-semibold text-gray-800">Error fetching product</p>
			) : (
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
					<div className="flex items-center justify-center">
						<img src={image} alt={product?.attributes.name} className="w-2/3" />
					</div>
					<div>
						<h2 className="mb-4 text-3xl font-semibold">{product?.attributes.name}</h2>
						<p className="mb-4 text-lg text-gray-600">${product?.attributes.price}</p>
						<p className="mb-6 text-gray-700">{product?.attributes.description}</p>
						<h3 className="mb-2 text-lg font-semibold">Features:</h3>
						<ul className="list-inside list-disc">
							<li>Built for competition</li>
							<li>Precision and durability</li>
							<li>Solid rubber construction</li>
							<li>Impact absorption and noise reduction</li>
							<li>Bold color coding for easy weight identification</li>
							<li>Stainless steel inserts for secure fit</li>
						</ul>
						<button className="mt-8 rounded-full bg-blue-500 px-6 py-3 font-semibold text-white">Add to Cart</button>
					</div>
				</div>
			)}

			{/* By Category */}
			<div className="mt-12">
				<h3 className="mb-4 text-2xl font-semibold">
					Similar {product?.attributes.category.charAt(0).toUpperCase().concat(product?.attributes.category.slice(1))}
				</h3>
				<CategoryCarousel
					products={filteredProductsByCategory}
					productsPerSet={productsPerSet}
					currentSetIndex={categorySetIndex}
					totalSets={totalCategorySets}
					handlePrevClick={handlePrevCategoryClick}
					handleNextClick={handleNextCategoryClick}
				/>
			</div>

			{/* By Collection */}
			<div className="mt-12">
				<h3 className="mb-4 text-2xl font-semibold">
					More of {product?.attributes.collection.charAt(0).toUpperCase().concat(product?.attributes.collection.slice(1))}
				</h3>
				<CollectionCarousel
					products={filteredProductsByCollection}
					productsPerSet={productsPerSet}
					currentSetIndex={collectionSetIndex}
					totalSets={totalCollectionSets}
					handlePrevClick={handlePrevCollectionClick}
					handleNextClick={handleNextCollectionClick}
				/>
			</div>
		</div>
	)
}

export default ProductDetailsPage
