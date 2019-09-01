import React from "react"
import PropTypes from "prop-types"
import { Box, Flex } from '@rebass/grid'
import { Text } from "@components/typography"
import ButtonLink from "@components/button";
import Icon from "@components/icons"

import styled from 'styled-components'

const SocialLink = styled.a`
    font-size: 28px;
    margin: 0 2px;
`

const ContactText = styled(Text)`
    p {
        margin: 0;
    }
`

const Contact = ({title, content}) => (
    <Flex py={96}>
        <Box width={[1, 8/12, 6/12]}>
            <Text as="h2" textStyle="h2">{title.text}</Text>
            <ContactText mt={8} mb={16}  dangerouslySetInnerHTML={{ __html: content.html }} />
            <Flex alignItems="center">
                <ButtonLink aria-label="Contact" to="/contact" state={{ modal: true }}>
                    Contact<Icon ml={2} icon={["fas", "arrow-right"]} />
                </ButtonLink>
                <Box ml={3}>
                    <SocialLink href="https://twitter.com/kaeldesigns"><Icon ml={2} icon={["fab", "twitter"]} /></SocialLink>
                    <SocialLink href="https://www.linkedin.com/in/kaelmatthews/"><Icon ml={2} icon={["fab", "linkedin-in"]} /></SocialLink>
                    <SocialLink href="https://www.instagram.com/kaelrhys/"><Icon ml={2} icon={["fab", "instagram"]} /></SocialLink>
                    <SocialLink href="https://github.com/kaelrhys/"><Icon ml={2} icon={["fab", "github"]} /></SocialLink>
                </Box>
            </Flex>
        </Box>
    </Flex>
)

export default Contact

Contact.propTypes = {
    content: PropTypes.object,
    title: PropTypes.object,
}

Contact.defaultProps = {
    content: null,
    title: null,
};

