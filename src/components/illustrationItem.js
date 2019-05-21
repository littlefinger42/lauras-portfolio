import React from "react"
import styled from "styled-components"

import { device } from "./device"

const AnimationItem = styled.div`
  padding: ${device.padding.mobileS} 0;

	height: 400px;
    display: flex;
	flex-wrap: wrap;
	.gatsby-image-wrapper {
		width: 100%;
		height: 400px;
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
