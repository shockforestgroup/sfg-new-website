import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/LayoutWithOverlay"
import SEO from "../components/Seo"

import "./essays-and-works.css"

const EssaysAndWorks = ({ data }) => {
  const essayItems = data.essays.nodes.map(({ frontmatter, fields }) => ({
    title: frontmatter.title,
    date: frontmatter.date,
    author: frontmatter.author,
    link: fields.slug,
  }))
  const workItems = data.works.nodes.map(({ frontmatter, fields }) => ({
    title: frontmatter.title,
    date: frontmatter.date,
    author: frontmatter.author,
    link: fields.slug,
  }))

  return (
    <Layout>
      <SEO title="Essays & Works" />
      <div className="essays-and-works">
        <section className="essays-and-works__section">
          <h2 className="headline-1">Essays</h2>
          <ul className="essays-and-works__list">
            {essayItems.map(el => (
              <li className="essays-and-works__item">
                <Link className="essays-and-works__item__link" to={el.link}>
                  {el.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="essays-and-works__section">
          <h2 className="headline-1">Works</h2>
          <ul className="essays-and-works__list">
            {workItems.map(el => (
              <li className="essays-and-works__item">
                <Link className="essays-and-works__item__link" to={el.link}>
                  {el.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
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
        fields {
          slug
        }
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
        fields {
          slug
        }
        frontmatter {
          title
          date
          author
        }
      }
    }
  }
`
