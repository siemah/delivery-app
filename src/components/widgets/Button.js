import React from 'react'

export default function Button({ type='button', children, onClick=()=>{}, ...props}) {
  return (
    <button type={type} onClick={onClick} {...props}>
      { children }
    </button>
  )
}
