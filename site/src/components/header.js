import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Icon from "./shared/icon"
import LogoSq from "./shared/logoSq"
import { colors } from "../utilities"

const StyledHeader = styled.header`
  position: fixed;
  z-index: 100;
  width: 100vw;
  overflow: hidden;
  line-height: 7rem;
  background-color: ${colors.navy};
  transition: all 0.5s ease-in-out;
  height: 0;

  &.scrolled {
    height: 7rem;
    box-shadow: 2px 2px 5px #888888;
  }
`

const HeaderContent = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  height: 7rem;
  display: flex;
  margin: 0 auto;
  max-width: 120rem;
`

const StyledLogo = styled(LogoSq)`
  padding: 1rem 2rem;
  display: unset;
  margin: 0;
`

const StyledIcon = styled(Icon)`
  fill: ${colors.gold};
  padding: 0 2rem;
  margin-top: 2rem;

  &:hover {
    fill: ${colors.red};
  }
`

const NavText = styled.p`
  font-family: "Coda", cursive;
  font-size: 2rem;
  padding: 0 1rem;
  color: ${colors.gold};
  margin-bottom: 0;

  &:hover {
    color: ${colors.red};
  }
`

const Header = ({ fixedHeader }) => {
  const [scrollY, setScrollY] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    setScrollY(window.pageYOffset)
    setWindowHeight(window.innerHeight)

    const handleScroll = () => {
      setScrollY(window.pageYOffset)
    }

    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    handleScroll()
    handleResize()
    document.addEventListener("scroll", handleScroll)
    document.addEventListener("resize", handleResize)

    return () => {
      document.removeEventListener("scroll", handleScroll)
      document.removeEventListener("resize", handleResize)
    }
  }, [])

  const scrolled = () => {
    if (fixedHeader || parseInt(scrollY) > 0) {
      return "scrolled"
    }
  }

  return (
    <StyledHeader className={scrolled()}>
      <HeaderContent>
        <Link to="/" style={{ paddingTop: "2.6rem" }}>
          <StyledLogo />
        </Link>
        <div style={{ flexGrow: 2 }} />
        <a href="/#about">
          <NavText>About</NavText>
        </a>
        <a href="/#blog">
          <NavText>Blog</NavText>
        </a>
        <a href="/#services">
          <NavText>Services</NavText>
        </a>
        <a href="/#contact">
          <StyledIcon
            icon="email"
            height="3rem"
            width="3rem"
            viewBoxWidth="24"
            viewBoxHeight="20"
          />
        </a>
      </HeaderContent>
    </StyledHeader>
  )
}

Header.propTypes = {
  fixedHeader: PropTypes.bool,
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  fixedHeader: false,
  siteTitle: ``,
}

export default Header
