import React from "react"
import styled from "styled-components"
import { Box, Flex } from '@rebass/grid'
import { Link } from 'gatsby'
import Img from "gatsby-image"
import { Text } from "@components/typography"

const ProjectBox = styled(Box)`
  border: 4px solid ${props => props.theme.colors.navy};
  position: relative;
`;

const ProjectBoxTitle = styled(Box)`
  position: absolute;
  bottom: 0px;
  left: 0px;
  background: ${props => props.theme.colors.navy};
  color: #fff;
  display: block;
  width: 100%;
`;

const Projects = ({ projects }) => (
    <Box width={1}>
        <Text as="h3" textStyle="h2" mb={16}>01. Projects</Text>
        <Flex mx={-10} width={1}>
            {projects.nodes.map(project => (
                <ProjectBox width={1/3} mx={10}>
                    <Link to={ "/project/" + project.uid } state={{ modal: true }}>
                        <Img fluid={project.data.featured_image.localFile.childImageSharp.fluid} /> 
                        <ProjectBoxTitle px={3} py={2}>
                            <Text as="h3" textStyle="h4">GoCompare</Text>
                            <Text textStyle="xs">{project.data.title.text}</Text>
                        </ProjectBoxTitle>
                    </Link>
                </ProjectBox>
            ))}
        </Flex>
    </Box>
)

export default Projects



