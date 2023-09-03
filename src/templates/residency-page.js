import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/LayoutWithOverlay"
import SEO from "../components/Seo"
import { enableBodyScroll } from 'body-scroll-lock';

import "./residency-page.css"

const ResidencyPage = ({ data }) => {
  // const description = (data.description != null ? data.description.html : "no description found");
  const description = data?.description.html
  const essayItems = data?.essays.nodes.map(({ frontmatter, fields }) => ({
    title: frontmatter.title,
    date: frontmatter.date,
    author: frontmatter.author,
    project: frontmatter.project,
    link: fields.slug,
  }))
  const workItems = data?.works.nodes.map(({ frontmatter, fields }) => ({
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
      dangerouslySetInnerHTML={{ __html: description }}
      />
      <h2 className="headline-1">Works</h2>
          <ul className="residency-page__list">
            {workItems.map(el => (
              <li className="residency-page__item">
                  <div className="hide-child">
                    <Link to={el.link}>
                      <Img 
                        fluid={el.coverImage.childImageSharp.fluid}
                        alt="cover img"
                        title="test"
                      />
                    </Link>
                    <p className="child top-0 left-0 right-0 bottom-0 flex items-center justify-center f3 white bg-black-60">
                      {el.title}
                    </p>                    
                  </div>
              </li>
            ))}
          </ul>
    </Layout>
  )
}

export default ResidencyPage
