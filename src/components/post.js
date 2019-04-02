import React from "react"
import styled from "styled-components"

import { device } from "./device"
import { Link } from "gatsby"

const PropItem = styled.div`
  flex: 0 1 100%;
  text-align: center;
  article {
    position: relative;
  }
  a {
    z-index: 11;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  > * {
    margin: 0 ${device.padding.mobileS};
  }
  @media ${device.mediaQuery.tablet} {
    flex: 0 1 50%;
    > * {
      margin: 0 ${device.padding.tablet};
    }
  }
  @media ${device.mediaQuery.laptop} {
    flex: 0 1 33%;
  }
`

const ImgContainer = styled.div`
  &:after {
    content: "";
    z-index: 10;
    display: block;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.3s;
  }
  &:hover:after {
    background: rgba(0, 0, 0, 0);
  }
`

export default (props, { children }) => (
  <PropItem>
    <article>
      <ImgContainer>
        <img src="https://source.unsplash.com/random" width="100%" />
        <Link to={props.key}>
          <button>{props.title}</button>
        </Link>
      </ImgContainer>
      {children}
      <small>{props.date}</small>
    </article>
  </PropItem>
)