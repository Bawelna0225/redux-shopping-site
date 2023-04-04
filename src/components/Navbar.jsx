import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="logo">LOGO</div>
			<ul>
				<li>
					<select>
						<option>$</option>
						<option>₤</option>
						<option>€</option>
						<option>¥</option>
					</select>
				</li>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/products">Products</Link>
				</li>
        <li><button>Cart <AiOutlineShoppingCart></AiOutlineShoppingCart></button></li>
			</ul>
		</nav>
	)
}
