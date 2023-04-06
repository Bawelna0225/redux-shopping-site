import React from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
	const currency = useSelector((state) => state.currency.currency)
	return <section><h1>current currency: {currency[0]}</h1></section>
}
