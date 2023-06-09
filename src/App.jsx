import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductPage from './pages/ProductPage'
import Checkout from './pages/Checkout'
import NotFound from './pages/NotFound'
import './styles/main.css'

function App() {
	return (
		<div className="App">
			<BrowserRouter history={history}>
				<Navbar />
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="products">
							<Route index element={<Products />} />
							<Route path=":productId" element={<ProductPage />} />
						</Route>
						<Route path="checkout" element={<Checkout />} />
					</Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
