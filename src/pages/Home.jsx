import React from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
	const currency = useSelector((state) => state.currency.currency)
  console.log(currency)
	return <section>{currency[0]}</section>
}
