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
  padding: ${device.padding.mobileS} 0 32px 0;

  @media ${device.mediaQuery.tablet} {
    flex-wrap: nowrap;
    padding: ${device.padding.tablet} 0 64px 0;
  }
  @media ${device.mediaQuery.laptop} {
    padding: ${device.padding.laptop} 0 128px 0;
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
              <h2 className="h1" style={{lineHeight:"2.4rem"}}>There is no such thing as <strong>coincidence...</strong></h2>
              <p>
              You are here because it was inevitable! I'm <strong>Laura</strong>, an easy-going, Dutch-Brazillian animator. I’m inspired by the{" "}
                <strong>
                  introspective, mystic places, expressive characters
                </strong>{" "}
                and <strong>imaginative music</strong>. I love exploring and
                experimenting With different styles and techniques.
              </p>
              <p>
                My main goal is to <strong>capture my audience</strong>: I want
                every spectator to be{" "}
                <strong>fully immersed in the world I create</strong>.
              </p>
            </BioColumn>
            <BioColumn>
              <Video />
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
