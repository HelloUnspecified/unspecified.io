import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import styled from "styled-components"

import LogoSq from "../components/logoSq"

const StyledHeader = styled.header`
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 7rem;
  padding: 1.5rem;
`

const Header = ({ siteTitle }) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setScrollY(window.pageYOffset)

    const handleScroll = () => {
      setScrollY(window.pageYOffset)
    }

    handleScroll()
    document.addEventListener("scroll", handleScroll)

    return () => document.removeEventListener("scroll", handleScroll)
  }, [])

  const scrolled = () => {
    return parseInt(scrollY) > 0 ? "scrolled" : ""
  }
  console.log("scrolled", scrolled())

  return (
    <StyledHeader>
      <Link to="/">
        <LogoSq />
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
