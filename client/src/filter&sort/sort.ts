import ProductType from '../types/productType'

export function priceLowToHigh(arr: ProductType[]) {
	return arr.slice().sort((a, b) => a.attributes.price - b.attributes.price)
}

export function priceHighToLow(arr: ProductType[]) {
	return arr.slice().sort((a, b) => b.attributes.price - a.attributes.price)
}

export function sortNewest(arr: ProductType[]) {
	return arr.slice().sort((a, b) => {
		const dateA: Date = new Date(a.attributes.publishedAt)
		const dateB: Date = new Date(b.attributes.publishedAt)
		return dateB.getTime() - dateA.getTime()
	})
}
