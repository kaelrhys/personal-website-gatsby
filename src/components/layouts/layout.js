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


const SiteWrapper = styled.main`
  background: rgba(255,255,255,0.5);
  width: 100%;
  min-width: 400px;
`;

const Container = styled(Box)`
  width: 100%;
  max-width: 1100px;
`
Container.defaultProps = {
  mx: 'auto'
}

const ModalContent = styled(Box)`
  min-height: 100vh;
`

const ModalCloseLink = styled(Link)`
  position: fixed;
  top: 20px;
  right: 20px;
  color: #fff;
  font-size: 20px;
`

if (typeof window !== "undefined") {
/* eslint-disable */
  require("smooth-scroll")('a[href*="#"]')
/* eslint-enable */
}


const PureLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
   <React.Fragment>
    <GlobalStyle />
    <SiteWrapper>
      <Container px={[4, 5]}>
        {children}
      </Container>
    </SiteWrapper>
    <SiteFooter />
    </React.Fragment>
  </ThemeProvider>
)

const ModalLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <ModalCloseLink aria-label="Close this project"  to="/#projects" state={{noScroll:true}}>
        <Icon size="lg" icon={["fas", "times"]} />
      </ModalCloseLink>
      <Flex px={[0,0,5]} onClick={() => navigate(`/`, { state: { noScroll: true }})}>
        <ModalContent onClick={e => e.stopPropagation()} bg="white"  width={[1, 1, 1, 10/12,]} p={0} m="auto">
            {children}
        </ModalContent>
      </Flex>
    </React.Fragment>
  </ThemeProvider>
)

class Layout extends React.Component {
  render() {
    return (
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
          <ModalRoutingContext.Consumer>
            {({ modal }) => ( modal ? (
              <ModalLayout {...this.props} data={data}>
                {this.props.children}
              </ModalLayout>
            ) : (
              <PureLayout {...this.props} data={data}>
                {this.props.children}
              </PureLayout>
            ))}

          </ModalRoutingContext.Consumer>
        )}
      />
    )
  }
}

export default Layout


Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}

PureLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}

ModalLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}