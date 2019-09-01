import React from "react"
import PropTypes from "prop-types"
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
import Icon from "@components/icons"


const FullHeightFlex = styled(Flex)`
  min-height: 80vh;
`

const ProjectBox = styled(animated(Link))`
  ${space}
  ${layout}
  border: 4px solid ${props => props.theme.colors.navy};
  position: relative;
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
  font-weight: 500;

  ${Icon} {
    align-self: center;
  }

  ${ProjectBox}:hover & {
    opacity: 1;
  }

`;

const Image = styled(Img)`
   width: 100%;
`


const Projects = ({ projects }) => {
    const animateProps = useSpring({delay: 500, from: { opacity: 0 }, to: { opacity: 1 } })
    return (
      <FullHeightFlex id="projects" alignItems="center">
        <Box width={1}>
          <Text  as="h2" textStyle="h2" mb={16}>Projects</Text>
          <Flex flexWrap="wrap" mx={-10}>
              {projects.nodes.map(project => (
                <Box key={project.uid} width={[ 1, 1/2, 1/3 ]} p={10} >
                  <ProjectBox aria-label={`View project for ${project.data.client.text}`} key={project.uid} style={animateProps} to={ "/project/" + project.uid } state={{ modal: true }}>
                      <Image fluid={project.data.featured_image.localFile.childImageSharp.fluid} /> 
                      <ProjectBoxContent px={3} py={3}>
                          <Flex flexDirection="row">
                            <Box flexGrow="1">
                              <Text as="h3" textStyle="h4">{project.data.client.text}</Text>
                              <Text textStyle="xs">{project.data.title.text}</Text>
                            </Box>
                            <Icon ml="auto" icon={["fas", "arrow-right"]} />
                          </Flex>
                      </ProjectBoxContent>
                  </ProjectBox>
                </Box>
              ))}
          </Flex>
        </Box>
      </FullHeightFlex>
    )}

export default Projects

Projects.propTypes = {
  projects: PropTypes.object,
}

Projects.defaultProps = {
  projects: null,
};



