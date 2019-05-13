import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import { up } from 'styled-breakpoints';
import theme from "../styles/theme";
const { colors, fonts } = theme;


const Heading = styled.h1`
  font-size: 100px;
  line-height: 120px;
`;

const Section = styled.section`
  width: 100%;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const IntroContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
`;

const Intro = styled.div`
  flex: 1;
  width: 100%;
  ${up('md')} {
    width: 600px;
  }
`;

const IntroText = styled.p`
  max-width: 700px;
`;

const Highlight = styled.span`
  background: ${colors.blue};
  display: inline-block;
  color: #fff;
  padding: 0px 5px;
`;

const IntroImageContainer = styled.div`
  flex; 1;
  width: 300px;
`;

const IntroImage = styled.div`
  border: 4px solid ${colors.navy};
  webkit-box-shadow: 20px 20px 0px 0px ${colors.navy};
  -moz-box-shadow: 20px 20px 0px 0px ${colors.navy};
  box-shadow: 20px 20px 0px 0px ${colors.navy};
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Section>
      <Container>
        <IntroContainer>
          <Intro>
            <span>Hello I'm,</span>
            <Heading>Kael Rhys</Heading>
            <IntroText>I’m a <Highlight>designer who codes</Highlight>. I’ve been pushing pixels professionally for 9+ years and I endeavour to create simple, unique, high converting user experiences. I take on all sizes of projects, from web design and build, to product, branding and system design. I’ve worked at creative agencies, startups, and large orgs' in the UK, and I’ve been lucky to have worked with some great minds. I’m now on a new path and have taken a jump down under, and I’m hoping to find new exciting opportunities.</IntroText>
          </Intro>
          <IntroImageContainer>
            <IntroImage>
              <Image />
            </IntroImage>
          </IntroImageContainer>
        </IntroContainer>
      </Container>
    </Section>

    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
