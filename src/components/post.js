import React from "react"
import styled from "styled-components"

import { device } from "./device"
import { Link } from "gatsby"

const PropItem = styled.div`
  flex: 0 1 100%;
  text-align: center;

  > * {
    padding: 0 ${device.padding.mobileS};
  }

  @media ${device.mediaQuery.tablet} {
    > * {
      padding: 0 ${device.padding.tablet};
    }
  }

  @media ${device.mediaQuery.laptop} {
    flex: 0 1 50%;
  }
`

export default (props, { children }) => (
  <PropItem>
    <article>
      <video async controls width="100%">
        <source
          src={props.vid480}
          type="video/mp4"
          media="all and (max-width: 480px)"
        />
        <source
          src={props.vid720}
          type="video/mp4"
          media="all and (max-width: 720px)"
        />
        <source src={props.vid1080} type="video/mp4" />
      </video>
      {/* <Link to={props.key}> */}
        <h1>{props.title}</h1>
      {/* </Link> */}
      {children}
      <small>{props.date}</small>
    </article>
  </PropItem>
)
