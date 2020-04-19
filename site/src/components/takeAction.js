import React, { useState } from "react"
import styled from "styled-components"
import PhoneInput from "../components/shared/phoneInput"
import { colors } from "../utilities"

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
      <FormFields>
        <PhoneInput />
        <input
          className="primary"
          type="submit"
          value="Sign me up!"
          style={{ margin: 0 }}
        />
      </FormFields>
      <p
        style={{ paddingTop: "3rem", fontSize: "2.4rem", textAlign: "center" }}
      >
        Chat with us TODAY! Text us at{" "}
        <SmsLink href="sms://+13122734442" style={{ fontWeight: 600 }}>
          (312) 273 4442
        </SmsLink>
      </p>
    </div>
  )
}

export default TakeAction
