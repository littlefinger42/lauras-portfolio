import React from "react"
import styled from "styled-components"

import video1080 from "../../static/assets/Showreel1080.mp4"
import video720 from "../../static/assets/Showreel720.mp4"
import video480 from "../../static/assets/Showreel480.mp4"

const StyledVideo = styled.video`
  width: 100%;
  max-height: 100%;
`

export default () => (
  <StyledVideo async controls>
    <source
      src={video480}
      type="video/mp4"
      media="all and (max-width: 480px)"
    />
    <source
      src={video720}
      type="video/mp4"
      media="all and (max-width: 720px)"
    />
    <source src={video1080} type="video/mp4" />
  </StyledVideo>
)
