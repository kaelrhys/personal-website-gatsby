import React from "react"
import styled from "styled-components"
import { Box } from '@rebass/grid'
import { Text } from "@components/typography"

const Container = styled(Box)`
  max-width: 1100px;
`
Container.defaultProps = {
  mx: 'auto'
}

const SiteFooter = styled.footer`
    padding: 20px; 
    width: 100%;
    bottom: 0;
    background: ${props => props.theme.colors.navy};
    color: white;
`;

const Footer = () => (
   <SiteFooter>
     <Container>
       <Text textStyle="xs">
        &copy; {new Date().getFullYear()}, Designed &amp; built by me using  {` `}<a href="https://www.gatsbyjs.org">Gatsby</a>
       </Text>
     </Container>

  </SiteFooter>
)

export default Footer
