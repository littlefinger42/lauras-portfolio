import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
`
const StyledNavItem = styled.div`
  text-align: center;
  font-style: italic;
  text-transform: uppercase;
  font-size: 1.5rem;
`

const Nav = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <StyledNav>
        {data.site.siteMetadata.menuLinks.map(menuLink => {
          return (
            <StyledNavItem>
              <Link to={`${menuLink.link}`}>{menuLink.name}</Link>
            </StyledNavItem>
          )
        })}
      </StyledNav>
    )}
  />
)

export default Nav
