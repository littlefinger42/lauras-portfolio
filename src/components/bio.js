/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { device } from "./device.js"
// import Image from "gatsby-image"

import Video from "../components/video"

const BioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  
  @media ${device.mediaQuery.tablet} { 
    flex-wrap: nowrap;
    height: 70vh;
  }
`

const BioColumn = styled.div`
  flex: 0 1 100%;
  padding: 0 ${device.padding.mobileS};
  
  @media ${device.mediaQuery.tablet} {
    flex: 0 1 50%;
    padding: 0 ${device.padding.tablet};
  }
`

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <BioContainer>
            {/* <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            /> */}
            <BioColumn>
              <p>
                Written by <strong>{author}</strong> In nature, dead trees are
                just as normal as live trees. Put light against light - you have
                nothing. Put dark against dark - you have nothing. It's the
                contrast of light and dark that each give the other one meaning.
                We'll do another happy little painting. Let's do that again.
              </p>
              <p>
                Work on one thing at a time. Don't get carried away - we have
                plenty of time. The more we do this - the more it will do good
                things to our heart.
              </p>
            </BioColumn>
            <BioColumn>
              <Video width="100%">
                <source
                  src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
                  type="video/mp4"
                />
                <source
                  src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.webm"
                  type="video/webm"
                />
                <source
                  src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.ogv"
                  type="video/ogg"
                />
                <img src="https://placehold.it/400x300" type="" />
              </Video>
            </BioColumn>
          </BioContainer>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
