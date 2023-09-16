import React from "react"
import { graphql } from "gatsby"

import ResidencyPageWithOverlay from "../components/residency-pageWithOverlay"
import SEO from "../components/Seo"
import Overlay from "../components/Overlay"
import { enableBodyScroll } from 'body-scroll-lock';
import 'tachyons';


const Announcement = ({ data, location }) => {

  React.useEffect(() => {
    gatsbyEnableBodyScroll();
  }, []);

  const gatsbyEnableBodyScroll = (event) => {
    document.getElementsByTagName("html")[0].style = "";
    enableBodyScroll(document.body);
  };

  return (
    <ResidencyPageWithOverlay
      data={data}
      location={location}
    >
      <SEO title="Announcement" />
      Non esse alias id dolor sequi. Enim officiis aperiam consequatur. Ex numquam nihil reprehenderit. Quibusdam illum accusantium debitis ea dignissimos omnis magnam. Quia dolore neque facere et. Iure tenetur beatae facilis qui facilis quo neque.

      Esse possimus est labore reiciendis earum et nobis dicta. Consequatur et eligendi ratione. Et voluptas harum ut officiis consequatur. Assumenda incidunt quod recusandae nemo impedit sed quasi sit. Quae et odit repellendus libero. Est sed rerum quidem minus qui laboriosam mollitia.

      Consectetur aut aperiam repellat voluptatum sed velit nesciunt. Aut est possimus quia. Error qui et placeat sed id id nam. Voluptatem voluptatem velit odio possimus. Dolor laboriosam fugiat et est adipisci dolorem necessitatibus et. Omnis ut ipsa velit harum eaque exercitationem.

      Perferendis voluptatum praesentium doloremque qui dicta. Soluta quod sunt temporibus eos et qui quae. Dolor tempore veritatis iure velit enim. Dolore dolore officia est. Quia ab recusandae reiciendis.

      Nihil quo qui necessitatibus est aut quia maiores. Officia iusto harum ex. Minus temporibus porro porro qui nihil non rerum quis. Ad molestias eos quia omnis molestiae sunt id necessitatibus.

    </ResidencyPageWithOverlay>
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