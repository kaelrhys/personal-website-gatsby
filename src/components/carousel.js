import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Carousel from 'nuka-carousel';

const Image = styled(Img)`
    width: 100%;
`

const ImgCarousel = (props) => {
    const images = props.images.map((image, key) =>
        <Image fluid={image.carousel_image.localFile.childImageSharp.fluid} />
    );
    return (
        <Carousel>
            { images }
        </Carousel>
    )
}

export default ImgCarousel