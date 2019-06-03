import React from "react"
import styled from "styled-components"

import { device } from "./device"

const AnimationItem = styled.article`
  padding: ${device.padding.mobileS} ${device.padding.mobileS};
  display: flex;
  flex-wrap: wrap;
  .gatsby-image-wrapper {
    width: 100%;
  }

  @media ${device.mediaQuery.tablet} {
    padding: ${device.padding.tablet} ${device.padding.mobileS};
  }
  @media ${device.mediaQuery.laptopL} {
    padding: 64px 64px;
  }
`

const IllustrationTitle = styled.h2`
  margin: 0.35em 0;
  height: 56px;
  @media ${device.mediaQuery.tablet} { 
    height: 72px;
  }
  span {
    color: #f0a3a3;
    font-size: 1rem;
    font-weight: 400;
    white-space: nowrap;
  }
`

export default props => (
  <AnimationItem>
    {/* <Link to={props.key}> */}
    <IllustrationTitle>
      {props.title} <span>{props.date}</span>
    </IllustrationTitle>
    {props.children}
    {/* </Link> */}
  </AnimationItem>
)
