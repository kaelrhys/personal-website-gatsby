import React from "react"
import Layout from "@components/layout"
import Image from "@components/image"
import SEO from "@components/seo"
import styled from "styled-components"
import { up } from 'styled-breakpoints';
import ButtonLink from "@components/Button";

const Heading = styled.h1`
  font-size: 100px;
  
`;

const HeadingHide = styled.span`
  display: none;
  ${up('md')} {
    display: inline;
  }
`;


const Section = styled.section`
  width: 100%;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  ${up('md')} {
    padding: 0 100px;
  }
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
  padding-right: 50px;

  ${up('md')} {
    width: 600px;
    padding-right: 100px;
  }
`;

const IntroText = styled.p`
  max-width: 640px;
  margin: 20px 0 25px;
`;

const Highlight = styled.mark`
  background: ${props => props.theme.colors.blue};
  color: #fff;
  padding-left: 0.2em;
  padding-right: 0.2em;
  font-style: italic;
`;

const IntroImageContainer = styled.div`
  display: none;
  ${up('sm')} {
    display: block;
    flex; 1;
    width: 100px;
  }
  ${up('md')} {
    display: block;
    flex; 1;
    width: 150px;
  }
  ${up('lg')} {
    width: 200px;
  }
  ${up('xl')} {
    width: 250px;
  }
`;


const IntroImage = styled.div`
  margin-top: 40px;
  border: 4px solid ${props => props.theme.colors.navy};
  webkit-box-shadow: 20px 20px 0px 0px ${props => props.theme.colors.navy};
  -moz-box-shadow: 20px 20px 0px 0px ${props => props.theme.colors.navy};
  box-shadow: 20px 20px 0px 0px ${props => props.theme.colors.navy};
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Section>
      <Container>
        <IntroContainer>
          <Intro>
            <span>Hello I'm,</span>
            <Heading>Kael <HeadingHide>Rhys</HeadingHide></Heading>
            <IntroText>I’m a <Highlight>designer who codes</Highlight>. I’ve been pushing pixels professionally for 9+ years and I endeavour to create simple, unique, high converting user experiences. I take on all sizes of projects, from web design and build, to product, branding and system design. I’ve worked at creative agencies, startups, and large orgs' in the UK, and I’ve been lucky to have worked with some great minds. I’m now on a new path and have taken a jump down under, and I’m hoping to find new exciting opportunities.</IntroText>
            <ButtonLink href="https://kaelrhys.typeform.com/to/QhEZYl">Get in touch</ButtonLink>
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
