import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CheckoutCartItem from '../components/CheckoutCartItem'

export default function Checkout() {
	const { cartItems, total, quantity } = useSelector((store) => store.cart)
	const currency = useSelector((state) => state.currency.currency[0])
	const dispatch = useDispatch()

	let displayedTotal

	switch (currency) {
		case '£':
			displayedTotal = Math.round(total * 0.8 * 100) / 100
			break
		case '€':
			displayedTotal = Math.round(total * 0.92 * 100) / 100
			break
		case '¥':
			displayedTotal = Math.round(total * 131.61 * 100) / 100
			break
		default:
			displayedTotal = total
			break
	}

	return (
		<div className="checkout-cart">
			{cartItems.length > 0 ? (
				<>
					<div className="cart-items">
						{cartItems.map((item, index) => {
							return <CheckoutCartItem key={index} id={item.id} name={item.name} img={item.img} price={item.price} size={item.activeSize} color={item.activeColor} quantity={item.quantity} />
						})}
					</div>
					<div className="total">
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
	)
}
