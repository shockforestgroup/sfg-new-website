import React from "react"
import { navigate } from "gatsby"

import OverlayNav from "./OverlayNav"
import Close from "./Close"

import "./Overlay.css"

export default ({ children, onClose }) => {
  return (
    <div className="overlay">
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
