import React from "react"
import Header from "./header.js"
import styled from "styled-components"
import { device } from "./device.js"

import "normalize.css"
import "../components/type.css"

const PageContainer = styled.div`
  max-width: ${device.sizes.mobileS};
  margin: 0 auto;

  @media ${device.mediaQuery.mobileL} {
		max-width: ${device.sizes.mobileL};
	}
  @media ${device.mediaQuery.tablet} {
		max-width: ${device.sizes.tablet};
	}
  @media ${device.mediaQuery.laptop} {
		max-width: ${device.sizes.laptop};
	}
`


class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    // if (location.pathname === rootPath) {

    // } else {

    // }
    return (
      <PageContainer>
        <Header />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </PageContainer>
    )
  }
}

export default Layout
