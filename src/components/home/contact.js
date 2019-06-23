import React from "react"
import styled from "styled-components"
import { Box, Flex } from '@rebass/grid'
import ButtonLink from "@components/button";


const Contact = () => (
    <div>
        <h2>Yes i'd Love to Chat</h2>
        <p>If you are interested to work with me or maybe just say hi, please get in touch via any of the below, I’d love to hear more.</p>
        <ButtonLink to="/contact" state={{ modal: true }}>Get in touch</ButtonLink>
    </div>
)

export default Contact



