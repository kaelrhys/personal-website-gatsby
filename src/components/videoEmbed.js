import React from "react"
import { Flex, Box } from '@rebass/grid'
import styled from "styled-components"
import PropTypes from 'prop-types';


const VideoIframeContainer = styled(Box)`
    width: 100%;
    max-width: 600px;
`

const VideoIframe = styled(Box)`
    overflow: hidden;
    position: relative;
    width:100%;
    iframe {
        border: 0;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }
`

const VideoEmbed = (props) => {
    // Calculates padding for aspect ratio. Read more: https://danieljones.design/css-aspect-ratio-calculator
    const videoHeight = parseInt(props.video.height)
    const videoWidth = parseInt(props.video.width)
    const paddingBottom = `${videoHeight/(videoWidth/100)}%`
    return (
        <Flex py={80} alignItems="center" justifyContent="center" bg={props.bgColor} >
            <VideoIframeContainer>
                <VideoIframe pb={paddingBottom} dangerouslySetInnerHTML={{ __html: props.video.html }} />
            </VideoIframeContainer>

        </Flex>
    )
}

VideoEmbed.propTypes = {
    video: PropTypes.object,
    bgColor: PropTypes.string,
}

VideoEmbed.defaultProps = {
    video: PropTypes.object,
    bgColor: PropTypes.string,
};

export default VideoEmbed
