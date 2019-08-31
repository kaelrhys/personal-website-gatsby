import React from "react"
import PropTypes from "prop-types"
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

ImageRow.propTypes = {
    images: PropTypes.array,
}

ImageRow.defaultProps = {
    images: null,
};

export default ImageRow
