import React from "react"
import styled from "styled-components"
import { Box, Flex } from '@rebass/grid'
import { Text } from "@components/typography"
import ButtonLink from "@components/button";


const Contact = () => (
    <Flex my={96}>
        <Box width={2/3}>
            <Text as="h3" textStyle="h2">Yes i'd Love to Chat</Text>
            <Text mt={8} mb={16}>If you are interested to work with me or maybe just say hi, please get in touch via any of the below, I’d love to hear more.</Text>
            <ButtonLink to="/contact" state={{ modal: true }}>Get in touch</ButtonLink>
        </Box>
    </Flex>
)

export default Contact



