
import React from "react"
import Layout from "./layout"
import { Link, ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import { Box, Flex } from '@rebass/grid'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { navigate } from "gatsby"



const CloseLink = styled(Link)`
  position: fixed;
  top: 20px;
  right: 20px;
  color: #fff;
  font-size: 20px;
`

const ConditionalLayout = ({ children, ...rest }) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      modal ? (
        <React.Fragment>
          
        <CloseLink to={closeTo}>
          <FontAwesomeIcon size="lg" icon={faTimes} />
        </CloseLink>

        <Flex py={5} onClick={() => navigate(`/`, { state: { noScroll: true }})}>
          <Box bg="white" width={8/12} p={0} m="auto">
              {children}
          </Box>
        </Flex>


        </React.Fragment>
      ) : (
        <Layout { ...rest }>
          {children}
        </Layout>
      )
    )}
  </ModalRoutingContext.Consumer>
)

export default ConditionalLayout