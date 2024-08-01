import React from 'react'

const Button = ({
  text,
  type,
  onClick,
  disabled,
  confirmButton
}: {
  text: string,
  type?: "button" | "submit" | "reset",
  onClick?: () => void,
  disabled?: boolean,
  confirmButton?: boolean
}) => {
  return (
    <>
      <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`inline-flex h-10 rounded-md px-8 text-gray-700 text-sm font-medium shadow-sm transition-colors duration-300 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 items-center ${disabled && "opacity-50"} ${confirmButton ? "bg-green-500 hover:bg-green-600" : "bg-white text-slate-800"} `}>
        {text}
      </button>
    </>
  )
}

export default Button