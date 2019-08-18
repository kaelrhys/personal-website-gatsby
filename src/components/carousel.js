import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import Carousel from 'nuka-carousel';

const Image = styled(Img)`
    width: 100%;
`

const ImgCarousel = (props) => {
    const images = props.images.map((image, key) =>
        <Image key={key} fluid={image.carousel_image.localFile.childImageSharp.fluid} />
    );
    return (
        <Carousel>
            { images }
        </Carousel>
    )
}

export default ImgCarousel


ImgCarousel.propTypes = {
    images: PropTypes.object,
}

ImgCarousel.defaultProps = {
    images: null,
};

  