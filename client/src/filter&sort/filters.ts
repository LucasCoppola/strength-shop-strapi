import ProductType from '../types/productType'

export const filterCategory = (products: ProductType[], categoryFilters: (string | null)[]) => {
	console.log(categoryFilters)
	if (categoryFilters.every((filter) => filter === null || filter === undefined)) {
		return products
	}

	return products.filter((product) => {
		return categoryFilters.some((filter) => filter === product.attributes.category)
	})
}

export const filterCollection = (products: ProductType[], collectionFilters: (string | null)[]) => {
	if (collectionFilters.every((filter) => filter === null || filter === undefined)) {
		return products
	}

	return products.filter((product) => {
		return collectionFilters.some((filter) => filter === product.attributes.collection)
	})
}

export const filterPrice = (products: ProductType[], priceFilters: (string | null)[]) => {
	if (priceFilters.every((filter) => filter === null || filter === undefined)) {
		return products
	}

	const getPriceRange = (price: number) => {
		if (price < 50) {
			return 'Under $50'
		} else if (price < 100) {
			return '$50 - $100'
		} else if (price < 200) {
			return '$100 - $200'
		} else if (price < 300) {
			return '$200 - $300'
		} else if (price < 400) {
			return '$300 - $400'
		} else if (price < 500) {
			return '$400 - $500'
		} else {
			return 'Over $500'
		}
	}

	return products.filter((product) => {
		return priceFilters.includes(getPriceRange(product.attributes.price))
	})
}
