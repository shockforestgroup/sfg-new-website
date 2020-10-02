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
          backgroundColor: "#DCDED5",
          position: "absolute",
          height: "100vh",
          width: "100%",
        }}
      ></div>
      <div
        style={{
          zIndex: 1,
          position: "absolute",
          inset: "50px 0 0",
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
