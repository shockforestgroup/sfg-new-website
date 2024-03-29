import { navigate } from "gatsby"
import PropTypes from "prop-types"
// import React from "react"
import React, { useState } from "react" // Import useState hook
import SFGLogo from "../images/sfg-logo.svg"
import "./Header.css"
import OverlayNav from "./OverlayNav"
import { Link } from "gatsby"

const Header = ({ siteTitle, onLogoClick, showNavBar }) => {
  // Initialize a state variable called show and set its default value to true
  const [show, setShow] = useState(false)


  return (
    <header>
      <OverlayNav
        showNavBar= {showNavBar}
      />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  onLogoClick: PropTypes.func,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
