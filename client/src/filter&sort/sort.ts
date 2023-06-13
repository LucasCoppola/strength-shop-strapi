type Product = {
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
export function priceLowToHigh(arr: Product[]) {
	return arr.sort((a, b) => a.attributes.price - b.attributes.price)
}

export function priceHighToLow(arr: Product[]) {
	return arr.sort((a, b) => b.attributes.price - a.attributes.price)
}

export function sortNewest(arr: Product[]) {
	return arr.sort((a, b) => {
		const dateA: Date = new Date(a.attributes.publishedAt)
		const dateB: Date = new Date(b.attributes.publishedAt)
		return dateB.getTime() - dateA.getTime()
	})
}
