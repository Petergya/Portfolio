import React, { useEffect, useState } from "react"

import image from "../../images/logo.jpg"
import { Link } from "react-router-dom"
import "./home.scss"
import "animate.css"
import AnimatedLetters from "../AnimatedLetters/AnimateLetters"
// import Logo from "./Logo/Logo"

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate")
  const nameArray = ["p", "G", " ", "S", "h", "a"]
  const jobArray = [
    "w",
    "e",
    "b",
    "",
    "",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 4000)
  })

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} ${letterClass}_12`}>i,</span>

          <br />

          <span className={`${letterClass} ${letterClass}_13`}>I</span>
          <span className={`${letterClass} ${letterClass}_14`}>'m</span>
          <br />
          <img src={image} className="image" alt="logo" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />

          <br />

          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Frontend Developer / Javascript Expert</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      {/* <Logo /> */}
    </div>
  )
}

export default Home
