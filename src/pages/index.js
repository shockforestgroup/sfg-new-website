import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { disableBodyScroll } from 'body-scroll-lock';
import 'tachyons';


const About = () => {

  React.useEffect(() => {
    gatsbyDisableBodyScroll();
  }, []);

  const gatsbyDisableBodyScroll = (event) => {
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
    disableBodyScroll(document.body);
  };

  return (
    <Layout>
      <SEO title="Home" />
    </Layout>
  )
}

export default About