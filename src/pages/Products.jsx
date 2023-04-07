import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { items } from './data'
import Product from '../components/Product'

export default function Products() {
	return (
		<div>
			{items.map((item) => (
				<Link as={NavLink} to={`${item.id}`} state={{ item: item }} key={item.id}>
					<Product img={item.img} name={item.name} price={item.price} height="220px" />
				</Link>
			))}
		</div>
	)
}
