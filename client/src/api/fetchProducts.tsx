const fetchProducts = async () => {
	const headers = {
		Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
	}

	return fetch(import.meta.env.VITE_API_URL + '/items?populate=*', { headers })
		.then((res) => res.json())
		.then((data) => data.data)
		.catch(() => {
			throw new Error('Error fetching products.')
		})
}

export default fetchProducts
