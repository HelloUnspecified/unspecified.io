import React, { useState } from "react"
import styled from "styled-components"

const TextInput = ({ field, label, type }) => {
  const [hasFocus, setHasFocus] = useState(false)
  const [currentValue, setCurrentValue] = useState("")

  return (
    <div>
      <label for={field} className={hasFocus ? "active" : ""}>
        {label}
      </label>
      <input
        id={field}
        type={type}
        onFocus={e => {
          setHasFocus(true)
        }}
        onBlur={e => {
          if (e.target.value.length === 0) {
            setHasFocus(false)
          }
        }}
      />
    </div>
  )
}

export default TextInput
