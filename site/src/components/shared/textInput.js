import React, { useState } from "react"

const TextInput = ({ field, label, name, type }) => {
  const [hasFocus, setHasFocus] = useState(false)

  return (
    <div>
      <label for={field} className={hasFocus ? "active" : ""}>
        {label}
      </label>
      <input
        id={field}
        name={name}
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
