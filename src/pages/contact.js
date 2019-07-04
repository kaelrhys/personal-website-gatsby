import React from "react"
import SEO from "@components/seo"
import styled from "styled-components"

import Layout from "@components/layouts/layout"


const TypeformIframe = styled.iframe`
  display: block;
  width: 100%;
  border: none;         /* Reset default border */
  height: 100vh;        /* Viewport-relative units */
  width: 100%;
`;


const ContactForm = () => (
  <Layout>
    <SEO title="Contact" />
    <TypeformIframe id="typeform-full" frameborder="0" src="https://kaelrhys.typeform.com/to/QhEZYl"></TypeformIframe> 
    <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script>
  </Layout>
)

export default ContactForm
