import React from "react"
import { graphql } from "gatsby"
// import ConditionalLayout from "@components/layouts/modalLayout"
import Layout from "@components/layouts/layout"

import SEO from "@components/seo"
import ImageRow from "../components/imageRow"
import VideoEmbed from "../components/videoEmbed"
import ImgCarousel from "../components/carousel"
import IntroTable from "../components/table"

import styled from "styled-components"
import { Box } from '@rebass/grid'
import {useSpring, animated} from 'react-spring'
import { Text } from "@components/typography"

const Intro = styled(animated(Box))`
  max-width: 700px;
  margin: 0 auto;
`

const Project = ({ data: { prismicProject } }) => {
  const { data } = prismicProject
  const textSpringProps = useSpring({delay: 300, opacity: 1, from: {opacity: 0}});
  return (
    <React.Fragment>

      <Layout>

        <Intro py={4} style={textSpringProps}>

          <Text mb={12} as="h3" textStyle="h3" >{data.client.text}</Text>
          <Text mb={12} as="h1" textStyle="h1" >{data.title.text}</Text>
          <Text dangerouslySetInnerHTML={{ __html: data.intro.html }} />
          <IntroTable columns={ data.table } />

        </Intro>

        {
          data.body.map((slice, index) => {
            switch (slice.__typename) {
              case ('PrismicProjectBodyImageGallery'):
                return <ImageRow key={slice.id} images={slice.items} />
              case ('PrismicProjectBodyCarousel'):
                  return <ImgCarousel key={slice.id} images={slice.items} />
              case ('PrismicProjectBodyVideo'):
                return <VideoEmbed key={slice.id} bgColor={slice.primary.background_color} video={slice.primary.video_embed} />
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
        client {
          html
          text
        }
        title {
          text
        }
        intro {
          html
          text
        }
        table {
          column_title {
            text
            html
          }
          column_text {
            html
          }
        }
        body {
          __typename
          ... on PrismicProjectBodyCarousel {
            id
            items{
              carousel_image {
                alt
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
          ... on PrismicProjectBodyVideo {
            id
            primary {
              background_color
              video_embed {
                type
                version
                provider_name
                provider_url
                title
                author_name
                author_url
                is_plus
                account_type
                html
                width
                height
                duration
                description
                thumbnail_url
                thumbnail_width
                thumbnail_height
                thumbnail_url_with_play_button
                upload_date
                video_id
                uri
                embed_url
              }
            }
          }
          ... on PrismicProjectBodyImageGallery {
            id
            items{
              row_image {
                alt
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
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


