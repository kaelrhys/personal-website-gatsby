import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Box, Flex } from '@rebass/grid'
import { up } from 'styled-breakpoints';
import Image from "@components/image"
import { Text } from "@components/typography"
import { Link } from "gatsby";
import Icon from "@components/icons"
import {useSpring, animated} from 'react-spring'

const FullHeightFlex = styled(Flex)`

  ${up('tablet')} {
    min-height: 80vh;
    padding-bottom: 10vh;
    padding-top: 10vh;
  }
`

const IntroText = styled(Text)`
  max-width: 640px;
`

const AnimatedText = styled(animated.div)`
  margin-top: 0;
`

const IntroFlex = styled(Flex)`
  flex-direction: column-reverse;
  ${up('desktop')} {
    flex-direction: row;
  }
`

const IntroImage = styled.div`
  border: 4px solid ${props => props.theme.colors.navy};
  box-shadow: 10px 10px 0px 0px ${props => props.theme.colors.navy};
  margin-bottom: 48px;
  max-width: 100px;
  ${up('tablet')} {
    max-width: 100%;
  }
`

const IntroImageCol = styled(Box)`
  display: block;

`
const Break = styled.br`
  @media (min-width: 460px) {
    display: none;
  }
`


const Hero = ({intro}) => {
  const textSpringProps = useSpring({delay: 0, opacity: 1, from: {opacity: 0}});

  return (
    <FullHeightFlex width={1} pt={[4]} pb={[6,6,0]} alignItems='center'>
      <IntroFlex width={1} flexWrap="wrap" mx={-10}>
        <Box width={[ 1, 1, 9/12 ]} px={10} >
            <AnimatedText style={textSpringProps}>
              <Text mb={12} as="h1" textStyle="h1" >Hello,<Break /> I&apos;m Kael –</Text>
              <IntroText textStyle="body" dangerouslySetInnerHTML={{ __html: intro.html }} />
              <Text mt={24}>
                <Link aria-label="View projects" to="/#projects">View projects <Icon ml={2} icon={['fas', 'arrow-down']}/></Link>
              </Text>
            </AnimatedText>
        </Box>
        <IntroImageCol width={[1, 3/12]} px={10}>
          <IntroImage>
              <Image />
          </IntroImage>
        </IntroImageCol>
      </IntroFlex>
    </FullHeightFlex>
  )
  

}
export default Hero

Hero.propTypes = {
  intro: PropTypes.object,
}

Hero.defaultProps = {
  intro: null,
};

