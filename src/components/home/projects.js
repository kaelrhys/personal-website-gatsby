import React from "react"
import styled from "styled-components"
import { Box, Flex } from '@rebass/grid'
import { Link } from 'gatsby'
import Img from "gatsby-image"
import { Text } from "@components/typography"

const ProjectBox = styled(Box)`
  border: 3px solid ${props => props.theme.colors.navy};
  padding: 20px;
`;

const Projects = ({ projects }) => (
    <Box width={1}>
        <Text as="h3" textStyle="h2" mb={16}>01. Projects</Text>
        <Flex mx={-10} width={1}>
            {projects.nodes.map(project => (
                <ProjectBox width={1/3} mx={10}>
                    <Link to={ "/project/" + project.uid } state={{ modal: true }}>
                        <Img fluid={project.data.featured_image.localFile.childImageSharp.fluid} /> 
                        {project.data.title.text}
                    </Link>
                </ProjectBox>
            ))}
        </Flex>
    </Box>
)

export default Projects



