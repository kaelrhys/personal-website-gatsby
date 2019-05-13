import React from "react"
import styled from "styled-components"


const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;  
`;


const Navigation = ({ siteTitle }) => (
  <Nav>
    <ul>
      <li>Nav to go here</li>
    </ul>
  </Nav>
)

export default Navigation
