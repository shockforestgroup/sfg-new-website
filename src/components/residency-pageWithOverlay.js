import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"

import ResidencyPage from "./residency-page"
import Overlay from "./Overlay"

import "./residency-page.css"

const ResidencyPageWithOverlay = ({ data, location, children }) => {
  return (
    <ResidencyPage
      data={data}
      location={location}
    >
      <Overlay>
        <main>{children}</main>
      </Overlay>
    </ResidencyPage>
  )
}

export default ResidencyPageWithOverlay

