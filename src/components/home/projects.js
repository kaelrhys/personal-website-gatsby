import React from "react"
import styled from "styled-components"
import { Box, Flex } from '@rebass/grid'
import { Link } from 'gatsby'
import Img from "gatsby-image"
import { Text } from "@components/typography"
import {useSpring, animated} from 'react-spring'
import {
    space,
    layout,
  } from 'styled-system'

const FullHeightFlex = styled(Flex)`
  min-height: 80vh;
`

const ProjectBox = styled(animated(Link))`
  ${space}
  ${layout}
  border: 4px solid ${props => props.theme.colors.navy};
  position: relative;
  display: flex;
  display: block;
`;

const ProjectBoxContent = styled(Box)`
  position: absolute;
  bottom: 0px;
  left: 0px;
  background: ${props => props.theme.colors.navy};
  color: #fff;
  width: 100%;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  ${ProjectBox}:hover & {
    opacity: 1;
   }
`;

const Projects = ({ projects }) => {
    const animateProps = useSpring({delay: 500, from: { opacity: 0 }, to: { opacity: 1 } })
    return (
        <FullHeightFlex width={1} id="projects" alignItems='center'>
        <Box width={1}>
            <Text as="h3" textStyle="h2" mb={16}>01. Projects</Text>
            <Flex  width={1}>
                {projects.nodes.map(project => (
                    <ProjectBox key={project.uid} width={1/3} mx={10} style={animateProps} to={ "/project/" + project.uid } state={{ modal: true }}>
                        <Img fluid={project.data.featured_image.localFile.childImageSharp.fluid} /> 
                        <ProjectBoxContent px={3} py={2}>
                            <Text as="h3" textStyle="h4">GoCompare</Text>
                            <Text textStyle="xs">{project.data.title.text}</Text>
                        </ProjectBoxContent>
                    </ProjectBox>
                ))}
            </Flex>
        </Box>
        </FullHeightFlex>
    )}

export default Projects



