import React, { useState } from "react"
import styled from "styled-components"

// const PHONE_MASK = /^\((.{3})\)\s(.{3})-(.{4})$/
const PHONE_MASK = /^(.{0,3})(.{0,3})(.{0,4}?)$/
const PHONE_VALID = /^(\d{3})(\d{3})(\d{4})$/

const StyledInput = styled.input`
  margin-right: 2rem;
`

const PhoneInput = () => {
  const [mobileNumber, setMobileNumber] = useState("")
  const [formattedNumber, setFormattedNumber] = useState("")

  const inputChanged = event => {
    const newValueDigits = event.target.value.replace(/\D/g, "")
    const isDeleting =
      formatPhoneNumber({
        phoneNumberString: mobileNumber,
        isDeleting: false,
      }) > event.target.value

    setMobileNumber(newValueDigits)
    setFormattedNumber(
      formatPhoneNumber({
        phoneNumberString: event.target.value.substr(0, 14),
        isDeleting,
      })
    )
  }

  const blurInput = event => {
    // check to see if valid here
  }

  const formatPhoneNumber = ({ phoneNumberString, isDeleting }) => {
    const beginningParen = phoneNumberString[0] === "("
    var match = phoneNumberString.replace(/\D/g, "").match(PHONE_MASK)

    console.log("match", match)
    if (match) {
      let formattedNumber = []
      if (match[1] || beginningParen) {
        formattedNumber.push("(", match[1])
      }
      if (match[1].length >= 3 && match[2].length >= 1) {
        formattedNumber.push(") ", match[2])
      }
      if (match[1].length >= 3 && match[2].length === 0 && !isDeleting) {
        formattedNumber.push(") ")
      }
      if (
        (match[2].length >= 3 && match[3].length >= 0 && !isDeleting) ||
        (isDeleting && match[3].length > 0)
      ) {
        formattedNumber.push("-")
      }
      if (match[3].length > 0) {
        formattedNumber.push(match[3])
      }
      return formattedNumber.join("")
    }
    return null
  }

  return (
    <StyledInput
      type="text"
      placeholder="(555) 867-5309"
      onChange={e => inputChanged(e)}
      onBlur={e => blurInput(e)}
      value={formattedNumber}
    />
  )
}

export default PhoneInput
