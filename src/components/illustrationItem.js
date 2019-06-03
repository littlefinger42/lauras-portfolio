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
    padding: ${device.padding.laptop} ${device.padding.mobileS};
  }
`

const IllustrationTitle = styled.h1`
  margin: 0.35em 0;
  span {
    color: #f0a3a3;
    font-size: 1rem;
    font-weight: 400;
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
