import Link from 'antd/es/typography/Link'
import React from 'react'

function Button(props) {
    const { name, onClick} = props
  return (
    <button className='primary--btn' onClick={onClick}>
        {name}
    </button>
  )
}

export default Button