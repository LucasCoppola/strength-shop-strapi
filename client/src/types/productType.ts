type ProductType = {
	id: number
	name: string
	price: number
	category: string
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
