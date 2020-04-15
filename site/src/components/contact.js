import React from "react"
import styled from "styled-components"
import ContactForm from "./contactFrom"
import Icon from "./shared/icon"
import colors from "../utilities/colors"
import { below } from "../utilities/breakpoint"

const iconSize = "3.9rem"

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
  margin-bottom: 1.25rem;

  p {
    padding-left: 1rem;
    padding-top: 0.9rem;
    flex-grow: 2;
  }
`

const StyledIcon = styled(Icon)`
  fill: ${colors.red};
  padding-right: 1rem;
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
          <IconBlock>
            <StyledIcon
              icon="email"
              height={iconSize}
              width={iconSize}
              viewBoxWidth="24"
              viewBoxHeight="20"
            />
            <p>Email us yo</p>
          </IconBlock>
          <IconBlock>
            <StyledIcon
              icon="facebook"
              height={iconSize}
              width={iconSize}
              viewBoxWidth="24"
              viewBoxHeight="20"
            />
            <p>facebooking the things</p>
          </IconBlock>
          <IconBlock>
            <StyledIcon
              icon="linkedIn"
              height={iconSize}
              width={iconSize}
              viewBoxWidth="24"
              viewBoxHeight="20"
            />
            <p>some words about our linkedin coolness</p>
          </IconBlock>
          <IconBlock>
            <StyledIcon
              icon="github"
              height={iconSize}
              width={iconSize}
              viewBoxWidth="24"
              viewBoxHeight="20"
            />
            <p>githubbbbsss</p>
          </IconBlock>
          <IconBlock>
            <StyledIcon
              icon="youtube"
              height={iconSize}
              width={iconSize}
              viewBoxWidth="40"
              viewBoxHeight="26"
            />
            <p>youtube</p>
          </IconBlock>
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
