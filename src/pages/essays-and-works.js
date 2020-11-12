import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/LayoutWithOverlay"
import SEO from "../components/Seo"

import "./essays-and-works.css"

const EssaysAndWorks = ({ data }) => {
  const essayItems = data.essays.nodes.map(({ frontmatter }) => ({
    title: frontmatter.title,
    date: frontmatter.date,
    author: frontmatter.author,
    link: "",
  }))
  const workItems = data.works.nodes.map(({ frontmatter }) => ({
    title: frontmatter.title,
    date: frontmatter.date,
    author: frontmatter.author,
    link: "",
  }))
  return (
    <Layout>
      <SEO title="Essays & Works" />
      <div style={{ display: "flex" }}>
        <div style={{ flexGrow: 1 }}>
          <h2 className="headline-2">Essays</h2>
          <ul className="foobar">
            {essayItems.map(el => (
              <li className="essays-and-works__item">
                <Link className="essays-and-works__item__link" to={el.link}>
                  {el.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flexGrow: 1 }}>
          <h2 className="headline-2">Works</h2>
          <ul className="foobar">
            {workItems.map(el => (
              <li className="essays-and-works__item">
                <Link className="essays-and-works__item__link" to={el.link}>
                  {el.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default EssaysAndWorks

export const query = graphql`
  query PageQuery {
    essays: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(essays)/" } }
    ) {
      nodes {
        frontmatter {
          title
          date
          author
        }
      }
    }
    works: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(works)/" } }
    ) {
      nodes {
        frontmatter {
          title
          date
          author
        }
      }
    }
  }
`
