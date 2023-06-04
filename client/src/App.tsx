import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { Routes, Route } from 'react-router-dom'

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/products" element={<ProductsPage />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
