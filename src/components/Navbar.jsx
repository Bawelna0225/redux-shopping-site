import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { BsCart } from 'react-icons/bs'
import { currencyChanged } from '../features/currencySlice'

export default function Navbar() {
	const dispatch = useDispatch()
	const [dropdownOpen, setDropdownOpen] = useState(false)
	const [currencyDropdown, setCurrencyDropdown] = useState(false)
	const [currency, setCurrency] = useState('$ USD')

	function handleCurrencyChange(currency) {
		setCurrency(currency)
		dispatch(
			currencyChanged({
				currency
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
	const handleKeyPress = (event) => {
		const charCode = event.which ? event.which : event.keyCode
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
			event.preventDefault()
		}
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
				<div className="item">
					<div className="item--pic"></div>
					<div className="item--name"></div>
					<div className="item--price"></div>
					<div className="item--color"></div>
					<div className="controls">
						<button>-</button>
						<input type="text" className="item--quantity" onKeyPress={handleKeyPress} inputMode="numeric"></input>
						<button>+</button>
						<button>del</button>
					</div>
				</div>
			</div>
		</nav>
	)
}
