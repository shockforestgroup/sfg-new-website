import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import "./OverlayNav.css"

const navItems = [
  { title: "Cosmic Radio", link: "/cosmic-radio" },
  { title: "Hembrug", link: "/hembrug" },
  { title: "About", link: "/about" },
]

// const externalLinks = [
//   { title: "Archive", link: "https://archive.shockforest.group/" },
// ]

const OverlayNav = () => (
  <nav className={"overlay-nav"}>
    <div>
      {navItems.map(item => (
        <Link
          to={item.link}
          className="overlay-nav__item"
          activeClassName="overlay-nav__item--active"
        >
          {item.title}
        </Link>
      ))}
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
)

OverlayNav.propTypes = {
  items: PropTypes.array,
}

OverlayNav.defaultProps = {
  items: [],
}

export default OverlayNav
