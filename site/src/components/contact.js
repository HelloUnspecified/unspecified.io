import React from "react"
import styled from "styled-components"
import ContactForm from "./contactFrom"
import Icon from "./shared/icon"
import { below, colors, socials } from "../utilities"

const iconSize = "5.5rem"

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
  display: flex;
  flex-direction: column;

  ${below.med`
    width: 100%;

    &:not(:first-child) {
      margin-top: 7rem;
    }
  `};
`

const IconBlock = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  align-items: center;

  p {
    padding-left: 1rem;
    line-height: 1.4;
    flex-grow: 2;
    margin-bottom: 0;
  }
`

const StyledIcon = styled(Icon)`
  fill: ${colors.red};
  padding-right: 1rem;
  width: ${iconSize};

  &:hover {
    fill: ${colors.gold};
  }
`

const Socials = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`

const StyledInput = styled.input`
  margin-right: 2rem;
`

const FormFields = styled.div`
  display: flex;

  input {
    height: 5rem;
  }

  input[type="text"] {
    width: 50%;
  }

  input[type="submit"] {
    padding: 0 3rem;
  }
`

const Contact = () => {
  return (
    <ContactSection>
      <Block>
        <h2>Stay In Touch</h2>
        <Socials>
          {socials.map(social => (
            <IconBlock>
              <a href={social.url}>
                <StyledIcon
                  icon={social.icon}
                  height={iconSize}
                  width={iconSize}
                  viewBoxWidth={social.viewbox.width}
                  viewBoxHeight={social.viewbox.height}
                />
              </a>
              <p>{social.description}</p>
            </IconBlock>
          ))}
        </Socials>
        <div style={{ alignSelf: "flex-end", width: "100%" }}>
          <h2 style={{ marginBottom: 0, paddingTop: "4rem" }}>
            Chat With Us Now!
          </h2>
          <FormFields>
            <StyledInput type="text" placeholder="(___) ___-____" />
            <input
              className="primary"
              type="submit"
              value="Sign me up!"
              style={{ margin: 0 }}
            />
          </FormFields>
        </div>
      </Block>
      <Block>
        <h2 style={{ marginBottom: 0, paddingBottom: 0 }}>Get In Touch</h2>
        <ContactForm />
      </Block>
    </ContactSection>
  )
}

export default Contact
