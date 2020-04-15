import React from "react"
import TextInput from "../components/shared/textInput"

const ContactForm = () => {
  return (
    <form action="https://formspree.io/hello@unspecified.io" method="POST">
      <TextInput field="name" type="text" label="Your Name" />
      <TextInput field="email" type="email" label="Your Email Address" />

      <div className="formGroup">
        <textarea
          name="emailMessage"
          id="email-message"
          placeholder="Enter your message."
          rows="4"
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
          <input className="primary" type="submit" value="Send Message" />
          <input type="reset" value="Reset" />
        </div>
      </div>
    </form>
  )
}

export default ContactForm
