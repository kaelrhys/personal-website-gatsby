import React from "react"
import { Flex, Box } from '@rebass/grid'
import Img from "gatsby-image"



const ImageRow = (props) => {

    const numberOfImages = props.images.length
    const images = props.images.map((image, key) =>
        <Box key={key} width={1/numberOfImages} px={1}>
            <Img fluid={image.row_image.localFile.childImageSharp.fluid} />
        </Box>
    );

    return (
        <Flex py={2} mx={-1}>
            { images }
        </Flex>
    )
}

export default ImageRow
