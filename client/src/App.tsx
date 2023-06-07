import { useState } from 'react'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { Routes, Route } from 'react-router-dom'

const App = () => {
	const [isNavbarVisible, setIsNavbarVisible] = useState(true)

	return (
		<>
			<Navbar isNavbarVisible={isNavbarVisible} setIsNavbarVisible={setIsNavbarVisible} />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/products" element={<ProductsPage setIsNavbarVisible={setIsNavbarVisible} />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
