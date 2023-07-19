import './about.scss'
import AnimatedLetters from '../AnimatedLetters/AnimateLetters'
import { useEffect, useState } from 'react'

// import { AngularLogo } from '@phosphor-icons/react'
// import { AiFillHtml5 } from 'react-icons/ai'
// import { css3 } from "@phosphor-icons/react"
// import React from "react"
// import { jsSquare} from "@phosphor-icons/react"
// import { Github } from "@phosphor-icons/react"

const About = () => {
const [letterClass, setLetterClass] = useState("text-animate")

useEffect(() => {
    setTimeout(() => {
    setLetterClass("text-animate-hover")
  }, 3000)
}, [])

    return (
      <div className="About-page">
        <div className="text-zone">
          {/* <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <react-icons icons={AngularLogo} color="#DD0031" />
              </div>
              <div className="face1">
                <react-icons icons={AiFillHtml5} color="#DD0031" />
              </div>
              <div className="face2">
                <phosphor-icons icons={css3} color="#DD0031" />
              </div>
              <div className="face3">
                <phosphor-icons icons={React} color="#DD0031" />
              </div>
              <div className="face4">
                <phosphor-icons icons={jsSquare} color="#DD0031" />
              </div>
              <div className="face5">
                <phosphor-icons icons={Github} color="#DD0031" />
              </div>
              <div className="face6">
                <phosphor-icons icons={AngularLogo} color="#DD0031" />
              </div>
            </div>
          </div> */}
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in
            established IT Company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>

          <p>
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chop one design problem at a time
          </p>

          <p>
            If i need to define myself in one sentense that would be a family
            person, Father of a beautiful Daughter, a sport fanatic, photography
            enthusiast, and tech- obsessed!!!
          </p>
        </div>
      </div>
    )
 }

export default About