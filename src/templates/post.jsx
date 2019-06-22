import React from "react"
import { graphql } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"
import Img from "gatsby-image"
import ImageRow from "../components/imageRow"


const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost

  return (
    <React.Fragment>
      <SEO title="Post" />
      <Layout>
        <h1>{data.title.text}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
        
        {
          data.body.map((slice, index) => {
            switch (slice.__typename) {
              case ('PrismicPostBodyImageGallery'):
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

export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        content {
          html
        }
        featured_image {
          url
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
        body {
          __typename 
          ... on PrismicPostBodyImageGallery {
            items{
              gallery_image {
                url
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