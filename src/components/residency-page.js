import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

import "./residency-page.css"

const ResidencyPage = ({ data, location }) => {
  const aboutHtml = data?.about?.html
  const essayItems = data?.essays?.nodes.map(({ frontmatter, fields }) => ({
    title: frontmatter.title,
    date: frontmatter.date,
    author: frontmatter.author,
    project: frontmatter.project,
    link: fields.slug,
  }))
  const workItems = data?.works?.nodes.map(({ frontmatter, fields, html }) => ({
    title: frontmatter.title,
    date: frontmatter.date,
    author: frontmatter.author,
    project: frontmatter.project,
    coverImage: frontmatter.coverImage,
    link: fields.slug,
    html: html,
  }))

  //handling expand collapse and url setting
  const [expandedId, setExpandedId] = useState(null);
  //handling expand collapse and url setting
  const [isExpandedAbout, setIsExpandedAbout] = useState(false);

  useEffect(() => {
    if (location.state && location.state.subPageId) {
      setExpandedId(location.state.subPageId);
    }
  }, [location]);

  const handleLinkClick = (id) => {
    if (expandedId === id) {
      // Collapse the expanded section if it's already expanded
      setExpandedId(null);
    } else {
      // Otherwise, expand this section
      setExpandedId(id);
    }
  };
  const handleAboutClick = (isExpanded) => {
    if (isExpanded) {
      // Collapse the expanded section if it's already expanded
      setIsExpandedAbout(false);
    } else {
      // Otherwise, expand this section
      setIsExpandedAbout(true);
    }
  };

  // const handleLinkClick = (id) => {
  //   setExpandedId(id);
  // navigate(`/dynamic/${id}`, {
  //   state: { subPageId: id },
  // });
  // };

  return (
    <div className="residency-page">
      <SEO title="Research Location" />
      {/* <Link>
        <div className="residency-page__heading">
          SHOCK FOREST GROUP
        </div>
      </Link> */}
      <div
        className="residency-page__heading"
      >
        <div
          role="button"
          tabIndex={0}
          onClick={() => handleAboutClick(isExpandedAbout)}
          onKeyDown={(e) => e.key === 'Enter' && handleAboutClick(isExpandedAbout)}
          style={{ cursor: "pointer" }}
          className={isExpandedAbout ? "residency-page__heading-button" : ""}
        >
          SHOCK FOREST GROUP
        </div>
        {/* {isExpandedAbout && <div className="residency-page__about">is a decentralized collective consisting of artists,</div>} */}
        {isExpandedAbout && <div className="residency-page__about" dangerouslySetInnerHTML={{ __html: aboutHtml }} />}
        {/* <div className="residency-page__item" dangerouslySetInnerHTML={{ __html: about.html }} /> */}
      </div>
      <div className="residency-page__list">
        <ul className="residency-page__list">
          {workItems.map((el, index) => (
            <li className="residency-page__item" key={index}>
              <div
                role="button"
                tabIndex={0}
                onClick={() => handleLinkClick(index)}
                onKeyDown={(e) => e.key === 'Enter' && handleLinkClick(index)}
                style={{ cursor: "pointer" }}
              >
                <div className="residency-page__item__button top-0 left-0 right-0 bottom-0 justify-left white">
                  <div className="pr2">
                    {String(workItems.length - index).padStart(2, '0')}.
                  </div>
                  <div>
                    {el.title}
                  </div>
                </div>
              </div>
              {/* <a
              href={`/dynamic/${index}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(index);
              }}>
              <p className="top-0 left-0 right-0 bottom-0 items-center justify-left white">
                {String(workItems.length - index).padStart(2, '0')}. {el.title}
              </p>
            </a> */}
              {/* <Link
              to={`/${index}`}
              state={{ subPageId: index }}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(index);
              }}
            > */}

              {/* </Link> */}
              {expandedId === index && <div className="residency-page__content" dangerouslySetInnerHTML={{ __html: el.html }} />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ResidencyPage

