import React, { useState } from "react"
import styled from "styled-components"
import { buildImageObj } from "../../../utilities/helpers"
import { imageUrlFor } from "../../../utilities/imageUrl"

const Root = styled.div`
  background: var(--color-black);
  color: var(--color-white);
  margin: 2rem -1.5rem;
  overflow: hidden;
  padding: 1rem;

  // @media (--media-min-small) {
  //   margin: 2rem -2rem;
  // }

  // @media (--media-min-medium) {
  //   margin: 2rem 0;
  // }
`

const Nav = styled.div`
  padding: 0.5rem 0.5rem 1rem;
  display: flex;
  justify-content: space-between;

  // @nest & button {
  //   outline: none;
  //   -webkit-font-smoothing: inherit;
  //   appearance: none;
  //   font: inherit;
  //   background: none;
  //   border: none;
  //   color: inherit;
  //   margin: 0;
  //   padding: 0;
  // }
`

const Carousel = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  transition: transform 250ms;
`

const Slide = styled.li`
  display: inline-block;
  vertical-align: middle;
  white-space: normal;
  box-sizing: border-box;
  padding: 0 0.5rem;

  // @nest & img {
  //   width: 100%;
  //   height: auto;
  // }
`

const Slideshow = props => {
  const [index, setIndex] = useState(0)

  if (!props.slides) return null

  const len = props.slides.length
  const handlePrev = () => {
    setIndex(Math.max(index - 1, 0))
  }
  const handleNext = () => {
    setIndex(Math.min(index + 1, len - 1))
  }

  return (
    <Root>
      <Nav>
        <button onClick={handlePrev} disabled={index === 0}>
          Prev
        </button>
        <span>
          {index + 1} of {len}
        </span>
        <button onClick={handleNext} disabled={index === len - 1}>
          Next
        </button>
      </Nav>
      <Carousel
        data-index={index}
        style={{ transform: `translate3d(${index * -100}%, 0, 0)` }}
      >
        {props.slides.map(slide => (
          <Slide key={slide._key}>
            {slide.asset && (
              <img
                src={imageUrlFor(buildImageObj(slide))
                  .width(1200)
                  .height(Math.floor((9 / 16) * 1200))
                  .fit("crop")
                  .url()}
              />
            )}
          </Slide>
        ))}
      </Carousel>
    </Root>
  )
}

export default Slideshow
