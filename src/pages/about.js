import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/LayoutWithOverlay"
import SEO from "../components/Seo"
import { enableBodyScroll } from 'body-scroll-lock';


const About = ({ data }) => {
  const aboutData = {
    title: data.markdownRemark.frontmatter.title,
    html: data.markdownRemark.html,
  }

  React.useEffect(() => {
    gatsbyEnableBodyScroll();
  }, []);

  const gatsbyEnableBodyScroll = (event) => {
    enableBodyScroll(document.body);
    document.getElementsByTagName("html")[0].style = "";
  };

  return (
    <Layout>
      <SEO title="About" />
      <h1 className="headline-1" style = {{marginLeft: "auto", marginRight: "auto"}} >{aboutData.title}</h1>
      <div
        style={{ marginBottom: "100px", maxWidth: "50rem", marginLeft: "auto", marginRight: "auto" }}
        dangerouslySetInnerHTML={{ __html: aboutData.html }}
      />
    </Layout>
  )
}

export default About

export const query = graphql`
  query MyQuery {
    markdownRemark(fields: { slug: { eq: "/pages/about/" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
