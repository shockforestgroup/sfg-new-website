import React from "react"
import { Link } from "gatsby"

import Layout from "../components/LayoutWithOverlay"
import SEO from "../components/Seo"
import OverlayNav from "../components/OverlayNav"

const EssaysAndWorks = () => (
  <Layout>
    <SEO title="Cool Essay" />
    <OverlayNav />
    Essays and Works!!!
    <Link to="/cool-essay">Cool Essay</Link>
  </Layout>
)

export default EssaysAndWorks
