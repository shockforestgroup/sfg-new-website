import React from "react"
import { Link } from "gatsby"

import Layout from "../components/LayoutWithOverlay"
import SEO from "../components/Seo"
import OverlayNav from "../components/OverlayNav"

const CoolEssay = () => (
  <Layout>
    <SEO title="Cool Essay" />
    <OverlayNav />
    <h1>The Cool Essay</h1>
    <p>Welcome to page 2</p>
  </Layout>
)

export default CoolEssay
