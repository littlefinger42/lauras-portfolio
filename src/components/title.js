import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import {device} from "./device.js"

const TitleImageStyled = styled(Image)`
	margin-bottom: ${device.padding.mobileS};
	@media ${device.mediaQuery.tablet} { 
		margin-bottom: ${device.padding.tablet};
	}
	@media ${device.mediaQuery.laptop} { 
		margin-bottom: ${device.padding.laptop};
	}
`

function Title() {
	return (
	  <StaticQuery
		query={titleQuery}
		render={data => {
		  return (
			  <TitleImageStyled
				fluid={data.logo.childImageSharp.fluid}
				alt='TODO'
				style={{zIndex: 2}}
			  />
		  )
		}}
	  />
	)
  }

  export default Title
  

const titleQuery = graphql`
  query titleQuery {
    logo: file(absolutePath: { regex: "/LogoPurple.png/" }) {
      childImageSharp {
        fluid(maxWidth: 1140) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
