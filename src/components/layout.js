import React from "react"
import styled from "styled-components"
import { device } from "./device.js"
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
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const SplashScreenExtraPink = styled.div`
  background-color: #ffd6d6;
  flex: 1 1 100%;
`

const IconScroll = styled.div`
  @media ${device.mediaQuery.laptop} {
    display:none;
  }

  &,
  &:before {
    position: absolute;
    left: 50%;
  }

  width: 40px;
  height: 70px;
  margin-left: -20px;
  top: 50%;
  margin-top: -35px;
  box-shadow: inset 0 0 0 1px #290f29;
  border-radius: 25px;

  &:before {
    content: "";
    width: 8px;
    height: 8px;
    background: #290f29;
    margin-left: -4px;
    top: 8px;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: scroll;
  }

  @keyframes scroll {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(46px);
    }
  }
`

const ContentContainer = styled.div`
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
  @media ${device.mediaQuery.laptopL} {
    max-width: ${device.sizes.laptopL};
  }
  @media ${device.mediaQuery.desktop} {
    max-width: ${device.sizes.desktop};
  }
`

class Layout extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    console.log(window.scrollY);
  };

  render() {
    const { location, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    // if (location.pathname === rootPath) {

    // } else {

    // }
    return (
      <PageContainer>
        <SplashScreen>
          <SplashScreenExtraPink />
          <ImgBackground src={PinkStuff} />
          <IconScroll />
        </SplashScreen>
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
