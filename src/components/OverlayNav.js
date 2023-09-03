import PropTypes from "prop-types"
import React, { useState } from "react"
import { Link } from "gatsby"
import SFGLogo from "../images/sfg-logo.svg"
import "./OverlayNav.css"

const navItems = [
  // { title: "Shock Forest Group", link: "/" },
  { title: "Cosmic Radio", link: "/cosmic-radio" },
  { title: "Hembrug", link: "/hembrug" },
]

const aboutItem = { title: "About", link: "/about" }

const OverlayNav = ({ showNavBar, onLogoClick }) => {
  // create a state variable called visible and set its initial value to the show prop
  const [visible, setVisible] = useState(showNavBar)

  // return the component only if the visible state is true
  return visible ? (
    <nav className={"overlay-nav bg-black nowrap"} >
      <a
        className="overlay-nav_project-items overlay-nav__logo"
        cursor="pointer"
        onClick={() =>
          onLogoClick ? onLogoClick() : setVisible(!visible)
        }
      >
        Shock Forest Group
      </a>
      <div className="overlay-nav_project-items">
        <div className="row">
          {navItems.map(item => (
            <Link
              to={item.link}
              className="overlay-nav__item"
              activeClassName="overlay-nav__item--active"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="overlay-nav__item">
          --
        </div>
        <Link
          to={aboutItem.link}
          className="overlay-nav__item"
          activeClassName="overlay-nav__item--active"
        >
          {aboutItem.title}
        </Link>
      </div>
    </nav>
  ) : (
    // Use visible state to control the display property of SFGLogo
    <div className="overlay-nav_button">
      < SFGLogo
        style={{ position: "absolute" }}
        className="overlay-nav_project-items overlay-nav__logo nowrap bg-black ba b--black"
        width="40px"
        height="20px"
        fill="red"
        cursor="pointer"
        onClick={() =>
          onLogoClick ? onLogoClick() : setVisible(!visible)
        }
      />
    </div>
  )
}

OverlayNav.propTypes = {
  items: PropTypes.array,
  show: PropTypes.bool,
}

OverlayNav.defaultProps = {
  items: [],
  show: true,
}

export default OverlayNav
