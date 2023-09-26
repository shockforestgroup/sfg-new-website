import React from "react"
import { Link, navigate } from "gatsby"

import ResidencyPage from "./residency-page"
import Overlay from "./Overlay"

import "./residency-page.css"

const ResidencyPageWithOverlay = ({ data, location, children, imgSrc, imgOverlayText, imgAlt  }) => {
  return (
    <ResidencyPage
      data={data}
      location={location}
    >
      {}
      <Overlay
        imgSrc={imgSrc} 
        imgOverlayText={imgOverlayText}
        imgAlt={imgAlt} 
      >
        <main>{children}</main>
      </Overlay>
    </ResidencyPage>
  )
}

export default ResidencyPageWithOverlay

