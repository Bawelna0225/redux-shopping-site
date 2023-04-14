import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { BsCart, BsCartCheck, BsSearch } from 'react-icons/bs'
import { currencyChanged } from '../features/currencySlice'
import DropdownCartItem from './DropdownCartItem'
import { calculateTotal } from '../features/cartSlice'

export default function Navbar() {
	const dispatch = useDispatch()

	dispatch(calculateTotal())

	const { cartItems, total, quantity } = useSelector((store) => store.cart)
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
			displayedTotal = Math.round(total * 0.8 * 100) / 100
			break
		case '€ EUR':
			displayedTotal = Math.round(total * 0.92 * 100) / 100
			break
		case '¥ JPY':
			displayedTotal = Math.round(total * 131.61 * 100) / 100
			break
		default:
			displayedTotal = total
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
					<div className="search-bar">
						<input type="text" />
						<button className="search-btn">
							<BsSearch></BsSearch>
						</button>
					</div>
				</li>
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
						{quantity > 0 && <span className="cart-quantity">{quantity}</span>}
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
								<span>{displayedTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true })}</span>
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
