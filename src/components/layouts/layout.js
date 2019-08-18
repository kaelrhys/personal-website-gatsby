/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { GlobalStyle } from '@styles/globalStyle';
import theme from '@styles/theme';
import { ThemeProvider } from 'styled-components';
import styled from "styled-components";
import SiteFooter from "@components/footer";
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import { Box, Flex } from '@rebass/grid'
import { navigate } from "gatsby"
import Icon from "@components/icons"
import { Link } from "gatsby";

const CloseLink = styled(Link)`
  position: fixed;
  top: 20px;
  right: 20px;
  color: #fff;
  font-size: 20px;
`

const SiteWrapper = styled.main`
background: rgba(255,255,255,0.5);
width: 100%;
`;

const Container = styled(Box)`
  width: 100%;
  max-width: 1100px;
`
Container.defaultProps = {
  mx: 'auto'
}


if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}


const Layout = ({ children, ...rest }) => (


  <ThemeProvider theme={theme}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <ModalRoutingContext.Consumer>
            {({ modal, closeTo }) => (
              modal ? (
              <React.Fragment>
                <GlobalStyle />
                <CloseLink to={closeTo} state={{noScroll:true}}>
                  <Icon size="lg" icon={["fas", "times"]} />
                </CloseLink>
                <Flex px={5} onClick={() => navigate(`/`, { state: { noScroll: true }})}>
                  <Box onClick={e => e.stopPropagation()} bg="white" width={[1, 1, 1, 10/12,]} p={0} m="auto">
                      {children}
                  </Box>
                </Flex>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <GlobalStyle />
                <SiteWrapper>
                  <Container px={4}>
                    {children}  
                  </Container>
                </SiteWrapper>
                <SiteFooter />
              </React.Fragment>
            )
          )}
          </ModalRoutingContext.Consumer>
        </>
      )}
    />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
