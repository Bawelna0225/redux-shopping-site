import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ProductPage() {
	const currency = useSelector((state) => state.currency.currency[0])
	let displayedPrice
	const location = useLocation()
	const {
		item: { id, name, price, img, sizes, colors },
	} = location.state

	const [activeSize, setActiveSize] = useState(sizes[0])
	const [activeColor, setActiveColor] = useState(colors[0])

	switch (currency) {
		case '£':
			displayedPrice = Math.round(price * 0.8 * 100) / 100
			break
		case '€':
			displayedPrice = Math.round(price * 0.92 * 100) / 100
			break
		case '¥':
			displayedPrice = Math.round(price * 131.61 * 100) / 100
			break
		default:
			displayedPrice = price
			break
	}

	const handleChangeChosenSize = (e) => {
		setActiveSize(e.target.value)
	}
	const handleChangeChosenColor = (e) => {
		setActiveColor(e.target.value)
	}

	return (
		<section>
			<div className="single-product-wrapper">
				<div className="product-image">
					<img src={img} width={400} alt="" />
				</div>
				<div className="right-panel">
					<h2>{name}</h2>
					<h4>
						Price: {currency} {displayedPrice}
					</h4>
					<div className="sizes">
						{sizes.map((button) => (
							<button key={button} value={button} className={activeSize == button ? 'active' : null} onClick={handleChangeChosenSize}>
								{button}
							</button>
						))}
					</div>
					<div className="colors">
						{colors.map((button) => (
							<button key={button} value={button} style={{ backgroundColor: button }} className={activeColor == button ? 'active' : null} onClick={handleChangeChosenColor}></button>
						))}
					</div>
					<button
						className="add-to-cart"
						onClick={(btn) => {
							btn.preventDefault()
						}}
					>
						Add To Cart
					</button>
				</div>
			</div>
		</section>
	)
}
