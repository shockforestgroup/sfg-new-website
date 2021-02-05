import { navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SFGLogo from "../images/sfg-logo.svg"
import "./Header.css"

const Header = ({ siteTitle, onLogoClick }) => (
  <header className="header">
    <SFGLogo
      style={{ position: "absolute" }}
      width="40px"
      height="auto"
      fill="red"
      cursor="pointer"
      onClick={() =>
        onLogoClick ? onLogoClick() : navigate("/essays-and-works")
      }
    />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  onLogoClick: PropTypes.func,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
