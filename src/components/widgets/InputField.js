import React from 'react'

<<<<<<< HEAD
export default function InputField({ name, type='text', label=null, onChange=null, ...props}) {
  return (
    <label forHtml={name}>
      {label}
      <input type={type} onChange={onchange} {...props} />
=======
export default ({name='',type='text', label=null, onChange=()=>{}, ...props}) => {
  return (
    <label htmlFor={name} >
      { label }&nbsp;
      <input name={name} id={name} type={type} onChange={onChange} {...props} />
>>>>>>> d43d2e864fed95f855267a49522192688c347a89
    </label>
  )
}
