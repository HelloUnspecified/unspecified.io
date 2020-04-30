import React from "react"
import styled from "styled-components"
import ContactForm from "./contactForm"
import Icon from "./shared/icon"
import SignUpForm from "./shared/singUpForm"
import { below, colors, socials } from "../utilities"

const ICON_SIZE = "5.5rem"

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
  width: ${ICON_SIZE};

  &:hover {
    fill: ${colors.gold};
  }
`

const Socials = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`

const SmsLink = styled.a`
  color: ${colors.red};
  font-weight: 800;

  &:hover {
    color: ${colors.gold};
  }
`

const Contact = () => {
  return (
    <ContactSection>
      <Block>
        <h2>Stay In Touch</h2>
        <Socials>
          {socials
            .filter(social => social.url !== undefined)
            .map(social => (
              <IconBlock key={social.icon}>
                <a href={social.url}>
                  <StyledIcon
                    icon={social.icon}
                    height={ICON_SIZE}
                    width={ICON_SIZE}
                    viewBoxWidth={social.viewbox.width}
                    viewBoxHeight={social.viewbox.height}
                  />
                </a>
                <p>{social.description}</p>
              </IconBlock>
            ))}
          <IconBlock>
            <a href="sms:+13122734442">
              <StyledIcon
                icon="sms"
                height={ICON_SIZE}
                width={ICON_SIZE}
                viewBoxWidth="100"
                viewBoxHeight="64"
              />
            </a>
            <p>
              Message us anytime at{" "}
              <SmsLink href="sms:+13122734442">(312) 273-4442</SmsLink>, we'd
              love to hear from you!
            </p>
          </IconBlock>
        </Socials>
        {/* <div style={{ alignSelf: "flex-end", width: "100%" }}>
          <h2 style={{ marginBottom: 0, paddingTop: "4rem" }}>Sign Up!</h2>
          <p>
            To connect directly to us and be the first to hear all Unspecified
            happenings.
          </p>
          <SignUpForm />
        </div> */}
      </Block>
      <Block>
        <h2 style={{ marginBottom: 0, paddingBottom: 0 }}>Get In Touch</h2>
        <ContactForm />
      </Block>
    </ContactSection>
  )
}

export default Contact
