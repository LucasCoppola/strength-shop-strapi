type ProductType = {
	id: number
	attributes: {
		id: number
		name: string
		price: number
		category: string
		type: string
		publishedAt: string
		image: {
			data: {
				attributes: {
					url: string
				}
			}
		}
	}
}

export default ProductType
