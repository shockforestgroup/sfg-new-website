import { navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, onLogoClick }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div style={{}}>
      <h1 style={{ margin: 0 }}>
        <div
          onClick={() => (onLogoClick ? onLogoClick() : navigate("/"))}
          style={{
            color: `white`,
            textDecoration: `none`,
            cursor: "pointer",
          }}
        >
          {siteTitle}
        </div>
      </h1>
    </div>
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
