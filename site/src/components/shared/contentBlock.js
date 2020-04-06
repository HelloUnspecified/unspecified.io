import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import colors from "../../utilities/colors"

const BorderedBlock = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  border: ${props => props.borderSettings};
  border-top: none;
  border-left: ${props => props.borderSettings};
  border-right: none;
  border-bottom: ${props => props.borderSettings};
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: -2rem;
  position: relative;
  padding: 7rem 9rem;
`

const BottomPadding = styled.div`
  height: 4rem;
  margin: 0 auto;
  max-width: 120rem;
  border: ${props => props.borderSettings};
  border-top: ${props => props.borderSettings};
  border-right: ${props => props.borderSettings};
  border-left: none;
  border-bottom: none;
  border-top-right-radius: 2rem;
  position: relative;
  right: -2rem;
  top: -${props => props.borderSize};
`

const ContentBlock = ({ children, border, borderColor, borderSize }) => {
  const borderSettings = border
    ? `${borderSize} solid ${colors[borderColor]}`
    : "none"

  return (
    <div>
      <BorderedBlock borderSettings={borderSettings} borderSize={borderSize}>
        {children}
      </BorderedBlock>
      <BottomPadding borderSettings={borderSettings} borderSize={borderSize} />
    </div>
  )
}

ContentBlock.propTypes = {
  border: PropTypes.bool,
  borderColor: PropTypes.string,
  borderSize: PropTypes.string,
}

ContentBlock.defaultProps = {
  border: false,
  borderSize: "0.3rem",
  borderColor: "gold",
}

export default ContentBlock
