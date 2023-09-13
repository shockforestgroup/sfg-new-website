import React from "react"
import { graphql } from "gatsby"

import ResidencyPage from "../components/residency-page"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { disableBodyScroll } from 'body-scroll-lock';
import 'tachyons';


const About = ({data, location}) => {

  React.useEffect(() => {
    gatsbyDisableBodyScroll();
  }, []);

  const gatsbyDisableBodyScroll = (event) => {
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
    disableBodyScroll(document.body);
  };

  return (
    <ResidencyPage
      data={data}
      location={location}
    >
      <SEO title="Home" />
    </ResidencyPage>

    // <Layout
    //   showNavBar={false}>
    //   
    // </Layout>
  )
}

export default About

export const query = graphql`
  query PageQueryAllActivities {
    about: markdownRemark(fields: { slug: { eq: "/pages/about/" } }) {
      html
      frontmatter {
        title
      }
    }
    works: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(works)/" } }
    ) {
      nodes {
        fields {
          slug
        }
        id
        html
        frontmatter {
          title
          date
          author
          project
          coverImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`