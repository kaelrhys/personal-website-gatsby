import React from "react"
import { graphql } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"
import Img from "gatsby-image"
import ImageRow from "../components/imageRow"


const Project = ({ data: { prismicProject } }) => {
  const { data } = prismicProject

  return (
    <React.Fragment>
      <SEO title="Post" />
      <Layout>
        <h1>{data.title.text}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.intro.html }} />
        
        {
          data.body.map((slice, index) => {
            switch (slice.__typename) {
              case ('PrismicProjectBodyImageGallery'):
                return <ImageRow images={slice.items} />

              default:
                return null;
            }
          })

        }

      
      
      </Layout>
    </React.Fragment>
  )
}

export default Project

export const pageQuery = graphql`
  query ProjectBySlug($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        intro {
          html
          text
        }
        body {
          __typename 
          ... on PrismicProjectBodyImageGallery {
            items{
              row_image {
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
    }
  }
  `