import React from "react"
import styled from "styled-components"
import { Box, Flex } from '@rebass/grid'
// import { up } from 'styled-breakpoints';
import Image from "@components/image"
import { Text } from "@components/typography"
import { Link } from "gatsby";
import Icon from "@components/icons"
import {useSpring, animated} from 'react-spring'

const FullHeightFlex = styled(Flex)`
  min-height: 100vh;
`

const IntroText = styled(Text)`
  max-width: 640px;
`

const AnimatedText = styled(animated.div)`
  margin-top: 0;
`

const Highlight = styled.mark`
  background: ${props => props.theme.colors.blue};
  color: #fff;
  padding-left: 0.2em;
  padding-right: 0.2em;
  font-style: italic;
`

const IntroImage = styled.div`
  border: 4px solid ${props => props.theme.colors.navy};
  webkit-box-shadow: 20px 20px 0px 0px ${props => props.theme.colors.navy};
  -moz-box-shadow: 20px 20px 0px 0px ${props => props.theme.colors.navy};
  box-shadow: 20px 20px 0px 0px ${props => props.theme.colors.navy};
`

const Hero = () => {
  const textSpringProps = useSpring({delay: 200, opacity: 1, from: {opacity: 0}});

  return (
    <FullHeightFlex width={1} alignItems='center'>
        <Box width={9/12} mx={10}>
            <AnimatedText style={textSpringProps}>
              <Text mb={12} as="h1" textStyle="d2" >Hello, I'm Kael</Text>
              <IntroText>I’m a <Highlight>designer who codes</Highlight>. I’ve been pushing pixels professionally for 9+ years and I endeavour to create simple, unique, high converting user experiences. I take on all sizes of projects, from web design and build, to product, branding and system design. I’ve worked at creative agencies, startups, and large orgs' in the UK, and I’ve been lucky to have worked with some great minds. I’m now on a new path and have taken a jump down under, and I’m hoping to find new exciting opportunities.</IntroText>
              <Text mt={24}><Link to="/#projects">See some projects i've worked on<Icon ml={2} icon={["fas", "arrow-down"]}/></Link></Text>
            </AnimatedText>
        </Box>
        <Box width={3/12} mx={10}>
          <IntroImage>
              <Image />
          </IntroImage>
        </Box>
    </FullHeightFlex>
  )
  

}
export default Hero



