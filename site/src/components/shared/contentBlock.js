import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import colors from "../../utilities/colors"

const Top = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  min-height: 4rem;
  display: flex;
`

const TopCurve = styled.div`
  min-height: 4rem;
  width: 100%;
  display: flex;
  border-left: ${props =>
    !props.top && props.side === "left" ? props.borderSettings : "none"};
  border-right: ${props =>
    !props.top && props.side === "right" ? props.borderSettings : "none"};
`

const TopSide = styled.div`
  min-height: 4rem;
  width: 3rem;
  border-top: ${props => props.borderSettings};
  border-left: ${props =>
    props.side === "left" ? props.borderSettings : "none"};
  border-right: ${props =>
    props.side === "right" ? props.borderSettings : "none"};
  border-top-right-radius: ${props => (props.side === "right" ? "2rem" : 0)};
  border-top-left-radius: ${props => (props.side === "left" ? "2rem" : 0)};
  position: relative;
  top: -0.3rem;
`

const TopPadding = styled.div`
  width: calc(50% - 2rem);
  border-bottom: ${props => props.borderSettings};
  border-left: ${props =>
    props.side === "right" ? props.borderSettings : "none"};
  border-right: ${props =>
    props.side === "left" ? props.borderSettings : "none"};
  border-bottom-right-radius: ${props => (props.side === "left" ? "2rem" : 0)};
  border-bottom-left-radius: ${props => (props.side === "right" ? "2rem" : 0)};
`

const BorderedBlock = styled.div`
  margin: 0 auto;
  max-width: ${props => (props.type === "wide" ? "100%" : "120rem")};
  border-top: none;
  border-left: ${props =>
    props.side === "left" ? props.borderSettings : "none"};
  border-right: ${props =>
    props.side === "right" ? props.borderSettings : "none"};
  border-bottom: none;
  position: relative;
  padding: ${props =>
    `${props.type === "short" ? "1rem" : "5rem"} ${
      props.type === "wide" ? "1rem" : "9rem"
    }`};
  position: relative;
  top: -0.3rem;
`

const Bottom = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  min-height: 4rem;
  display: flex;
  position: relative;
  top: -0.3rem;
`

const BottomPadding1 = styled.div`
  min-height: 4rem;
  margin: 0 auto;
  flex-grow: 2;
  border-right: ${props =>
    props.side === "right" ? props.borderSettings : "none"};
  border-left: ${props =>
    props.side === "left" ? props.borderSettings : "none"};
  border-bottom: ${props => props.borderSettings};
  border-bottom-right-radius: ${props => (props.side === "right" ? "2rem" : 0)};
  border-bottom-left-radius: ${props => (props.side === "left" ? "2rem" : 0)};
`

const BottomPadding2 = styled.div`
  min-height: 4rem;
  margin: 0 auto;
  flex-grow: 2;
  border-top: ${props => props.borderSettings};
  border-right: ${props =>
    props.side === "left" ? props.borderSettings : "none"};
  border-left: ${props =>
    props.side === "right" ? props.borderSettings : "none"};
  border-bottom: none;
  border-top-right-radius: ${props => (props.side === "left" ? "2rem" : 0)};
  border-top-left-radius: ${props => (props.side === "right" ? "2rem" : 0)};
  position: relative;
  top: -0.3rem;
  margin-bottom: -0.6rem;
`

const ContentBlock = ({
  children,
  className,
  border,
  borderColor,
  borderSize,
  bottom,
  bottomBlock,
  id,
  side,
  top,
  type,
}) => {
  const borderSettings = border
    ? `${borderSize} solid ${colors[borderColor]}`
    : "none"

  return (
    <div id={id}>
      <Top>
        <TopCurve top={top} side={side} borderSettings={borderSettings}>
          {top && <div style={{ width: "2rem" }} />}
          {top && <TopPadding borderSettings={borderSettings} side={side} />}
          <div />
        </TopCurve>
      </Top>
      {top && (
        <Top>
          <TopSide top={top} side={side} borderSettings={borderSettings} />
          <div style={{ flexGrow: 2 }} />
        </Top>
      )}
      <BorderedBlock
        borderSettings={borderSettings}
        borderSize={borderSize}
        side={side}
        top={top}
        className={className}
        type={type}
      >
        {children}
      </BorderedBlock>

      <Bottom>
        {side === "right" && <div style={{ width: "2rem" }} />}
        <BottomPadding1
          borderSettings={borderSettings}
          borderSize={borderSize}
          side={side}
          bottom={bottom}
        ></BottomPadding1>
        {side === "left" && <div style={{ width: "2rem" }} />}
      </Bottom>
      <Bottom>
        {side === "left" && <div style={{ width: "2rem" }} />}
        <BottomPadding2
          borderSettings={borderSettings}
          borderSize={borderSize}
          side={side}
          bottom={bottom}
        ></BottomPadding2>
        {side === "right" && <div style={{ width: "2rem" }} />}
      </Bottom>
    </div>
  )
}

ContentBlock.propTypes = {
  border: PropTypes.bool,
  borderColor: PropTypes.string,
  borderSize: PropTypes.string,
  bottom: PropTypes.bool,
  bottomBlock: PropTypes.array,
  side: PropTypes.string,
  top: PropTypes.bool,
  type: PropTypes.string,
}

ContentBlock.defaultProps = {
  border: false,
  borderSize: "0.3rem",
  borderColor: "gold",
  bottom: false,
  bottomBlock: [],
  side: "left",
  top: false,
  type: "regular",
}

export default ContentBlock
