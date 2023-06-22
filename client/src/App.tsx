import { useState, useEffect, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import CartPage from './pages/CartPage'

import ProductType from './types/productType'
import fetchProducts from './api/fetchProducts'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const CartContext = createContext<ProductType[] | any>([])

const App = () => {
	const [products, setProducts] = useState<ProductType[]>([])
	const [cartProducts, setCartProducts] = useState<ProductType[]>([])

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
			<CartContext.Provider value={[cartProducts, setCartProducts]}>
				<Navbar setIsDrawerOpen={setIsDrawerOpen} />
				<CartPage isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
				<Routes>
					<Route path="/" element={<HomePage {...Props} />} />
					<Route path="/products" element={<ProductsPage {...Props} />} />
					<Route path="/products/:id" element={<ProductDetailsPage {...Props} />} />
				</Routes>
			</CartContext.Provider>
			<Footer />
		</>
	)
}

export default App
