/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const gatsbyBrowserHooks = require("./gatsby-browser.js")
const wrapRootElement = gatsbyBrowserHooks.wrapRootElement

exports.wrapRootElement = wrapRootElement
