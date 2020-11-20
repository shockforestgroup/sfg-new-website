import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import "./OverlayNav.css"

const navItems = [
  { title: "Essays/Works", link: "/essays-and-works" },
  { title: "About", link: "/about" },
]

const OverlayNav = () => (
  <nav className={"overlay-nav"}>
    <div>
      {navItems.map(item => (
        <Link
          to={item.link}
          className="overlay-nav__item"
          activeStyle={{
            borderBottom: "none",
            pointerEvents: "none",
          }}
        >
          {item.title}
        </Link>
      ))}
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
