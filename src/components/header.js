import React from "react"
import styled from "styled-components"
import { device } from "./device.js"

const StyledHeader = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: flex-end;
  padding: ${device.padding.mobileS};

  @media ${device.mediaQuery.tablet} {
    padding: ${device.padding.tablet};
  }
`

export default props => (
  <StyledHeader>
    <span><a href="MAILTO:lalalaura.stout@gmail.com">lalalaura.stout@gmail.com</a></span>
  </StyledHeader>
)