/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import Header from "./Header"
import "../css/global.css"

const Layout = ({ children, onLogoClick, style }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // for disabling
  React.useEffect(() => {
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
    disableBodyScroll(document.body);
  }, []);

  return (
    <div
      style={{
        background: "transparent",
        height: 0,
        width: 0,
        ...style,
      }}
    >
      <Header
        siteTitle={data.site.siteMetadata?.title || `SFG`}
        onLogoClick={onLogoClick}
      />
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  onLogoClick: PropTypes.func,
}

export default Layout
