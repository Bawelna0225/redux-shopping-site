import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { BsCart, BsCartCheck } from 'react-icons/bs'
import { currencyChanged } from '../features/currencySlice'
import DropdownCartItem from './DropdownCartItem'
import { calculateTotals } from '../features/cartSlice'

export default function Navbar() {
	const dispatch = useDispatch()
	dispatch(calculateTotals())
	const { cartItems, total } = useSelector((store) => store.cart)
	const sum = total
	const [dropdownOpen, setDropdownOpen] = useState(false)
	const [currencyDropdown, setCurrencyDropdown] = useState(false)
	const [currency, setCurrency] = useState('$ USD')

	let displayedTotal

	function handleCurrencyChange(currency) {
		setCurrency(currency)
		dispatch(
			currencyChanged({
				currency,
			})
		)
	}
	switch (currency) {
		case '£ GBP':
			displayedTotal = Math.round(sum * 0.8 * 100) / 100
			break
		case '€ EUR':
			displayedTotal = Math.round(sum * 0.92 * 100) / 100
			break
		case '¥ JPY':
			displayedTotal = Math.round(sum * 131.61 * 100) / 100
			break
		default:
			displayedTotal = sum
			break
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
						{cartItems.length > 0 && <span className="cart-quantity">{cartItems.length}</span>}
					</button>
				</li>
			</ul>
			<div className={dropdownOpen ? 'dropdown show' : 'dropdown'}>
				{cartItems.length > 0 ? (
					<>
						<div className="cart-items">
							{cartItems.map((item, index) => {
								return <DropdownCartItem key={index} id={item.id} name={item.name} img={item.img} price={item.price} size={item.activeSize} color={item.activeColor} quantity={item.quantity} />
							})}
						</div>
						<div className="total">
							<Link to="checkout">
								Checkout <BsCartCheck></BsCartCheck>
							</Link>
							<p>
								Total: <span style={{ color: 'var(--accent-color)', marginRight: '5px' }}>{currency[0]}</span>
								<span>{displayedTotal.toFixed(2)}</span>
							</p>
						</div>
					</>
				) : (
					<p className="empty-cart">Your Cart Is Empty</p>
				)}
			</div>
		</nav>
	)
}
