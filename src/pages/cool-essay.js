import React from "react"
import { Link } from "gatsby"

import Layout from "../components/LayoutWithOverlay"
import SEO from "../components/Seo"

const CoolEssay = () => (
  <Layout>
    <SEO title="Cool Essay" />
    <h1>The Cool Essay</h1>
    <p>Welcome to page 2</p>
    <Link to="/" state={{ fromSubpage: true }}>
      Go back to the homepage
    </Link>
  </Layout>
)

export default CoolEssay
