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
import styled from "styled-components"

const SiteWrapper = styled.main`
background: rgba(255,255,255,0.5);
`;


const Layout = ({ children }) => (
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
            <GlobalStyle />
            <SiteWrapper>{children}</SiteWrapper>
        </>
      )}
    />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
