import { useState, useEffect } from 'react'
import ProductType from '../types/productType'

const useLocalStorageState = (key: string, defaultValue: object | Array<ProductType>) => {
	const [state, setState] = useState(() => {
		const storedValue = localStorage.getItem(key)
		return storedValue ? JSON.parse(storedValue) : defaultValue
	})

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state))
	}, [key, state])

	return [state, setState]
}

export default useLocalStorageState
