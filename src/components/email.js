import React from "react"
import styled from "styled-components"
import { device } from "./device.js"

const EmailContainer = styled.div`
  position: relative;
  left: 0;
  right: 0;
  top: -64px;
  display: flex;
  justify-content: flex-end;
  padding: ${device.padding.mobileS};
  z-index: 2;
`

export default () => (
  <EmailContainer>
    <span>
      <a href="MAILTO:lalalaura.stout@gmail.com">lalalaura.stout@gmail.com</a>
    </span>
  </EmailContainer>
)
