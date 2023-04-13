import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AiTwotoneDelete } from 'react-icons/ai'
import { increase, decrease, removeItem, setQuantity } from '../features/cartSlice'

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
		const itemId = item.id
		dispatch(
			increase({
				itemId,
			})
		)
	}
	function handleQuantityDecrease(item) {
		const itemId = item.id
		dispatch(
			decrease({
				itemId,
			})
		)
	}
	function handleQuantityChange(event, item) {
		quantity = parseInt(event.target.value)
		if(event.target.value === '') quantity = 1
		const itemId = item.id
		if(quantity >= 100 || quantity <= 0) return
		dispatch(
			setQuantity({
				itemId,
				quantity,
			})
		)
	}
	function handleItemDelete(item) {
		const itemId = item.id
		dispatch(
			removeItem({
				itemId,
			})
		)
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
						<input type="number" min={0} max={100} value={quantity} className="item--quantity" inputMode="numeric" onChange={(event) => handleQuantityChange(event, data)}></input>
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
