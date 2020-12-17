import React from "react"
import { navigate } from "gatsby"

import OverlayNav from "./OverlayNav"
import Close from "./Close"

import "./Overlay.css"

export default ({ children, onClose }) => {
  return (
    <div className="overlay">
      <div className="overlay__inner">
        <div style={{ marginBottom: "105px" }}>
          <OverlayNav />
        </div>
        {children}
        <span className="overlay__close">
          <Close
            onClick={() => {
              onClose ? onClose() : navigate("/")
            }}
          />
        </span>
      </div>
    </div>
  )
}
