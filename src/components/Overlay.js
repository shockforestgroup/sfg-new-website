import React from "react"
import { navigate } from "gatsby"

import Close from "./Close"

import "./Overlay.css"

export default ({ children, onClose }) => {
  return (
    <div className="overlay">
      <div className="overlay__inner">
        <div className="overlay__inner__content">
          <div className="overlay__inner__transp-layer"></div>
          {children}
          <div style={{ marginBottom: "10px" }}>
          </div>
        </div>
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
