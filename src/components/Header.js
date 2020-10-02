import { navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, onLogoClick }) => (
  <header style={{ padding: "41px  63px" }}>
    <h1
      style={{
        margin: 0,
        fontSize: "22px",
        fontWeight: "300",
        color: `black`,
        textDecoration: `none`,
        cursor: "pointer",
      }}
      onClick={() =>
        onLogoClick ? onLogoClick() : navigate("/essays-and-works")
      }
    >
      {siteTitle}
    </h1>
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
