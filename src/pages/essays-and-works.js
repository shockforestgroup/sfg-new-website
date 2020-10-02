import React from "react"
import { Link } from "gatsby"

import Layout from "../components/LayoutWithOverlay"
import SEO from "../components/Seo"

import "./essays-and-works.css"

const essayItems = [
  {
    title: "Cool Essay",
    link: "/cool-essay",
  },
  {
    title: "Cool Essay",
    link: "/cool-essay",
  },
  {
    title: "Cool Essay",
    link: "/cool-essay",
  },
  {
    title: "Cool Essay",
    link: "/cool-essay",
  },
  {
    title: "Cool Essay",
    link: "/cool-essay",
  },
]

const workItems = [
  {
    title: "Cool Work",
    link: "/cool-work",
  },
  {
    title: "Cool Work",
    link: "/cool-work",
  },
  {
    title: "Cool Work",
    link: "/cool-work",
  },
  {
    title: "Cool Work",
    link: "/cool-work",
  },
  {
    title: "Cool Work",
    link: "/cool-work",
  },
]

const EssaysAndWorks = () => (
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

export default EssaysAndWorks
