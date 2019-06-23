import React from "react"
import { graphql } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"
import styled from "styled-components"

import Hero from "@components/home/hero"
import Projects from "@components/home/projects"
import Contact from "@components/home/contact"


import { Box, Flex } from '@rebass/grid'

const Container = styled(Box)`
  max-width: 1100px;
`
Container.defaultProps = {
  mx: 'auto'
}


const IndexPage = ({ data: { projects } }) => {

  return (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Flex>
      <Container>
        <Hero />
        <Projects projects={projects} />
        <Contact />
      </Container>
    </Flex>
  </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query { 
    projects: allPrismicProject {
      nodes {
        id
        uid
        data {
          title {
            html
            text
          }
          featured_image {
            alt
            localFile {
              childImageSharp {
                fluid {
                  tracedSVG
                  aspectRatio
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`