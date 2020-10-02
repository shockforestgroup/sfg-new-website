/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Layout from "./Layout"
import Overlay from "./Overlay"
import "../css/global.css"

const LayoutWithOverlay = ({ children }) => {
  return (
    <Layout style={{ width: "100%", height: "100vh" }}>
      {children && (
        <Overlay>
          <main>{children}</main>
        </Overlay>
      )}
    </Layout>
  )
}

LayoutWithOverlay.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutWithOverlay
