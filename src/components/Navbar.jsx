import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart } from 'react-icons/bs'

export default function Navbar() {
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
        <li><button>Cart <BsCart></BsCart></button></li>
			</ul>
      <div className="dropdown">
        
      </div>
		</nav>
	)
}
