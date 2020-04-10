import React from "react"
import styled from "styled-components"
import svgs from "../../utilities/svgs"

const Svg = styled.svg`
  width: auto;
  height: 100%;
`

const Icon = ({
  className,
  onClick,
  height,
  width,
  viewBoxHeight,
  viewBoxWidth,
  title,
  icon,
  style,
}) => {
  return (
    <Svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      height={height}
      width={width}
      style={style}
      viewBox={`
        0 0
        ${viewBoxWidth || width || "24"}
        ${viewBoxHeight || height || "24"}
       `}
    >
      <title>{title || svgs[icon].title}</title>
      {svgs[icon].path.map(item => {
        return <path key={item} d={item} />
      })}
    </Svg>
  )
}

export default Icon
