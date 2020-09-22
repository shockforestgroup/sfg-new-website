/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react")
const EntityIFrame = require("./src/components/EntityIFrame").default

exports.wrapRootElement = ({ element }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          position: "absolute",
          height: "100vh",
          width: "100%",
        }}
      ></div>
      <div
        style={{
          zIndex: 1,
          position: "absolute",
          top: "50px",
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <EntityIFrame />
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        {element}
      </div>
    </>
  )
}
