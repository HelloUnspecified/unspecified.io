import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import styled from "styled-components"

import LogoSq from "./shared/logoSq"
import colors from "../utilities/colors"

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
  }
`

const StyledLogo = styled(LogoSq)`
  padding: 1rem 2rem;
`

const Header = ({ siteTitle }) => {
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
    return parseInt(scrollY) > windowHeight / 2 ? "scrolled" : ""
  }

  return (
    <StyledHeader className={scrolled()}>
      <Link to="/">
        <StyledLogo />
      </Link>
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
