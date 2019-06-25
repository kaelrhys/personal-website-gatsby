import React from "react"
import { Link } from "gatsby"
import Layout from "@components/layouts/layout"
import SEO from "@components/seo"
import styled from "styled-components"
import { Flex, Box } from '@rebass/grid'

const ProjectSection = styled.article`
  max-width: 1024px;
  margin: 0 auto;
`;


const ProjectContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;


const ProejectGallery = styled.div`
  width:100%;
  line-height: 0px;
`;


const ProejectGalleryImage = styled.img`
  width: 100%;
`


const LibertyMarketingProject = () => (
  <Layout>

    <ProjectSection>
      <SEO title="Page two" />
      <ProjectContent>

        <h1>WEBSITE DESIGN, BUILD &amp; DIGITAL STRATERGY</h1>
        <p>CafeX is a SaaS startup who specialise in WebRTC solutions. At CafeX I led the design and development of their public-facing websites, creating a strategy to consolidate multiple sites, implement CMS, refine the brand identity and enforce the importance of clear UI/UX design processes within the organisation.</p>

        <Flex>
          <Box width={1/3} px={2} py={2}>
            <h2>Involvement</h2>
            <ul>
              <li>Test test</li>
              <li>Test test</li>
              <li>Test test</li>
              <li>Test test</li>
            </ul>
          </Box>
          <Box width={1/3} px={2} py={2}>
            <h2>Involvement</h2>
            <ul>
              <li>Test test</li>
              <li>Test test</li>
              <li>Test test</li>
              <li>Test test</li>
            </ul>
          </Box>
          <Box width={1/3} px={2} py={2}>
            <h2>Involvement</h2>
            <ul>
              <li>Test test</li>
              <li>Test test</li>
              <li>Test test</li>
              <li>Test test</li>
            </ul>
          </Box>
        </Flex>

      </ProjectContent>
      
      <ProejectGallery>
        <Flex py={2}>
          <Box width={1} px={2}>
            <ProejectGalleryImage  src="https://source.unsplash.com/random/1200x400" />
          </Box>
        </Flex>
        <Flex py={2}>
          <Box width={1/2} px={2}>
            <ProejectGalleryImage src="https://source.unsplash.com/random/600x400" />
          </Box>
          <Box width={1/2} px={2}>
            <ProejectGalleryImage src="https://source.unsplash.com/random/600x400" />
          </Box>
        </Flex>
      </ProejectGallery>

    </ProjectSection>

  </Layout>
)

export default LibertyMarketingProject
