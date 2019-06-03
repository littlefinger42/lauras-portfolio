import React from "react"
import styled from "styled-components"
import { device } from "./device.js"

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: ${device.padding.mobileS};

  @media ${device.mediaQuery.tablet} {
    padding: ${device.padding.tablet};
  }
`

export default () => (
  <StyledFooter>
    <span>Designed by Laura Stout, © {new Date().getFullYear()}.</span>
        <a href="MAILTO:lalalaura.stout@gmail.com">lalalaura.stout@gmail.com</a>
  </StyledFooter>
)
