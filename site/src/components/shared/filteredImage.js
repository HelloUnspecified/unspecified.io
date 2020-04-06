import React from "react"
import styled from "styled-components"

const ImageFilter = styled.figure`
  position: relative;
  float: left;
  cursor: pointer;

  &:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(205,51,65);
  transition: all .3s linear;

  &:hover:before { background: none; }
`

const StyledImage = styled.img`
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  opacity: 0.5;
`

const FilteredImage = ({ alt, className, height, width, imageSrc }) => {
  return (
    <ImageFilter style={{ width, height }}>
      <StyledImage
        className={className}
        src={imageSrc}
        alt={alt}
        style={{ width, height }}
      />
    </ImageFilter>
  )
}

export default FilteredImage
