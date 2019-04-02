import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

function Title() {
	return (
	  <StaticQuery
		query={titleQuery}
		render={data => {
		  return (
			  <Image
				fluid={data.logo.childImageSharp.fluid}
				alt='TODO'
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
