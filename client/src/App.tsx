import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'

import ProductType from './types/productType'
import fetchProducts from './api/fetchProducts'
import CartProvider from './contexts/CartProvider'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
	const [products, setProducts] = useState<ProductType[]>([])
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)
	const [status, setStatus] = useState({ isLoading: true, isError: false })

	useEffect(() => {
		const fetchData = async () => {
			try {
				const cachedProducts = localStorage.getItem('products')
				if (cachedProducts) {
					setProducts(JSON.parse(cachedProducts))
					setStatus({ isLoading: false, isError: false })
				} else {
					const data = await fetchProducts()
					setProducts(data)
					setStatus({ isLoading: false, isError: false })
					localStorage.setItem('products', JSON.stringify(data))
				}
			} catch (error) {
				setStatus({ isLoading: false, isError: true })
			}
		}
		fetchData()
	}, [setProducts, setStatus])

	const Props = {
		products,
		isLoading: status.isLoading,
		isError: status.isError
	}

	return (
		<>
			<CartProvider>
				<Navbar setIsDrawerOpen={setIsDrawerOpen} />
				<Routes>
					<Route path="/" element={<HomePage {...Props} setIsDrawerOpen={setIsDrawerOpen} />} />
					<Route path="/products" element={<ProductsPage {...Props} setIsDrawerOpen={setIsDrawerOpen} />} />
					<Route path="/checkout" element={<CheckoutPage isError={status.isError} isLoading={status.isLoading} />} />
					<Route path="/products/:id" element={<ProductDetailsPage {...Props} setIsDrawerOpen={setIsDrawerOpen} />} />
				</Routes>
				<CartPage isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
			</CartProvider>
			<Footer />
		</>
	)
}

export default App
