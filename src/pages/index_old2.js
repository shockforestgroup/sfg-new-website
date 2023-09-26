import React from "react"
import { graphql } from "gatsby"

import ResidencyPage from "../components/residency-page"
import SEO from "../components/Seo"
import { enableBodyScroll } from 'body-scroll-lock';
import 'tachyons';


const About = ({data, location}) => {

  React.useEffect(() => {
    gatsbyEnableBodyScroll();
  }, []);

  const gatsbyEnableBodyScroll = (event) => {
    document.getElementsByTagName("html")[0].style= "";
    enableBodyScroll(document.body);
  };

  return (
    <ResidencyPage
      data={data}
      location={location}
    >
      <SEO title="Home" />
    </ResidencyPage>
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
      filter: { fileAbsolutePath: { regex: "/(works)/" } },
      sort: { fields: [frontmatter___date], order: DESC }
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
        }
      }
    }
  }
`