import React from "react"

import Layout from "../components/LayoutWithOverlay"
import SEO from "../components/Seo"

import "./essay-or-work-template.css"

const Template = ({ data }) => {
  const article = {
    title: data.markdownRemark.frontmatter.title,
    date: data.markdownRemark.frontmatter.date,
    author: data.markdownRemark.frontmatter.author,
    html: data.markdownRemark.html,
  }
  return (
    <Layout>
      <SEO title={article.title} />
      <h1 className="headline-1">{article.title}</h1>
      <p>
        {article.date}, Author: {article.author}
      </p>
      <div dangerouslySetInnerHTML={{ __html: article.html }} />
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        author
        title
      }
    }
  }
`
