import React from "react"
import { graphql } from "gatsby"
import Layout from "@components/layouts/layout"
import SEO from "@components/seo"
import Hero from "@components/home/hero"
import Projects from "@components/home/projects"
import Contact from "@components/home/contact"


const IndexPage = ({ data: { projects, homeContent } }) => {

  return (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero title={homeContent.data.intro_title} intro={homeContent.data.intro} />
    <Projects projects={projects} />
    <Contact title={homeContent.data.contact_title} content={homeContent.data.contact_text} />
  </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query { 
    homeContent: prismicHomepage {
      data {
        intro {
          html
          text
        }
        intro_title {
          html
          text
        }
        contact_text {
          html
          text
        }
        contact_title {
          html
          text
        }
      }
    }
    projects: allPrismicProject {
      nodes {
        id
        uid
        data {
          title {
            html
            text
          }
          client {
            html
            text
          }
          featured_image {
            alt
            localFile {
              childImageSharp {
                fluid(maxWidth: 800, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`