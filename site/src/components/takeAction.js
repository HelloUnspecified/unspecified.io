import React, { useState } from "react"
import styled from "styled-components"
import SignUpForm from "../components/shared/singUpForm"
import { colors } from "../utilities"

const SmsLink = styled.a`
  color: ${colors.red};
  font-weight: 800;

  &:hover {
    color: ${colors.gold};
  }
`

const TakeAction = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      <h2 style={{ marginBottom: 0 }}>Let's Chat!</h2>
      <p style={{ fontSize: "2.2rem" }}>
        Greetings, questions, conversations... you name it, we'd love to hear
        from you!
      </p>
      {/* <SignUpForm /> */}
      <p
        style={{
          paddingTop: "0.25rem",
          fontSize: "2.4rem",
          textAlign: "center",
        }}
      >
        Message us directly at{"  "}
        <SmsLink href="sms:+13122734442">(312) 273-4442</SmsLink>
      </p>
    </div>
  )
}

export default TakeAction
