import React from 'react'
import { useSelector } from 'react-redux'

export default function SearchItem(data) {
	let { name, img, price } = data
	const currency = useSelector((state) => state.currency.currency[0])

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
	return (
		<div className="search-item">
			<img src={img} alt="" />
			<div className="info">
				<p>{name}</p>
				<p className="price">
					{currency[0]} {displayedPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true })}
				</p>
			</div>
		</div>
	)
}
