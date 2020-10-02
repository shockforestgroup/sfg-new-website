import React from "react"
import { navigate } from "gatsby"

import OverlayNav from "./OverlayNav"
import Close from "./Close"

export default ({ children, onClose }) => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1,
        backgroundColor: "white",
        top: "40px",
        left: "100px",
        right: "100px",
        bottom: "40px",
        padding: "20px 60px",
        opacity: "0.8",
        overflow: "scroll",
      }}
    >
      <div style={{ marginBottom: "105px" }}>
        <OverlayNav />
      </div>
      {children}
      <Close
        style={{ position: "absolute", right: "31px", top: "28px" }}
        onClick={() => {
          onClose ? onClose() : navigate("/")
        }}
      />
    </div>
  )
}
