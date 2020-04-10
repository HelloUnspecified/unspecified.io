import React from "react"
import styled from "styled-components"
import ContactForm from "./contactFrom"
import Icon from "./shared/icon"
import colors from "../utilities/colors"
import { below } from "../utilities/breakpoint"

const ContactSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${below.med`
    flex-direction: column;
  `};
`

const Block = styled.div`
  width: 45%;

  ${below.med`
    width: 100%;
  `};
`

const IconBlock = styled.div`
  height: 7rem;
  width: 7rem;
  border-radius: 4rem;
  background-color: ${colors.linen};
  margin: 2rem;

  fill: ${colors.red};
`

const Socials = styled.div`
  display: flex;
`

const Contact = () => {
  return (
    <ContactSection>
      <Block>
        <h2>Stay In Touch</h2>
        <Socials>
          <IconBlock>
            <Icon
              icon="linkedIn"
              height="2rem"
              width="2rem"
              viewBoxWidth="24"
              viewBoxHeight="20"
              style={{ padding: "1.8rem", paddingTop: "1rem" }}
            />
          </IconBlock>
          <IconBlock>
            <Icon
              icon="facebook"
              height="2rem"
              width="2rem"
              viewBoxWidth="24"
              viewBoxHeight="20"
              style={{ padding: "1.25rem" }}
            />
          </IconBlock>
        </Socials>
      </Block>
      <Block>
        <h2>Get In Touch</h2>
        <ContactForm />
      </Block>
    </ContactSection>
  )
}

export default Contact
