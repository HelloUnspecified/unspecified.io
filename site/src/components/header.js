import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import styled from "styled-components"

import Icon from "./shared/icon"
import LogoSq from "./shared/logoSq"
import colors from "../utilities/colors"
import { above, below } from "../utilities/breakpoint"

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
`

const StyledLogo = styled(LogoSq)`
  padding: 1rem 2rem;
  display: unset;
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
const MenuIcon = styled.div`
  display: inline-block;
  width: 4rem;

  &:hover {
    cursor: pointer;
  }

  ${below.med`
    right: 5rem;
  `};

  ${below.xsmall`
    right: 0;
  `};

  ${below.small`
    right: 0;
  `};

  &:after,
  &:before,
  div {
    background-color: ${colors.gold};
    border-radius: 0.25rem;
    content: "";
    display: block;
    height: 0.5rem;
    margin: 0.6rem 0;
    transition: all 0.3s ease-in-out;
  }

  &.open:before {
    transform: translateY(12px) rotate(135deg);
  }

  &.open:after {
    transform: translateY(-12px) rotate(-135deg);
  }

  &.open div {
    transform: scale(0);
  }
`

const Header = ({ siteTitle }) => {
  const [scrollY, setScrollY] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

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
    return parseInt(scrollY) > windowHeight / 2 ? "scrolled" : ""
  }

  return (
    <StyledHeader className={scrolled()}>
      <HeaderContent>
        <Link to="/">
          <StyledLogo />
        </Link>
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
        <MenuIcon
          onClick={() => setMenuOpen(!menuOpen)}
          className={menuOpen ? "open" : ""}
        >
          <div />
        </MenuIcon>
      </HeaderContent>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
