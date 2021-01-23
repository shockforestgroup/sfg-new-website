/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import EntityIFrame from "./src/components/EntityIFrame"

export const wrapRootElement = ({ element }) => {
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
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100vw",
          height: "100vh",
        }}
      >
        <EntityIFrame />
      </div>
      <div
        style={{
          zIndex: 2,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 0,
          height: 0,
        }}
      >
        {element}
      </div>
    </>
  )
}
