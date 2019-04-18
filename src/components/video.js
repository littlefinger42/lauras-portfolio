import React from "react"
import styled from "styled-components"

import video1080 from "../../static/assets/Showreel1080.mp4"

const StyledVideo = styled.video`
  width: 100%;
  max-height: 100%;
`

export default () => (
  <StyledVideo async controls>
    <source src={video1080} type="video/mp4"/>
  </StyledVideo>
)
