import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Overlay from "../components/Overlay"
import SEO from "../components/Seo"
import OverlayNav from "../components/OverlayNav"

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showOverlay: false,
    }
  }
  render() {
    const fromSubpage = this.props.location?.state?.fromSubpage || null

    console.log(this.props.location)

    return (
      <Layout onLogoClick={() => this.setState({ showOverlay: true })}>
        <SEO title="Home" />

        {(this.state.showOverlay || fromSubpage) && (
          <Overlay onClose={() => this.setState({ showOverlay: false })}>
            <OverlayNav
              items={[
                { title: "Essays/Works", link: "/" },
                { title: "About", link: "/about" },
              ]}
            />
            <p>Essays and Works....</p>
          </Overlay>
        )}
      </Layout>
    )
  }
}
