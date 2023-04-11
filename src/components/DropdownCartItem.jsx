import React from 'react'
import pic1 from '../images/2.png'
import { useSelector, useDispatch } from 'react-redux'
import { AiTwotoneDelete } from 'react-icons/ai'

export default function DropdownCartItem(data) {
	let { name, img, price, size, color, quantity } = data
	const currency = useSelector((state) => state.currency.currency[0])
	const dispatch = useDispatch()

	let displayedPrice

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
	function handleQuantityIncrease(item) {
		console.log('increase', item)
		quantity++
	}
	function handleQuantityDecrease(item) {
		console.log('decrease', item)
	}
	function handleQuantityChange(e) {
		console.log('change', e.target.value)
	}
	function handleItemDelete(item) {
		console.log('delete', item)
	}
	return (
		<div className="item">
			<img src={img} width={40} height={40} alt="" className="item--pic"></img>
			<div className="right">
				<div className="top">
					<div className="item--name">{name}</div>
					<div className="item--price">
						<span style={{ color: 'var(--accent-color)' }}>{currency}</span> {displayedPrice}
					</div>
				</div>
				<div className="bottom">
					<div className="item--size">{size}</div>
					<div className="item--color" style={{ background: color }}></div>
					<div className="controls">
						<button onClick={() => handleQuantityDecrease(data)}>-</button>
						<input type="number" min={0} max={100} value={quantity} className="item--quantity" inputMode="numeric" onChange={(e) => handleQuantityChange(e)}></input>
						<button onClick={() => handleQuantityIncrease(data)}>+</button>
						<button className="delete" onClick={() => handleItemDelete(data)}>
							<AiTwotoneDelete></AiTwotoneDelete>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
