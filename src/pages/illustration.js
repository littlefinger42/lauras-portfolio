import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"

import Fade from "react-reveal/Fade"

const IllustrationPostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    flex: 1 1 33.3%;
  }
`

class IllustrastionIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
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
                <Post
                  title={title}
                  key={node.fields.slug}
                  date={node.frontmatter.date}
                  videoId={node.frontmatter.videoId}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: node.html,
                    }}
                  />
                </Post>
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
            date(formatString: "MMMM DD, YYYY")
            title
            videoId
          }
        }
      }
    }
  }
`
