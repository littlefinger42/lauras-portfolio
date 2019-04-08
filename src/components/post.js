import React from "react"
import styled from "styled-components"
import YouTube from "react-youtube"

import { device } from "./device"
import { Link } from "gatsby"

const PropItem = styled.div`
  padding: ${device.padding.mobileS} 0;
  
  article {
    display: flex;
    flex-wrap: wrap;
  }
  
  > * {
    padding: 0 ${device.padding.mobileS};
  }
  
  @media ${device.mediaQuery.tablet} {
    padding: ${device.padding.tablet} 0;
    > * {
      padding: 0 ${device.padding.tablet};
    }
  }
  @media ${device.mediaQuery.laptop} {
    padding: ${device.padding.laptop} 0;
  }
`

const TextContainer = styled.div`
  flex: 0 1 100%;

  @media ${device.mediaQuery.tablet} {
    flex: 0 1 50%;

    h1 {
      margin-top: 0;
    }
  }
`

const Padding = styled.div`
  @media ${device.mediaQuery.tablet} {
      padding-left: ${device.padding.tablet};
  }
`

const VideoContainer = styled.div`
  flex: 0 1 100%;
  min-height: 288px;
  .video {
    height: 100%;
  } 
  @media ${device.mediaQuery.tablet} {
    height: 360px;
    flex: 0 1 50%;
  }
`

export default props => (
  <PropItem>
    <article>
      <VideoContainer>
        <YouTube
          videoId={props.videoId}
          opts={{  height: "100%", width: "100%"}}
          containerClassName={'video'}
        />
      </VideoContainer>
      <TextContainer>
        <Padding>
          {/* <Link to={props.key}> */}
          <h1>{props.title}</h1>
          {props.children}
          {/* </Link> */}
        </Padding>
      </TextContainer>
    </article>
  </PropItem>
)
