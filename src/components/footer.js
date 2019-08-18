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
    width: 100%;
    bottom: 0;
    background: ${props => props.theme.colors.navy};
    color: white;
`;

const Footer = () => (
   <SiteFooter>
     <Container>
       <Text p={2} textStyle="xs">
        <a href="https://github.com/kaelrhys/personal-website-gatsby">Designed &amp; built by me.</a>
       </Text>
     </Container>
  </SiteFooter>
)

export default Footer
