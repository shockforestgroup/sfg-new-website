import { navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SFGLogo from "../images/sfg-logo.svg"
import "./Header.css"
import OverlayNav from "./OverlayNav"

const Header = ({ siteTitle, onLogoClick }) => (
  <header className="header">
    <SFGLogo
      style={{ position: "absolute" }}
      width="40px"
      height="20px"
      fill="red"
      cursor="pointer"
      onClick={() =>
        onLogoClick ? onLogoClick() : navigate("/about")
      }
    />
    {/* <OverlayNav/> */}
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
