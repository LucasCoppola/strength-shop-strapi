import React from 'react'
import PropTypes from 'prop-types'

const ProductItem = ({ product }) => {
	return (
		<div key={product.id} className="group relative">
			<div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
				<img src={product.image?.url} alt={product.name} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
			</div>
			<div className="mt-4 flex justify-between">
				<div>
					<h3 className="text-sm text-white">
						{/* <a href={product.href}> */}
						<span aria-hidden="true" className="absolute inset-0" />
						{product.name}
						{/* </a> */}
					</h3>
				</div>
				<p className="text-sm font-medium text-white">$ {product.price.raw}</p>
			</div>
		</div>
	)
}

ProductItem.propTypes = {
	product: PropTypes.object
}

export default ProductItem
