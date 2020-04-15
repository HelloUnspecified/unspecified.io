import React from "react"
import styled from "styled-components"

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
      <h2 style={{ marginBottom: 0 }}>Chat With Us Now!</h2>
      <p style={{ fontSize: "2rem" }}>
        Connect directly to us to chat, get word first as we deliver new
        products and content.
      </p>
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
  )
}

export default TakeAction
