type ProductType = {
	length: number
	id: number
	attributes: {
		quantity: number
		id: number
		name: string
		price: number
		description: string
		category: string
		collection: string
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
