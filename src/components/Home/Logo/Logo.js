import logo from "../../../images/logo.jpg"
import "./logo.scss"
import { useRef } from "react"
import { useEffect } from "react"
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin"
import gsap from "gsap-trial"

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })

      // gsap.from (
      //   solidLogoRef.current, {
      //     opacity: 0,
      //   }, {
      //     opacity: 1,
      //     delay: 4,
      //     duration: 4
      //   }
      // )

      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })
  }, [])

  return (
    <div className="Logo-container">
      <img ref={solidLogoRef} className="Solid-logo" src={logo} alt="s" />
    </div>
  )
}

export default Logo
