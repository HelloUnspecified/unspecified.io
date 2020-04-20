import React, { useState } from "react"
import styled from "styled-components"
import SignUpForm from "../components/shared/singUpForm"
import { colors } from "../utilities"

const SmsLink = styled.a`
  color: ${colors.red};

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
      <h2 style={{ marginBottom: 0 }}>Join Our Community!</h2>
      <p>
        Sign up to connect directly to us and be the first to hear all
        Unspecified happenings.
      </p>
      <SignUpForm />
      <p
        style={{ paddingTop: "3rem", fontSize: "2.4rem", textAlign: "center" }}
      >
        Chat with us TODAY! Text us at{" "}
        <SmsLink href="sms:+13122734442" style={{ fontWeight: 600 }}>
          (312) 273 4442
        </SmsLink>
      </p>
    </div>
  )
}

export default TakeAction
