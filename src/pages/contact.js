import React from "react"
import { Link } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"
import styled from "styled-components"

const TypeformIframe = styled.iframe`
  display: block;
  width: 100%;
  border: none;         /* Reset default border */
  height: 100vh;        /* Viewport-relative units */
  width: 100vw;
`;


const ContactForm = () => (
  <Layout>
    <SEO title="Contact" />
    <TypeformIframe id="typeform-full" width="100%" height="800" frameborder="0" src="https://kaelrhys.typeform.com/to/QhEZYl"></TypeformIframe> 
    <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script>
  </Layout>
)

export default ContactForm