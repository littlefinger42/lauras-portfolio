import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { device } from "./device.js"
import { Link } from "gatsby"

const StyledNav = styled.nav`
  display: flex;
  background-color: ${device.colours.primary};
  justify-content: space-around;
  padding: ${device.padding.mobileS};
  margin: 0 ${device.padding.mobileS};
  @media ${device.mediaQuery.tablet} {
    margin: 0 ${device.padding.tablet};
    padding: ${device.padding.tablet};
  }
`
const StyledNavItem = styled.div`
  text-align: center;
  font-style: italic;
  text-transform: uppercase;
  font-size: 1.0rem;
  a, a:visited, a:active {
    color: #290f29;
    text-decoration: none;
  }
  a:hover, a.active {
    text-decoration: underline;
  }
  @media ${device.mediaQuery.tablet} { 
    font-size: 1.5rem;
  }
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
              <Link to={`${menuLink.link}`} activeClassName="active">{menuLink.name}</Link>
            </StyledNavItem>
          )
        })}
      </StyledNav>
    )}
  />
)

export default Nav
