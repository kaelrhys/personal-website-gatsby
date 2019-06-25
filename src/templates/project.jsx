import React from "react"
import { graphql } from "gatsby"
import ConditionalLayout from "@components/layouts/modalLayout"
import SEO from "@components/seo"
import ImageRow from "../components/imageRow"
import styled from "styled-components"
import { Box } from '@rebass/grid'

const Intro = styled(Box)`
  max-width: 700px;
  margin: 0 auto;
`

const Project = ({ data: { prismicProject } }) => {
  const { data } = prismicProject

  return (
    <React.Fragment>
      <SEO title="Post" />
      <ConditionalLayout>

        <Intro py={4}>
          <h1>{data.title.text}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.intro.html }} />
        </Intro>

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

      
      
      </ConditionalLayout>
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