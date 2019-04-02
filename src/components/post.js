import React from "react"
import styled from "styled-components"

import { device } from "./device"
import { Link } from "gatsby"

const PropItem = styled.div`
	flex: 0 1 100%;
	text-align: center;
	
	>* {
		padding: 0 ${device.padding.mobileS};
	}

  @media ${device.mediaQuery.tablet} {
    flex: 0 1 50%;
		>* {
			padding: 0 ${device.padding.tablet};
		}
  }

  @media ${device.mediaQuery.laptop} {
    flex: 0 1 33%;
  }
`

export default (props, { children} ) => (
  <PropItem>
    <article>
      <img src="https://source.unsplash.com/random" width="100%"></img>
      <Link to={props.key}>
        <h1>{props.title}</h1>
      </Link>
      {children}
      <small>{props.date}</small>
    </article>
  </PropItem>
)
