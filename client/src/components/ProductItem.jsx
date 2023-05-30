import React from 'react'
import PropTypes from 'prop-types'

const ProductItem = ({ product }) => {
	const image = import.meta.env.VITE_IMAGE + product.image.data.attributes.url

	return (
		<div key={product.id} className="group relative">
			<div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 ">
				<img src={image} alt={product.name} className="object-cover object-center " />
			</div>
			<div className="mt-4 flex justify-between">
				<div>
					<h3 className="text-base text-white">
						{/* <a href={product.href}> */}
						<span aria-hidden="true" className="absolute inset-0" />
						{product.name}
						{/* </a> */}
					</h3>
				</div>
				<p className="text-base font-medium text-white">$ {product.price}</p>
			</div>
		</div>
	)
}

ProductItem.propTypes = {
	product: PropTypes.object
}

export default ProductItem
