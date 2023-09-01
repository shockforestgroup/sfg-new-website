import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/LayoutWithOverlay"
import SEO from "../components/Seo"
import { enableBodyScroll } from 'body-scroll-lock';

import "./residency-page.css"

const ResidencyPage = ({ data }) => {
  const description = data.description.html
  const essayItems = data.essays.nodes.map(({ frontmatter, fields }) => ({
    title: frontmatter.title,
    date: frontmatter.date,
    author: frontmatter.author,
    project: frontmatter.project,
    link: fields.slug,
  }))
  const workItems = data.works.nodes.map(({ frontmatter, fields }) => ({
    title: frontmatter.title,
    date: frontmatter.date,
    author: frontmatter.author,
    project: frontmatter.project,
    coverImage: frontmatter.coverImage,
    link: fields.slug,
  }))

  React.useEffect(() => {
    gatsbyEnableBodyScroll();
  }, []);

  const gatsbyEnableBodyScroll = (event) => {
    enableBodyScroll(document.body);
    document.getElementsByTagName("html")[0].style = "";
  };

  return (
    <Layout>
      <SEO title="Research Location" />
      <div
      style={{ marginBottom: "100px" }}
      dangerouslySetInnerHTML={{ __html: data.description.html }}
      />
      <div className="residency-page">
        <section className="residency-page__section">
          <h2 className="headline-1">Essays</h2>
          <ul className="residency-page__list">
            {essayItems.map(el => (
              <li className="residency-page__item">
                <Link className="residency-page__item__link" to={el.link}>
                  {el.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="residency-page__section">
          <h2 className="headline-1">Works</h2>
          <ul className="residency-page__list">
            {workItems.map(el => (
              <li className="residency-page__item">
                <Link className="residency-page__item__link" to={el.link}>
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

export default ResidencyPage
