import React from "react"
import { graphql } from "gatsby"

import ResidencyPageWithOverlay from "../components/residency-pageWithOverlay"
import ResidencyPage from "../components/residency-page"
import SEO from "../components/Seo"
import ImageWithTextOverlay from "../components/ImageWithTextOverlay"
import Overlay from "../components/Overlay"
import { enableBodyScroll } from 'body-scroll-lock';
import 'tachyons';


const Announcement = ({ data, location }) => {

  let text = "";

  React.useEffect(() => {
    gatsbyEnableBodyScroll();
  }, []);

  const gatsbyEnableBodyScroll = (event) => {
    document.getElementsByTagName("html")[0].style = "";
    enableBodyScroll(document.body);
  };

  return (
    <>
      <SEO />
      <ResidencyPage
        data={data}
        location={location}
      >
      </ResidencyPage>

      {/* <ResidencyPageWithOverlay
        data={data}
        location={location}
        imgLandscapeSrc={"/assets/Desktop_CosmicRadioWorkshop.svg"}
        imgPortraitSrc={"/assets/Mobile_CosmicRadioWorkshop.svg"}
        imgOverlayText={text}
        imgAlt={"SFG announcement"}
      >

        <h2>
          {data?.announcement?.frontmatter.title}
        </h2>
        {<div dangerouslySetInnerHTML={{ __html: data?.announcement?.html }} />}

      </ResidencyPageWithOverlay> */}
    </>
  )
}

export default Announcement

export const query = graphql`
  query PageQueryAllActivities2 {
    about: markdownRemark(fields: { slug: { eq: "/pages/about/" } }) {
      html
      frontmatter {
        title
      }
    }
    announcement: markdownRemark(fields: { slug: { eq: "/pages/announcement/" } }) {
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