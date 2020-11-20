import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const navItems = [
  { title: "Essays/Works", link: "/essays-and-works" },
  { title: "About", link: "/about" },
]

const OverlayNav = ({ items }) => (
  <nav
    style={{
      textTransform: "uppercase",
      display: "flex",
      justifyContent: "space-around",
      fontSize: "22px",
    }}
  >
    <div>
      {navItems.map(item => (
        <Link
          to={item.link}
          style={{
            color: "inherit",
            margin: "0 33px",
            textDecoration: "none",
            borderBottom: "2px solid black",
          }}
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
