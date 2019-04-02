import React from "react"
import styled from "styled-components"
import { device } from "./device.js"

const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  padding: ${device.padding.mobileS};

  @media ${device.mediaQuery.tablet} {
    padding: ${device.padding.tablet};
  }
`

export default props => (
  <StyledFooter>
    Website designed by Laura Stout © {new Date().getFullYear()}.
  </StyledFooter>
)