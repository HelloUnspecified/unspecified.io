import React, { useState } from "react"
import styled from "styled-components"
import TextInput from "./shared/textInput"
import Textarea from "./shared/textarea"

const FormMessage = styled.div`
  margin-top: 4rem;
`

const FORM_STATES = {
  LOADED: "loaded",
  SUBMITTING: "submitting",
  SUBMITTED: "submitted",
  ERROR: "error",
}

const ContactForm = () => {
  const [formState, setFormState] = useState(FORM_STATES.LOADED)

  const submitForm = event => {
    setFormState(FORM_STATES.SUBMITTING)

    event.preventDefault()
    const form = event.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()

    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setFormState(FORM_STATES.SUBMITTED)
      } else {
        setFormState(FORM_STATES.ERROR)
      }
    }
    xhr.send(data)
  }

  if (formState === FORM_STATES.SUBMITTED) {
    return (
      <FormMessage>
        Thanks! You are awesome and we look forward to connecting!
      </FormMessage>
    )
  }

  return (
    <form
      onSubmit={submitForm}
      action="https://formspree.io/xjvedbgq"
      method="POST"
    >
      <TextInput field="name" type="text" name="_name" label="Your Name" />
      <TextInput
        field="email"
        type="email"
        name="_replyto"
        label="Your Email Address"
      />

      <div className="formGroup">
        <Textarea
          name="_message"
          id="email-message"
          label="Enter your message."
          rows="6"
        />

        <input
          type="hidden"
          name="_next"
          value="http://unspecified.io/thanks"
        />
        <input
          type="hidden"
          name="_subject"
          value="Your message from http://Unspecified.io!"
        />
        <input type="text" name="_gotcha" style={{ display: "none" }} />
      </div>
      <div className="formGroup">
        <div className="formActions">
          <input
            className="primary"
            type="submit"
            value="Send Message"
            style={{ margin: "0 0.4rem" }}
          />
          <input type="reset" value="Reset" style={{ margin: "0 0.4rem" }} />
        </div>
      </div>
    </form>
  )
}

export default ContactForm
