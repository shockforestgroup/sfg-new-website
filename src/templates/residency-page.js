import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { enableBodyScroll } from 'body-scroll-lock';

import "./residency-page.css"

const ResidencyPage = ({ data }) => {
  const description = data?.description?.html
  const essayItems = data?.essays?.nodes.map(({ frontmatter, fields }) => ({
    title: frontmatter.title,
    date: frontmatter.date,
    author: frontmatter.author,
    project: frontmatter.project,
    link: fields.slug,
  }))
  const workItems = data?.works?.nodes.map(({ frontmatter, fields }) => ({
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
      <div className="residency-page">
        <SEO title="Research Location" />
        <Link>
          <div className="residency-page__heading">
            SHOCK FOREST GROUP
          </div>
        </Link>
        <ul className="residency-page__list">
          {workItems.map((el, index) => (
            <li className="residency-page__item" key={index}>
              <Link to={el.link}>
                {/* <Img 
                        fluid={el.coverImage.childImageSharp.fluid}
                        alt="cover img"
                        title="test"
                      /> */}
                <p className="top-0 left-0 right-0 bottom-0 items-center justify-left white">
                  {String(workItems.length - index).padStart(2, '0')}. {el.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </Layout>
  )
}

export default ResidencyPage
