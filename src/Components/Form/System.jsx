import React from 'react'

export default function System(props) {
  const {checkboxName, checkboxValue, id, checked} = props
  return (
    <label>
      <input type="checkbox" {checked} name={checkboxName} id={id} />
      {checkboxValue}
    </label>
  )
}
