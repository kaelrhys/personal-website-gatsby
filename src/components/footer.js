import React from "react"
import styled from "styled-components"


const SiteFooter = styled.footer`
    padding: 20px; 
    position: fixed;
    width: 100%;
    bottom: 0;
`;

const Footer = () => (
   <SiteFooter>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </SiteFooter>
)

export default Footer
