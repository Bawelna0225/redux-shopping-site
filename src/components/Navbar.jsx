import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { BsCart, BsCartCheck } from 'react-icons/bs'
import { AiTwotoneDelete } from 'react-icons/ai'
import { currencyChanged } from '../features/currencySlice'
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
					<div className="item">
						<img src={pic1} width={40} height={40} alt="a" className="item--pic"></img>
						<div className="right">
							<div className="top">
								<div className="item--name">Product-2</div>
								<div className="item--price">$ 5.99</div>
							</div>
							<div className="bottom">
								<div className="item--size">XS</div>
								<div className="item--color"></div>
								<div className="controls">
									<button>-</button>
									<input type="number" min={0} max={100} className="item--quantity" inputMode="numeric"></input>
									<button>+</button>
									<button className="delete">
										<AiTwotoneDelete></AiTwotoneDelete>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<img src={pic1} width={40} height={40} alt="a" className="item--pic"></img>
						<div className="right">
							<div className="top">
								<div className="item--name">Product-2</div>
								<div className="item--price">$ 5.99</div>
							</div>
							<div className="bottom">
								<div className="item--size">XS</div>
								<div className="item--color"></div>
								<div className="controls">
									<button>-</button>
									<input type="number" min={0} max={100} className="item--quantity" inputMode="numeric"></input>
									<button>+</button>
									<button className="delete">
										<AiTwotoneDelete></AiTwotoneDelete>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<img src={pic1} width={40} height={40} alt="a" className="item--pic"></img>
						<div className="right">
							<div className="top">
								<div className="item--name">Product-2</div>
								<div className="item--price">$ 5.99</div>
							</div>
							<div className="bottom">
								<div className="item--size">XS</div>
								<div className="item--color"></div>
								<div className="controls">
									<button>-</button>
									<input type="number" min={0} max={100} className="item--quantity" inputMode="numeric"></input>
									<button>+</button>
									<button className="delete">
										<AiTwotoneDelete></AiTwotoneDelete>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<img src={pic1} width={40} height={40} alt="a" className="item--pic"></img>
						<div className="right">
							<div className="top">
								<div className="item--name">Product-2</div>
								<div className="item--price">$ 5.99</div>
							</div>
							<div className="bottom">
								<div className="item--size">XS</div>
								<div className="item--color"></div>
								<div className="controls">
									<button>-</button>
									<input type="number" min={0} max={100} className="item--quantity" inputMode="numeric"></input>
									<button>+</button>
									<button className="delete">
										<AiTwotoneDelete></AiTwotoneDelete>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<img src={pic1} width={40} height={40} alt="a" className="item--pic"></img>
						<div className="right">
							<div className="top">
								<div className="item--name">Product-2</div>
								<div className="item--price">$ 5.99</div>
							</div>
							<div className="bottom">
								<div className="item--size">XS</div>
								<div className="item--color"></div>
								<div className="controls">
									<button>-</button>
									<input type="number" min={0} max={100} className="item--quantity" inputMode="numeric"></input>
									<button>+</button>
									<button className="delete">
										<AiTwotoneDelete></AiTwotoneDelete>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<img src={pic1} width={40} height={40} alt="a" className="item--pic"></img>
						<div className="right">
							<div className="top">
								<div className="item--name">Product-2</div>
								<div className="item--price">$ 5.99</div>
							</div>
							<div className="bottom">
								<div className="item--size">XS</div>
								<div className="item--color"></div>
								<div className="controls">
									<button>-</button>
									<input type="number" min={0} max={100} className="item--quantity" inputMode="numeric"></input>
									<button>+</button>
									<button className="delete">
										<AiTwotoneDelete></AiTwotoneDelete>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<img src={pic1} width={40} height={40} alt="a" className="item--pic"></img>
						<div className="right">
							<div className="top">
								<div className="item--name">Product-2</div>
								<div className="item--price">$ 5.99</div>
							</div>
							<div className="bottom">
								<div className="item--size">XS</div>
								<div className="item--color"></div>
								<div className="controls">
									<button>-</button>
									<input type="number" min={0} max={100} className="item--quantity" inputMode="numeric"></input>
									<button>+</button>
									<button className="delete">
										<AiTwotoneDelete></AiTwotoneDelete>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<img src={pic1} width={40} height={40} alt="a" className="item--pic"></img>
						<div className="right">
							<div className="top">
								<div className="item--name">Product-2</div>
								<div className="item--price">$ 5.99</div>
							</div>
							<div className="bottom">
								<div className="item--size">XS</div>
								<div className="item--color"></div>
								<div className="controls">
									<button>-</button>
									<input type="number" min={0} max={100} className="item--quantity" inputMode="numeric"></input>
									<button>+</button>
									<button className="delete">
										<AiTwotoneDelete></AiTwotoneDelete>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<img src={pic1} width={40} height={40} alt="a" className="item--pic"></img>
						<div className="right">
							<div className="top">
								<div className="item--name">Product-2</div>
								<div className="item--price">$ 5.99</div>
							</div>
							<div className="bottom">
								<div className="item--size">XS</div>
								<div className="item--color"></div>
								<div className="controls">
									<button>-</button>
									<input type="number" min={0} max={100} className="item--quantity" inputMode="numeric"></input>
									<button>+</button>
									<button className="delete">
										<AiTwotoneDelete></AiTwotoneDelete>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<img src={pic1} width={40} height={40} alt="a" className="item--pic"></img>
						<div className="right">
							<div className="top">
								<div className="item--name">Product-2</div>
								<div className="item--price">$ 5.99</div>
							</div>
							<div className="bottom">
								<div className="item--size">XS</div>
								<div className="item--color"></div>
								<div className="controls">
									<button>-</button>
									<input type="number" min={0} max={100} className="item--quantity" inputMode="numeric"></input>
									<button>+</button>
									<button className="delete">
										<AiTwotoneDelete></AiTwotoneDelete>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<img src={pic1} width={40} height={40} alt="a" className="item--pic"></img>
						<div className="right">
							<div className="top">
								<div className="item--name">Product-2</div>
								<div className="item--price">$ 5.99</div>
							</div>
							<div className="bottom">
								<div className="item--size">XS</div>
								<div className="item--color"></div>
								<div className="controls">
									<button>-</button>
									<input type="number" min={0} max={100} className="item--quantity" inputMode="numeric"></input>
									<button>+</button>
									<button className="delete">
										<AiTwotoneDelete></AiTwotoneDelete>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<img src={pic1} width={40} height={40} alt="a" className="item--pic"></img>
						<div className="right">
							<div className="top">
								<div className="item--name">Product-2</div>
								<div className="item--price">$ 5.99</div>
							</div>
							<div className="bottom">
								<div className="item--size">XS</div>
								<div className="item--color"></div>
								<div className="controls">
									<button>-</button>
									<input type="number" min={0} max={100} className="item--quantity" inputMode="numeric"></input>
									<button>+</button>
									<button className="delete">
										<AiTwotoneDelete></AiTwotoneDelete>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="total">
					<Link to='checkout'>Checkout <BsCartCheck></BsCartCheck></Link>
					<span>
						Total: $69.69
					</span>
				</div>
			</div>
		</nav>
	)
}
