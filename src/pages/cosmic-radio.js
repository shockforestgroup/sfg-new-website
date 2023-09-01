import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

// Import the ResidencyPage component
import ResidencyPage from "./residency-page"

const CosmicRadio = ({data}) => {
    return (
        <ResidencyPage 
            data={data}
        />
    );
}

export default CosmicRadio;

export const query = graphql`
  query PageQueryCosmicRadio {
    description: markdownRemark(fields: { slug: { eq: "/pages/cosmicRadio/" } }) {
      html
      frontmatter {
        title
      }
    }
    essays: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(essays)/" }, frontmatter: { project: { eq: "cosmic radio" } } }
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
      filter: { fileAbsolutePath: { regex: "/(works)/" }, frontmatter: { project: { eq: "cosmic radio" } } }
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
