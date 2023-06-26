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
	const [cartProducts, setCartProducts] = useState<ProductType>(() => {
		const cachedCartProducts = localStorage.getItem('cartProducts')
		return cachedCartProducts ? JSON.parse(cachedCartProducts) : []
	})

	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const cachedProducts = localStorage.getItem('products')
				if (cachedProducts) {
					setProducts(JSON.parse(cachedProducts))
					setIsLoading(false)
				} else {
					const data = await fetchProducts()
					setProducts(data)
					setIsLoading(false)
					localStorage.setItem('products', JSON.stringify(data))
				}
			} catch (error) {
				setIsLoading(false)
				setIsError(true)
			}
		}
		fetchData()
	}, [])

	useEffect(() => {
		localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
	}, [cartProducts])

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
					<Route path="/" element={<HomePage {...Props} setIsDrawerOpen={setIsDrawerOpen} />} />
					<Route path="/products" element={<ProductsPage {...Props} setIsDrawerOpen={setIsDrawerOpen} />} />
					<Route path="/products/:id" element={<ProductDetailsPage {...Props} />} />
				</Routes>
			</CartContext.Provider>
			<Footer />
		</>
	)
}

export default App
