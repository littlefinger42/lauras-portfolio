import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Bio from "../components/bio"
import Title from "../components/title"
import Layout from "../components/layout"
import Email from "../components/email"
import SEO from "../components/seo"
import Post from "../components/post"

const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const IntroductionContainer = styled.div`
  height: 130vh;
`

const StickyContainer = styled.div`
  position: sticky;
  top: ${props => props.top};
  z-index: ${props => props.zindex};
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Portfolio"
          keywords={[`laura`, `stout`, `animation`, `illustration`, `portfolio`]}
        />
        <IntroductionContainer>
          <StickyContainer top="64px" zindex="2">
            <Email />
            <Title />
          </StickyContainer>
        </IntroductionContainer>
        <Bio />
        <PostsContainer>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Post
                title={title}
                key={node.fields.slug}
                date={node.frontmatter.date}
              >
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
                <p>gfsdfgfsdgds</p>
              </Post>
            )
          })}
        </PostsContainer>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
