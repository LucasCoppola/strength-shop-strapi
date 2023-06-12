type ProductType = {
	id: number
	name: string
	price: number
	type: string
	image: {
		data: {
			attributes: {
				url: string
			}
		}
	}
}

export default ProductType
