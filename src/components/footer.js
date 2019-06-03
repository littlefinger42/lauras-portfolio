import React from "react"
import styled from "styled-components"
import { device } from "./device.js"

const StyledFooter = styled.footer`
  display: flex;
  padding: ${device.padding.mobileS};

  @media ${device.mediaQuery.tablet} {
    padding: ${device.padding.tablet};
  }
`

export default () => (
  <StyledFooter>
    <div>Designed by Laura Stout, © {new Date().getFullYear()}.</div>
		<div></div>
  </StyledFooter>
)
