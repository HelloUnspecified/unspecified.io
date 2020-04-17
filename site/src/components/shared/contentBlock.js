import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { below, colors } from "../../utilities"

const Top = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  min-height: 4rem;
  display: flex;
`

const TopCurve = styled.div`
  display: ${props =>
    props.type === "short" && !props.displayBorder ? "none" : "flex"};
  min-height: 4rem;
  width: 100%;
  border-left: ${props =>
    props.displayBorder && props.side === "left"
      ? props.borderSettings
      : "none"};
  border-right: ${props =>
    props.displayBorder && props.side === "right"
      ? props.borderSettings
      : "none"};

  ${below.med`
    border: none;
  `};
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

  ${below.med`
    border: none;
  `};
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

  ${below.med`
    border: none;
  `};
`

const BorderedBlock = styled.div`
  margin: 0 auto;
  max-width: ${props => (props.type === "wide" ? "100%" : "120rem")};
  border-top: none;
  border-left: ${props =>
    props.side === "left" && props.border ? props.borderSettings : "none"};
  border-right: ${props =>
    props.side === "right" && props.border ? props.borderSettings : "none"};
  border-bottom: none;
  position: relative;
  padding: ${props =>
    `${props.type === "short" ? "1rem" : "5rem"} ${
      props.type === "wide" ? "1rem" : "9rem"
    }`};
  position: relative;
  top: -0.3rem;

  ${below.med`
    border: none;
    padding: 2rem 3rem;
  `};
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
    props.side === "right" && props.border ? props.borderSettings : "none"};
  border-left: ${props =>
    props.side === "left" && props.border ? props.borderSettings : "none"};
  border-bottom: ${props => (props.border ? props.borderSettings : "none")};
  border-bottom-right-radius: ${props =>
    props.side === "right" && props.border ? "2rem" : 0};
  border-bottom-left-radius: ${props =>
    props.side === "left" && props.border ? "2rem" : 0};

  ${below.med`
    border: none;
  `};
`

const BottomPadding2 = styled.div`
  min-height: 4rem;
  margin: 0 auto;
  flex-grow: 2;
  border-top: ${props =>
    props.bottomSpillOver ? "none" : props.borderSettings};
  border-right: ${props =>
    props.side === "left" ? props.borderSettings : "none"};
  border-left: ${props =>
    props.side === "right" ? props.borderSettings : "none"};
  border-bottom: none;
  border-top-right-radius: ${props =>
    props.side === "left" && !props.bottomSpillOver ? "2rem" : 0};
  border-top-left-radius: ${props =>
    props.side === "right" && !props.bottomSpillOver ? "2rem" : 0};
  position: relative;
  top: -0.3rem;
  margin-bottom: -0.6rem;

  ${below.med`
    border: none;
  `};
`

const ContentBlock = ({
  children,
  className,
  border,
  borderColor,
  borderSize,
  bottom,
  bottomBlock,
  bottomSpillOver,
  id,
  side,
  top,
  topSpillOver,
  type,
}) => {
  const borderSettings = `${borderSize} solid ${colors[borderColor]}`

  return (
    <div id={id}>
      <Top>
        <TopCurve
          side={side}
          borderSettings={borderSettings}
          displayBorder={(border && !top) || topSpillOver}
          type={type}
        >
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
        bottomSpillOver={bottomSpillOver}
        border={border}
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
          border={border}
        ></BottomPadding1>
        {side === "left" && <div style={{ width: "2rem" }} />}
      </Bottom>
      {(border || bottomSpillOver) && (
        <Bottom>
          {side === "left" && <div style={{ width: "2rem" }} />}
          <BottomPadding2
            borderSettings={borderSettings}
            borderSize={borderSize}
            side={side}
            bottomSpillOver={bottomSpillOver}
          ></BottomPadding2>
          {side === "right" && <div style={{ width: "2rem" }} />}
        </Bottom>
      )}
    </div>
  )
}

ContentBlock.propTypes = {
  border: PropTypes.bool,
  borderColor: PropTypes.string,
  borderSize: PropTypes.string,
  bottom: PropTypes.bool,
  bottomBlock: PropTypes.array,
  bottomSpillOver: PropTypes.bool,
  side: PropTypes.string,
  top: PropTypes.bool,
  topSpillOver: PropTypes.bool,
  type: PropTypes.string,
}

ContentBlock.defaultProps = {
  border: false,
  borderSize: "0.3rem",
  borderColor: "gold",
  bottomSpillOver: false,
  bottom: false,
  bottomBlock: [],
  side: "left",
  top: false,
  topSpillOver: false,
  type: "regular",
}

export default ContentBlock
