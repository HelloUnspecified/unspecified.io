import React from "react"
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
import ContentBlock from "./shared/contentBlock"
import styled from "styled-components"
import { colors } from "../utilities"

const StyleH2 = styled.h2`
  color: ${colors.white};
`

const TwitchVideo = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: colors.navy,
      }}
    >
      <ContentBlock bottomSpillOver side="left">
        <StyleH2>Watch Us Live</StyleH2>
        <ReactTwitchEmbedVideo channel="unspecifiedsoftware" width="100%" />
      </ContentBlock>
    </div>
  )
}

export default TwitchVideo
