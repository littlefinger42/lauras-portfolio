import React from "react"
import styled from "styled-components"

const StyledVideo = styled.video`
  width: 100%;
`

export default ({ children }) => <StyledVideo controls>{children}</StyledVideo>
