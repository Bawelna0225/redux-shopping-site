import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsCart } from 'react-icons/bs'

export default function Navbar() {
	const [dropdownOpen, setDropdownOpen] = useState(false)
	return (
		<nav className="navbar">
			<div className="logo">LOGO</div>
			<ul>
				<li>
					<select>
						<option>$ USD</option>
						<option>₤ GBP</option>
						<option>€ EURO</option>
						<option>¥ YEN</option>
					</select>
				</li>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/products">Products</Link>
				</li>
				<li>
					<button onClick={() => setDropdownOpen(!dropdownOpen)}>
						Cart <BsCart></BsCart>
					</button>
				</li>
			</ul>
			<div className={dropdownOpen ? 'dropdown show' : 'dropdown'}></div>
		</nav>
	)
}
