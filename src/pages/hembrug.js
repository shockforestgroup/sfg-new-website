import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

// Import the ResidencyPage component
import ResidencyPage from "./residency-page"

const Hembrug = ({data}) => {
    return (
        <ResidencyPage 
            data={data}
        />
    );
}

export default Hembrug;

export const query = graphql`
  query PageQueryHembrug {
    essays: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(essays)/" }, frontmatter: { project: { eq: "hembrug" } } }
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
        }
      }
    }
    works: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(works)/" }, frontmatter: { project: { eq: "hembrug" } } }
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