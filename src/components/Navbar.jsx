import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { BsCart, BsCartCheck } from 'react-icons/bs'
import { currencyChanged } from '../features/currencySlice'
import DropdownCartItem from './DropdownCartItem'
import pic1 from '../images/2.png'

export default function Navbar() {
	const dispatch = useDispatch()
	const cartItems = useSelector((state) => state.cart)
	const [dropdownOpen, setDropdownOpen] = useState(false)
	const [currencyDropdown, setCurrencyDropdown] = useState(false)
	const [currency, setCurrency] = useState('$ USD')

	function handleCurrencyChange(currency) {
		setCurrency(currency)
		dispatch(
			currencyChanged({
				currency,
			})
		)
	}
	function handleOpenDropdown() {
		setDropdownOpen(!dropdownOpen)
		setCurrencyDropdown(false)
	}
	function handleOpenCurrencySelect() {
		setCurrencyDropdown(!currencyDropdown)
		setDropdownOpen(false)
	}
	return (
		<nav className="navbar">
			<div className="logo">LOGO</div>
			<ul>
				<li>
					<div className={currencyDropdown ? 'select open' : 'select'} onClick={() => handleOpenCurrencySelect()}>
						<span>{currency}</span>
						<div className="select-content">
							<div className="option" onClick={(e) => handleCurrencyChange(e.target.textContent)}>
								$ USD
							</div>
							<div className="option" onClick={(e) => handleCurrencyChange(e.target.textContent)}>
								£ GBP
							</div>
							<div className="option" onClick={(e) => handleCurrencyChange(e.target.textContent)}>
								€ EUR
							</div>
							<div className="option" onClick={(e) => handleCurrencyChange(e.target.textContent)}>
								¥ JPY
							</div>
						</div>
					</div>
				</li>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/products">Products</Link>
				</li>
				<li>
					<button onClick={() => handleOpenDropdown()}>
						Cart <BsCart></BsCart>
					</button>
				</li>
			</ul>
			<div className={dropdownOpen ? 'dropdown show' : 'dropdown'}>
				<div className="cart-items">
					{cartItems.map((item, index) => {
						return <DropdownCartItem key={index} name={item.name} img={item.img} price={item.price} size={item.activeSize} color={item.activeColor} quantity={1} />
					})}
				</div>
				<div className="total">
					<Link to="checkout">
						Checkout <BsCartCheck></BsCartCheck>
					</Link>
					<span>
						Total: <span style={{ color: 'var(--accent-color)' }}>{currency[0]}</span>
					</span>
				</div>
			</div>
		</nav>
	)
}
