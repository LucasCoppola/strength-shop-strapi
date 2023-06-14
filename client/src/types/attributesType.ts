type AttributesType = {
	id: number
	name: string
	price: number
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

export default AttributesType
