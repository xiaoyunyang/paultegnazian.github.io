import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Contact()
{
  return (
    <div style={{ color: 'blue' }}>
      <Link to="/">Home</Link>
      <Header headerText="Contact" />
      <p>Send us a message at paultegnazian@gmail.com</p>
    </div>
  )
}