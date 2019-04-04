import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { device } from "./device.js"

const TitleImageStyled = styled(Image)`
  width: 100%;

  @media ${device.mediaQuery.tablet} {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
  @media ${device.mediaQuery.laptop} {
    width: 60%;
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
            alt="Laura Stout animation title image"
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
