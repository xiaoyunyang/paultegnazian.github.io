import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() 
{
  return (
    <div style={{ color: `blue`, fontsize: '32px' }}>
      <Link to="/contact">Contact</Link>
      <p><Link to="/about">About</Link></p>
      <Header headerText="Hello, My Name is Paul" />
      <p>Whats up peoples?</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}