type Product = {
	id: number
	name: string
	price: number
	image: {
		data: {
			attributes: {
				url: string
			}
		}
	}
}

export default Product
