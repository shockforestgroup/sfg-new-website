import React, { useState, useEffect, useRef } from "react"
import { navigate } from "gatsby"

import Close from "./Close"
import ImageWithTextOverlay from "./ImageWithTextOverlay"

import "./Overlay.css"

export default ({ children, onClose, imgSrc, imgOverlayText, imgAlt }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isCloseVisible, setIsCloseVisible] = useState(false); // State for Close visibility

  const overlayContentRef = useRef(null); // Ref for the overlay content

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      setIsVisible(false);
    }
  };

  const handleScroll = () => {
    setIsCloseVisible(true); // Set Close to visible when overlay content is scrolled
  };

  if (!isVisible) return null;

  return (
    <div className="overlay"
      ref={overlayContentRef}
      onScroll={handleScroll} // Add onScroll event listener
    >
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
        <div
          className="overlay__inner__content"
        >
          {children}
        </div>
        <span className="overlay__close" style={{ display: isCloseVisible ? 'block' : 'none' }}>
          <Close onClick={handleClose} />
        </span>
      </div>
    </div>
  )
}
