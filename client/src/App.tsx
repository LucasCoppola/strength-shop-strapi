import { useState, useEffect } from 'react'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import CartPage from './pages/CartPage'

import ProductType from './types/productType'
import fetchProducts from './api/fetchProducts'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { Routes, Route } from 'react-router-dom'

const App = () => {
	const [products, setProducts] = useState<ProductType[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchProducts()
				setProducts(data)
				setIsLoading(false)
			} catch (error) {
				setIsLoading(false)
				setIsError(true)
			}
		}

		fetchData()
	}, [])

	const Props = {
		products,
		isLoading,
		isError
	}

	return (
		<>
			<Navbar setIsDrawerOpen={setIsDrawerOpen} />
			<CartPage isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
			<Routes>
				<Route path="/" element={<HomePage {...Props} />} />
				<Route path="/products" element={<ProductsPage {...Props} />} />
				<Route path="/products/:id" element={<ProductDetailsPage {...Props} />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
