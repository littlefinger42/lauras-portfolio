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
            <BioColumn>
              <p>
                You are here because it was inevitable! I'm' Laura, an
                easy-going, Dutch animator. I’m inspired by the <strong>introspective,
                mystic places, expressive characters</strong> and <strong>imaginative music</strong>. I
                love exploring and experimenting With different styles and
                techniques.
              </p>
              <p>
                My main goal is to <strong>capture my audience</strong>: I want every spectator
                to be <strong>fully immersed in the world I create</strong>.
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
