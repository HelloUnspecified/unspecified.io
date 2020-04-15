import React from "react"
import { buildImageObj } from "../../../utilities/helpers"
import { imageUrlFor } from "../../../utilities/imageUrl"
import styled from "styled-components"

const FigureRoot = styled.figure`
  margin: 2rem 0;
  padding: 0;

  // @nest & img {
  //   width: 100%;
  //   height: auto;
  // }
`

const Caption = styled.figcaption`
  composes: small from "../typography.module.css";
  margin-top: 0.5rem;
`

function Figure(props) {
  return (
    <FigureRoot>
      {props.asset && (
        <img
          src={imageUrlFor(buildImageObj(props))
            .width(1200)
            .url()}
          alt={props.alt}
        />
      )}
      <Caption>{props.caption}</Caption>
    </FigureRoot>
  )
}

export default Figure
