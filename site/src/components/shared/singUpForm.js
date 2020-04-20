import React, { useState } from "react"
import styled from "styled-components"
import PhoneInput from "./phoneInput"
import { below } from "../../utilities"

const FormFields = styled.div`
  display: flex;

  input {
    height: 5rem;

    ${below.small`
      width: 100%;
    `};
  }

  input[type="text"] {
    width: 50%;

    ${below.small`
      width: 100%;
      margin-bottom: 2rem;
    `};
  }

  input[type="submit"] {
    padding: 0 3rem;
  }

  ${below.small`
    flex-direction: column;
  `};
`

const SignUpForm = () => {
  return (
    <FormFields>
      <PhoneInput />
      <input
        className="primary"
        type="submit"
        value="Sign me up!"
        style={{ margin: 0 }}
      />
    </FormFields>
  )
}

export default SignUpForm
