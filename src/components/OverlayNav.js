import PropTypes from "prop-types"
import React, { useState } from "react"
import { Link } from "gatsby"
import SFGLogo from "../images/sfg-logo.svg"
import "./OverlayNav.css"

const navItems = [
  // { title: "Shock Forest Group", link: "/" },
  { title: "Cosmic Radio", link: "/cosmic-radio" },
  { title: "Hembrug", link: "/hembrug" },
  // { title: "About", link: "/about" },
]

const aboutItem = { title: "About", link: "/about" }


// const externalLinks = [
//   { title: "Archive", link: "https://archive.shockforest.group/" },
// ]

const OverlayNav = ({ show, onLogoClick }) => {
  // create a state variable called visible and set its initial value to the show prop
  const [visible, setVisible] = useState(show)

  // return the component only if the visible state is true
  return visible ? (
    <nav className={"overlay-nav bg-black"} >
      <button
        className="overlay-nav__item white nowrap bg-black ba b--black"
        cursor="pointer"
        onClick={() =>
          onLogoClick ? onLogoClick() : setVisible(!visible)
        }
      >
        Shock Forest Group
      </button>
      <div className="overlay-nav_project-items">
        {navItems.map(item => (
          <Link
            to={item.link}
            className="overlay-nav__item"
            activeClassName="overlay-nav__item--active"
          >
            {item.title}
          </Link>
        ))}
        --
        <Link
          to={aboutItem.link}
          className="overlay-nav__item"
          activeClassName="overlay-nav__item--active"
        >
          {aboutItem.title}
        </Link>
        {/* {externalLinks.map(item => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="overlay-nav__item"
          activeClassName="overlay-nav__item--active"
          >
          {item.title}
        </a>
      ))} */}
      </div>
    </nav>
  ) : (
    // Use visible state to control the display property of SFGLogo
    <div className="overlay-nav_button">
      < SFGLogo
        style={{ position: "absolute" }}
        className="overlay-nav__item nowrap bg-black ba b--black"
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
