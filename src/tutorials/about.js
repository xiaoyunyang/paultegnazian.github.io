import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"

export default function About()
{
  return (
    <div style={{ color: 'yellow', background: 'grey'}}>
      <Link to="/">Home</Link>
      <Header headerText="About Paul Tegnazian" />
      <Header headerText="Its cool, brosky" />
      <p>Sweet, I am making a local web page!</p>
    </div>
  )
}