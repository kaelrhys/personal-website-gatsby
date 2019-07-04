import React from "react"
import { Box, Flex } from '@rebass/grid'
import { Text } from "@components/typography"
import ButtonLink from "@components/button";
import Icon from "@components/icons"

const Contact = () => (
    <Flex my={96}>
        <Box width={2/3} mx={10}>
            <Text as="h3" textStyle="h2">Yes i'd Love to Chat</Text>
            <Text mt={8} mb={16}>If you are interested to work with me or maybe just say hi, please get in touch via any of the below, I’d love to hear more.</Text>
            <ButtonLink to="/contact" state={{ modal: true }}>
                Get in touch<Icon ml={2} icon={["fas", "arrow-right"]} />
            </ButtonLink>
        </Box>
    </Flex>
)

export default Contact



