import React from "react"
import styled from "styled-components"
import { device } from "./device.js"

const StyledFooter = styled.footer`
padding: ${device.padding.mobileS};

@media ${device.mediaQuery.tablet} {
  padding: ${device.padding.tablet};
}
`

export default ({children}) => (
	<StyledFooter>
	  {children}
	</StyledFooter>
  )