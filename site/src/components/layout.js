/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import colors from "../utilities/colors"
import { below } from "../utilities/breakpoint"
import Header from "./header"
import Icon from "./shared/icon"
import "./layout.css"

const StyledFooter = styled.footer`
  min-height: 15rem;
  background-color: #242e3c;
  color: #ffffff;
  text-transform: uppercase;
  font-family: "Coda", cursive;
  display: flex;
  padding: 3rem;

  ${below.med`
    flex-direction: column;
  `};
`

const NavText = styled.p`
  font-family: "Coda", cursive;
  font-size: 2.1rem;
  padding: 0 3rem;
  color: ${colors.fonts.light};

  &:hover {
    color: ${colors.gold};
  }
`

const Email = styled.div`
  font-family: "Coda", cursive;
  font-size: 1.5rem;
  color: ${colors.gold};
  display: flex;
  flex-grow: 2;
  justify-content: flex-end;
  margin-right: 2rem;
  align-items: center;
`

const StyledIcon = styled(Icon)`
  fill: ${colors.gold};
  padding-right: 1rem;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <StyledFooter>
          <div>
            <Link to="#about">
              <NavText>About</NavText>
            </Link>
            <Link to="#blog">
              <NavText>Blog</NavText>
            </Link>
            <Link to="#contact">
              <NavText>Contact</NavText>
            </Link>
          </div>
          <div>© {new Date().getFullYear()}, Unspecified</div>
          <div>
            <Email>
              <StyledIcon
                icon="email"
                height="3rem"
                width="3rem"
                viewBoxWidth="24"
                viewBoxHeight="20"
              />
              <p style={{ margin: 0 }}>hello@unspecified.io</p>
            </Email>
          </div>
        </StyledFooter>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
