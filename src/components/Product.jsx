import React from 'react'
import { useSelector } from 'react-redux'

export default function Product({ ...data }) {
	const currency = useSelector((state) => state.currency.currency[0])
	let displayedPrice
	switch (currency) {
		case '£':
			displayedPrice = Math.round(data.price * 0.80 * 100) / 100
			break
		case '€':
			displayedPrice = Math.round(data.price * 0.92 * 100) / 100
			break
		case '¥':
			displayedPrice = Math.round(data.price * 131.61 * 100) / 100
			break
		default:
			displayedPrice = data.price
			break
	}
	return (
		<div className="product">
			<img src={data.img} width={100} alt="" />
			<div className="description">
				<h2>{data.name}</h2>
				<p className='price'>
					{currency} {displayedPrice}
				</p>
			</div>
		</div>
	)
}
