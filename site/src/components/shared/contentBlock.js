import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import colors from "../../utilities/colors"

const BorderedBlock = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  border: ${props => props.borderSettings};
  border-top: none;
  border-left: ${props =>
    props.side === "left" ? props.borderSettings : "none"};
  border-right: ${props =>
    props.side === "right" ? props.borderSettings : "none"};
  border-bottom: ${props => props.borderSettings};
  border-bottom-right-radius: ${props => (props.side === "right" ? "2rem" : 0)};
  border-bottom-left-radius: ${props => (props.side === "left" ? "2rem" : 0)};

  position: relative;
  padding: 7rem 9rem;
`

const BottomPadding = styled.div`
  min-height: 4rem;
  margin: 0 auto;
  max-width: 120rem;
  border: ${props => props.borderSettings};
  border-top: ${props => props.borderSettings};
  border-right: ${props =>
    props.side === "left" ? props.borderSettings : "none"};
  border-left: ${props =>
    props.side === "right" ? props.borderSettings : "none"};
  border-bottom: none;
  border-top-right-radius: ${props => (props.side === "left" ? "2rem" : 0)};
  border-top-left-radius: ${props => (props.side === "right" ? "2rem" : 0)};
  position: relative;
  right: ${props => (props.side === "left" ? "-2rem" : "unset")};
  left: ${props => (props.side === "right" ? "-2rem" : "unset")};
  top: -${props => props.borderSize};
`

const ContentBlock = ({
  children,
  border,
  borderColor,
  borderSize,
  bottomBlock,
  id,
  side,
}) => {
  const borderSettings = border
    ? `${borderSize} solid ${colors[borderColor]}`
    : "none"
  console.log("bottom---", bottomBlock.length, bottomBlock)
  return (
    <div id={id}>
      <BorderedBlock
        borderSettings={borderSettings}
        borderSize={borderSize}
        side={side}
      >
        {children}
      </BorderedBlock>
      <BottomPadding
        borderSettings={borderSettings}
        borderSize={borderSize}
        side={side}
      >
        {bottomBlock && bottomBlock}
      </BottomPadding>
    </div>
  )
}

ContentBlock.propTypes = {
  border: PropTypes.bool,
  borderColor: PropTypes.string,
  borderSize: PropTypes.string,
  bottomBlock: PropTypes.array,
  side: PropTypes.string,
}

ContentBlock.defaultProps = {
  border: false,
  borderSize: "0.3rem",
  borderColor: "gold",
  bottomBlock: [],
  side: "left",
}

export default ContentBlock
