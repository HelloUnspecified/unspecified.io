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
import ContentBlock from "./shared/contentBlock"
import "./layout.css"

const iconSize = "3rem"

const StyledFooter = styled.footer`
  min-height: 15rem;
  background-color: ${colors.navy};
  color: ${colors.white};
  text-transform: uppercase;
  font-family: "Coda", cursive;
  display: flex;
  flex-direction: column;
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

const LogoContainer = styled.div`
  width: 35rem;
  margin-bottom: 1rem;

  ${below.med`
    width: 100%;
  `};
`

const Email = styled.div`
  font-family: "Coda", cursive;
  font-size: 1.5rem;
  color: ${colors.gold};
  display: flex;
  flex-grow: 2;
  justify-content: center;
  margin-right: 2rem;
  align-items: center;
`

const StyledIcon = styled(Icon)`
  fill: ${colors.gold};
  padding: 0 1.25rem;
`

const Copyright = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${colors.fonts.dark};
`

const LegalLink = styled(Link)`
  padding: 0 1rem;
  color: ${colors.fonts.dark};

  &:hover {
    color: ${colors.gold};
  }
`

const FooterTop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 3rem;

  ${below.med`
    flex-direction: column;
    align-content: center;
  `};
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
          <ContentBlock type="short">
            <FooterTop>
              <div>
                <LogoContainer>
                  <img src="/unspecified-logo-transparent.svg" />
                </LogoContainer>
              </div>
              <div style={{ display: "flex", alignSelf: "center" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Link to="#about">
                    <NavText>About</NavText>
                  </Link>
                  <Link to="#blog">
                    <NavText>Blog</NavText>
                  </Link>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Link to="#services">
                    <NavText>Services</NavText>
                  </Link>
                  <Link to="#contact">
                    <NavText>Contact</NavText>
                  </Link>
                </div>
              </div>
            </FooterTop>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "6rem",
              }}
            >
              <StyledIcon
                icon="email"
                height={iconSize}
                width={iconSize}
                viewBoxWidth="24"
                viewBoxHeight="20"
              />
              <StyledIcon
                icon="facebook"
                height={iconSize}
                width={iconSize}
                viewBoxWidth="24"
                viewBoxHeight="20"
              />{" "}
              <StyledIcon
                icon="linkedIn"
                height={iconSize}
                width={iconSize}
                viewBoxWidth="24"
                viewBoxHeight="20"
              />
              <StyledIcon
                icon="github"
                height={iconSize}
                width={iconSize}
                viewBoxWidth="24"
                viewBoxHeight="20"
              />
              <StyledIcon
                icon="youtube"
                height={iconSize}
                width={iconSize}
                viewBoxWidth="40"
                viewBoxHeight="26"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "2rem",
              }}
            >
              <LegalLink to="/terms-of-use">Terms of Use</LegalLink>
              <LegalLink to="/privacy-policy">Privacy Policy</LegalLink>
              <LegalLink to="/copyright-policy">Copyright Policy</LegalLink>
            </div>
            <Copyright>
              © {new Date().getFullYear()}, Unspecified <span>&trade;</span>
            </Copyright>
          </ContentBlock>
        </StyledFooter>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
