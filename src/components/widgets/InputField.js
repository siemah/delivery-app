import React from 'react'

export default function InputField({ name, type='text', label=null, onChange=null, ...props}) {
  return (
    <label forHtml={name}>
      {label}
      <input type={type} onChange={onchange} {...props} />
    </label>
  )
}
