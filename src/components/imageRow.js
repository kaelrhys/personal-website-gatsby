import React from "react"
import styled from "styled-components"
import { Flex, Box } from '@rebass/grid'
import Img from "gatsby-image"



const ImageRow = (props) => {

    const numberOfImages = props.images.length
    const images = props.images.map((image, key) =>
        <Box width={1/numberOfImages} px={2}>
            <Img fluid={image.gallery_image.localFile.childImageSharp.fluid} />
        </Box>
    );

    return (
        <Flex py={2}>
            { images }
        </Flex>
    )
}

export default ImageRow
