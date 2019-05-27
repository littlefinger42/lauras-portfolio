import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimationItem from "../components/animationItem"

import Fade from "react-reveal/Fade"

class BlogIndex extends React.Component {
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
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Fade bottom>
              <AnimationItem
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
              </AnimationItem>
            </Fade>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/animation/*.md" } }
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
