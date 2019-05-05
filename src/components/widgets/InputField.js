import React from 'react'

export default ({name='',type='text', label=null, onChange=()=>{}, ...props}) => {
  console.log("object", props);
  return (
    <label htmlFor={name} >
      { label }&nbsp;
      <input name={name} id={name} type={type} onChange={onChange} {...props} />
    </label>
  )
}
