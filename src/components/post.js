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
    > * {
      padding: 0 ${device.padding.tablet};
    }
  }
`

const TextContainer = styled.div`
  flex: 0 1 100%;

  @media ${device.mediaQuery.tablet} {
    flex: 0 1 50%;
    div {
      padding-left: ${device.padding.tablet};
    }
    h1 {
      margin-top: 0;
    }
  }

`

const VideoContainer = styled.div`
  flex: 0 1 100%;

  @media ${device.mediaQuery.tablet} {
    flex: 0 1 50%;
  }
`

export default props => (
  <PropItem>
    <article>
      <VideoContainer>
        <YouTube
          videoId={props.videoId}
          opts={{ height: "290", width: "100%" }}
        />
      </VideoContainer>
      <TextContainer>
        <div>
          {/* <Link to={props.key}> */}
          <h1>{props.title}</h1>
          {props.children}
          {/* </Link> */}
        </div>
      </TextContainer>
    </article>
  </PropItem>
)
