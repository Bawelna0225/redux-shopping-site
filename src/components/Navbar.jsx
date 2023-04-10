import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { BsCart, BsCartCheck } from 'react-icons/bs'
import { currencyChanged } from '../features/currencySlice'
import  DropdownCartItem  from './DropdownCartItem'
import pic1 from '../images/2.png'

export default function Navbar() {
	const dispatch = useDispatch()
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
					<DropdownCartItem name='Product-1' price='$ 9.99' size='M' color='black' quantity='3' />
					<DropdownCartItem name='Product-2' price='$ 5.99' size='XS' color='maroon' quantity='2' />
					<DropdownCartItem name='Product-6' price='$ 16.99' size='S' color='blue' quantity='1' />
					<DropdownCartItem name='Product-3' price='$ 19.99' size='L' color='springgreen' quantity='5' />
				</div>
				<div className="total">
					<Link to="checkout">
						Checkout <BsCartCheck></BsCartCheck>
					</Link>
					<span>Total: $69.69</span>
				</div>
			</div>
		</nav>
	)
}
