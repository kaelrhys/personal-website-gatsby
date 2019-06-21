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
// import Navigation from "./navigation"
import Footer from "./footer"

import theme from '@styles/theme';
import { ThemeProvider } from 'styled-components';

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
            {/* <Navigation /> */}
            <main>{children}</main>
            {/* <Footer /> */}
        </>
      )}
    />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
