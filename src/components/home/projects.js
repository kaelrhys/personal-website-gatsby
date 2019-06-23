import React from "react"
import styled from "styled-components"
import { Box, Flex } from '@rebass/grid'
import { Link } from 'gatsby'
import Img from "gatsby-image"

const ProjectBox = styled(Box)`
  border: 3px solid ${props => props.theme.colors.navy};
  padding: 20px;
`;



const Projects = ({ projects }) => (
    <div>
        <Flex>
            <Box my="10px"><h2>01. Projects</h2></Box>
        </Flex>
        <Flex mx={-10}>
            {projects.nodes.map(project => (
                <ProjectBox width={1/3} mx={10}>
                    <Link to={ "/project/" + project.uid } state={{ modal: true }}>
                        <Img fluid={project.data.featured_image.localFile.childImageSharp.fluid} /> 
                        {project.data.title.text}
                    </Link>
                </ProjectBox>
            ))}
        </Flex>
    </div>
)

export default Projects



