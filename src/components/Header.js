import React from 'react'
import Imazhi from "../images/troll-face.png"

function Header() {
  return (
    <header >
        <img src={Imazhi} className="header-image"/>
        <h1 className="header-title">Meme Generator</h1>
    </header>
  )
}

export default Header