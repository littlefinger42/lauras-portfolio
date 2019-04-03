import React from "react"
import styled from "styled-components"
import { device } from "./device.js"

import Header from "./header.js"
import Footer from "./footer.js"

import PinkStuff from "../../content/assets/pinkstuff.png"

import "normalize.css"
import "../components/type.css"

const PageContainer = styled.div`
  background-color: ${device.colours.background};
`

const ImgBackground = styled.img`
  height: auto;
  width: 100%;
  z-index: 1;
`

const SplashScreen = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
`

const SplashScreenExtraPink = styled.div`
  background-color: #ffd6d6;
  flex: 1 1 100%;
`

const ContentContainer = styled.div`
  max-width: ${device.sizes.mobileS};
  margin: 0 auto;

  padding-top: 64px;

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
        <SplashScreen>
          <SplashScreenExtraPink></SplashScreenExtraPink>
        <ImgBackground src={PinkStuff} />
        </SplashScreen>
        <Header />
        <ContentContainer>
          <main>{children}</main>
          <Footer>
            Designed by Laura Stout, © {new Date().getFullYear()}.
          </Footer>
        </ContentContainer>
      </PageContainer>
    )
  }
}

export default Layout
