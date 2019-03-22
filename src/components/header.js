import React from "react"
import styled from "styled-components"
import { device } from "./device.js"

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px ${device.padding.mobileS};

  @media ${device.mediaQuery.tablet} {
    padding: 32px ${device.padding.tablet};
  }

  h1 {
    font-family: "Reem Kufi", Arial;
    text-transform: uppercase;
	margin: 0;
	span {
		color: #999;
	}
  }
`

export default props => (
  <StyledHeader>
    <h1>Laura Stout <span>Animator</span></h1>
    <span><a href="MAILTO:lalalaura.stout@gmail.com">lalalaura.stout@gmail.com</a></span>
  </StyledHeader>
)
