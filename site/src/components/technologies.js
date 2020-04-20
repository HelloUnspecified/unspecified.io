import React from "react"
import styled from "styled-components"
import Cloud from "./shared/svgs/cloud"
import Device from "./shared/svgs/device"
import Mobile from "./shared/svgs/mobile"
import Website from "./shared/svgs/website"
import { below, colors } from "../utilities"

const PLATFORM_ICON_SIZE = "8rem"

const PlatformList = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: space-evenly;

  ${below.small`
    flex-wrap: wrap;
  `};
`

const Platform = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 2.2rem;
  }
`

const TechnologyBlock = styled.div`
  border-top: 0.1rem solid ${colors.gold};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
  position: relative;
  padding-top: 3rem;
`

const TechnologyLogo = styled.img`
  height: 6rem;
  width: auto;
  margin: 1rem 2rem;
`

const Technologies = ({ technologies }) => {
  return (
    <div>
      <p style={{ lineHeight: "1.9" }}>
        We don't just build products, we build solutions to solve problems. To
        make experiences better. To bring you and your business more closely
        connected to your customer across all the platforms you operate on.
      </p>
      <PlatformList>
        <Platform key="website">
          <Website
            height={PLATFORM_ICON_SIZE}
            width={PLATFORM_ICON_SIZE}
            fill={colors.navy}
          />
          <p>Website</p>
        </Platform>
        <Platform key="device">
          <Device
            height={PLATFORM_ICON_SIZE}
            width={PLATFORM_ICON_SIZE}
            fill={colors.navy}
          />
          <p>Device</p>
        </Platform>
        <Platform key="mobile">
          <Mobile
            height={PLATFORM_ICON_SIZE}
            width={PLATFORM_ICON_SIZE}
            fill={colors.navy}
          />
          <p>Mobile</p>
        </Platform>

        <Platform key="cloud">
          <Cloud
            height={PLATFORM_ICON_SIZE}
            width={PLATFORM_ICON_SIZE}
            fill={colors.navy}
          />
          <p>Cloud</p>
        </Platform>
      </PlatformList>
      <TechnologyBlock>
        <p style={{ lineHeight: "1.9" }}>
          Always reaching for the right tool for job we are constantly pushing
          the envelope of new technologies and stacks. Our experience runs deep
          through decades of engineering experience but here is a glimpse at
          what we are currently passionate about...
        </p>
        {technologies.map(technology => (
          <TechnologyLogo
            src={technology.node.logo.asset.url}
            key={technology.node.name}
          />
        ))}
      </TechnologyBlock>
    </div>
  )
}

export default Technologies
