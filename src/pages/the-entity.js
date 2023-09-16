import React from "react"

import EntityIFrame from "../components/EntityIFrame"
import SEO from "../components/Seo"

const TheEntity = () => (
  <>
    <SEO title="The Entity" />
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
  </>
)

export default TheEntity
