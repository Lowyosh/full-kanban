import React from 'react'
import { types } from 'util'

const Input = ({
  name,
  type,
  placeholder,
  value,
  disabled,
  fullWidth,
}:{
  name: string,
  type: string,
  placeholder?: string,
  value?: string,
  disabled?: boolean,
  fullWidth?: boolean
}) => {
  return (
    <input
    type="text"
    name='name'
    placeholder={placeholder}
    className={`h-20 bg-transparent border-b-white border-b-2 text-3xl w-4/5 self-center focus:outline-none ${disabled && "opaticity-50 cursor-default"} `}/>
  )
}

export default Input