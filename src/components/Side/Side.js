import { Link, NavLink } from "react-router-dom"
import "./side.scss"
import image from "../../images/logo.jpg"
import { User } from "@phosphor-icons/react"
import { AiFillHome } from "react-icons/ai"
import { Chats } from "@phosphor-icons/react"
import { GithubLogo } from "@phosphor-icons/react"
import { LinkedinLogo } from "@phosphor-icons/react"
import { FacebookLogo } from "@phosphor-icons/react"
import { TwitterLogo } from "@phosphor-icons/react"

const sidebar = () => (
  <div className="nav-bar">
    <Link className="logo">
      <img src={image} alt="logo" />
      {/* <img className="sub-logo" src={image} alt="logo" /> */}
    </Link>

    <nav className="icons-container">
      <NavLink
        className="innericons-container"
        exact="true"
        activecalassname="active"
        to="/"
      >
        <AiFillHome size={32} />
      </NavLink>

      <NavLink
        exact="true"
        activecalassname="active"
        className="about-link"
        to="/About"
      >
        <User size={32} weight="fill" />
      </NavLink>

      <NavLink
        exact="true"
        activecalassname="active"
        className="contact-link"
        to="/Contact"
      >
        <Chats size={32} weight="fill" />
      </NavLink>
    </nav>

    <ul>
      <li>
        <a
          target="-blank"
          rel="noreferrer"
          href="https://github.com/Petergya/Petergya"
        >
          <GithubLogo size={18}weight="fill"/>
        </a>
      </li>

      <li>
        <a
          target="-blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/peter-gyang-8aa75122a/"
        >
          <LinkedinLogo size={18} weight="fill"/>
        </a>
      </li>

      <li>
        <a
          target="-blank"
          rel="noreferrer"
          href="https://web.facebook.com/peter.gyang1"
        >
          <FacebookLogo size={18} weight="fill"/>
        </a>
      </li>

      <li>
        <a
          target="-blank"
          rel="noreferrer"
          href="https://twitter.com/GyangShaPeter1"
        >
          <TwitterLogo size={18} weight="fill" />
        </a>
      </li>
    </ul>
  </div>
)

export default sidebar

// https://web.facebook.com/peter.gyang1

// https://www.linkedin.com/in/peter-gyang-8aa75122a/

// https://twitter.com/GyangShaPeter1
