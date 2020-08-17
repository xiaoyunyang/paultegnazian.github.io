import React from "react"
// import { Link } from "gatsby"
import Header from "../components/header"
import "../styles.css";

export default function Home() 
{
  return (
    <div>
      {/* <Link to="/contact">Contact</Link> */}
      {/* <p><Link to="/about">About</Link></p> */}
      <Header headerText="Hello,  My Name is Paul Tegnazian" />
      <p>
        This is my first website using Gatsby. Please excuse the appearance as the page is under construction.
      </p>
      <p>
        A cleaner version can be found&nbsp;
        <a
        href="https://www.notion.so/paultegnazian/Paul-Tegnazian-s-Musings-af2ee005be83467b80ef192ecbcc4674"
        >here
        </a>, on my Notion.so site.
      </p>
      <p>
        Check out my&nbsp;
        <a 
        href="https://www.notion.so/paultegnazian/About-Paul-Tegnazian-f707ac725ac64f1e88b622547b0012e6"
        >About Me
        </a>.
      </p>
      <p></p>
      {/* <img src="https://drive.google.com/drive/folders/https://drive.google.com/file/d/1fnq4W5Wd9o_M2uHI_YlaV3K-4NpTgr4h/view?usp=sharing"/> */}
    </div>
  )
}