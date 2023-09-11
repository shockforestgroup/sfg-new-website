import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import ResidencyPage from "../templates/residency-page"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { disableBodyScroll } from 'body-scroll-lock';
import 'tachyons';


const About = ({data}) => {

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