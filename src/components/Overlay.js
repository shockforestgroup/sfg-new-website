import React from "react"
import { navigate } from "gatsby"

import Close from "./Close"
import ImageWithTextOverlay from "./ImageWithTextOverlay"

import "./Overlay.css"

export default ({ children, onClose, imgSrc, imgOverlayText, imgAlt }) => {
  return (
    <div className="overlay">
      <div className="overlay__inner__transp-layer" />
      <div className="overlay__inner">
        <div>
          <ImageWithTextOverlay
            src={imgSrc}
            overlayText={imgOverlayText}
            alt={imgAlt}
          />
        </div>
        <div style={{ marginBottom: "50px" }} />
        <div className="overlay__inner__content">
          {children}
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
