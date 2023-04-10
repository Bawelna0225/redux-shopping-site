import React from 'react'
import pic1 from '../images/2.png'
import { AiTwotoneDelete } from 'react-icons/ai'

export default function DropdownCartItem(data) {
	const { name, price, size, color, quantity } = data
	return (
		<div className="item">
			<img src={pic1} width={40} height={40} alt="a" className="item--pic"></img>
			<div className="right">
				<div className="top">
					<div className="item--name">{name}</div>
					<div className="item--price">{price}</div>
				</div>
				<div className="bottom">
					<div className="item--size">{size}</div>
					<div className="item--color" style={{background: color}}></div>
					<div className="controls">
						<button>-</button>
						<input type="number" min={0} max={100} value={quantity} className="item--quantity" inputMode="numeric"></input>
						<button>+</button>
						<button className="delete">
							<AiTwotoneDelete></AiTwotoneDelete>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
