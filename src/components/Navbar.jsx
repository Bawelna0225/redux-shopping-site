import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsCart } from 'react-icons/bs'

export default function Navbar() {
	const [dropdownOpen, setDropdownOpen] = useState(false)
	const [currencyDropdown, setCurrencyDropdown] = useState(false)
	const [currency, setCurrency] = useState('$ USD')

	function handleCurrencyChange(currency) {
		setCurrency(currency)
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
						<input type="text" readOnly placeholder="Currency" value={currency}></input>
						<div className="select-content">
							<div className="option" onClick={(e) => handleCurrencyChange(e.target.textContent)}>
								$ USD
							</div>
							<div className="option" onClick={(e) => handleCurrencyChange(e.target.textContent)}>
								₤ GBP
							</div>
							<div className="option" onClick={(e) => handleCurrencyChange(e.target.textContent)}>
								€ EURO
							</div>
							<div className="option" onClick={(e) => handleCurrencyChange(e.target.textContent)}>
								¥ YEN
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
			<div className={dropdownOpen ? 'dropdown show' : 'dropdown'}></div>
		</nav>
	)
}
