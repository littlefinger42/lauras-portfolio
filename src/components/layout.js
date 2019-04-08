import React from "react"
import styled from "styled-components"
import { device } from "./device.js"
import Footer from "./footer.js"

import PinkStuff from "../../static/assets/pinkstuff.png"

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

  & {
    position: absolute;
    left: 50%;
    bottom: 30vh;
    display: block;
    text-align: center;
    font-size: 20px;
    z-index: 100;
    text-decoration: none;
    text-shadow: 0;
    width: 13px;
    height: 13px;
    border-bottom: 2px solid #290f29;
    border-right: 2px solid #290f29;
    z-index: 3;
    left: 50%;
    -webkit-transform: translate(-50%, 0%) rotate(45deg);
    -moz-transform: translate(-50%, 0%) rotate(45deg);
    transform: translate(-50%, 0%) rotate(45deg);
    -webkit-animation: fade_move_down 4s ease-in-out infinite;
    -moz-animation:    fade_move_down 4s ease-in-out infinite;
    animation:         fade_move_down 4s ease-in-out infinite;
  }
  
  @-webkit-keyframes fade_move_down {
    0%   { -webkit-transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
    50%  { opacity: 1;  }
    100% { -webkit-transform:translate(0,10px) rotate(45deg); opacity: 0; }
  }
  @-moz-keyframes fade_move_down {
    0%   { -moz-transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
    50%  { opacity: 1;  }
    100% { -moz-transform:translate(0,10px) rotate(45deg); opacity: 0; }
  }
  @keyframes fade_move_down {
    0%   { transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
    50%  { opacity: 1;  }
    100% { transform:translate(0,10px) rotate(45deg); opacity: 0; }
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
    // window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleScroll);
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
