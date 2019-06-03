import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { device } from "../components/device.js"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IllustrationItem from "../components/illustrationItem"

import Fade from "react-reveal/Fade"

const IllustrationPostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    flex: 0 1 100%;
    @media ${device.mediaQuery.tablet} {
      flex: 0 1 50%;
    }
    @media ${device.mediaQuery.laptopL} {
      flex: 0 1 33.3%;
    }
  }
`

class IllustrastionIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Portfolio"
          keywords={[
            `laura`,
            `stout`,
            `animation`,
            `illustration`,
            `portfolio`,
          ]}
        />
        <IllustrationPostContainer>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Fade bottom>
                <IllustrationItem
                  title={title}
                  key={node.fields.slug}
                  date={node.frontmatter.date}
                  videoId={node.frontmatter.videoId}>
                  <Img
                    title={title}
                    fluid={node.frontmatter.illustration.childImageSharp.fluid}
                  />
                </IllustrationItem>
              </Fade>
            )
          })}
        </IllustrationPostContainer>
      </Layout>
    )
  }
}

export default IllustrastionIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/illustration/*.md" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            illustration {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
