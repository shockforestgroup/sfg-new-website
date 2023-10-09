import React, { useState, useEffect, useRef } from "react"
import { navigate } from "gatsby"

import Close from "./Close"
import ImageWithTextOverlay from "./ImageWithTextOverlay"

import "./Overlay.css"

export default ({ children, onClose, imgLandscapeSrc, imgPortraitSrc, imgOverlayText, imgAlt }) => {
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
    if (overlayContentRef.current) {
      const halfwayPoint = window.innerHeight / 4;
      if (overlayContentRef.current.scrollTop >= halfwayPoint) {
        setIsCloseVisible(true); // Set Close to visible after scrolling half of the content
      }
    }
  };

  useEffect(() => {
    const handleDocumentClick = () => {
      if (overlayContentRef.current) {
        const newScrollPosition = overlayContentRef.current.scrollTop + window.innerHeight;
        overlayContentRef.current.scrollTo({
          top: newScrollPosition,
          behavior: 'smooth'
        });
      }
      setIsCloseVisible(true); // Set Close to visible
    };

    document.addEventListener('click', handleDocumentClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="overlay">
      <div className="overlay__inner__transp-layer" />
      <div
        className="overlay__inner"
        ref={overlayContentRef}
        onScroll={handleScroll} // Add onScroll event listener
      >
        <div>
          <ImageWithTextOverlay
            landscapeSrc={imgLandscapeSrc}
            portraitSrc={imgPortraitSrc}
            overlayText={imgOverlayText}
            alt={imgAlt}
          />
        </div>
        <div
          className="overlay_inner_content_container"
        >
          <div
            className="overlay__inner__content"
          >
            {children}
          </div>
        </div>
        <span className="overlay__close" style={{ display: isCloseVisible ? 'block' : 'none' }}>
          <Close onClick={handleClose} />
        </span>
      </div>
    </div>
  )
}
