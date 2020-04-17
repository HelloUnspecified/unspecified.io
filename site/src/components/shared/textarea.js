import React, { useState } from "react"

const Textarea = ({ field, label, name, rows }) => {
  const [hasFocus, setHasFocus] = useState(false)

  return (
    <div>
      <label for={field} className={hasFocus ? "active" : ""}>
        {label}
      </label>
      <textarea
        id={field}
        name={name}
        rows={rows}
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

export default Textarea
