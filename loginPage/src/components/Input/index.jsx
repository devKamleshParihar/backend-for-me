import React from 'react'

const Input = ({
  label='',
  namee='',
  type = 'text',
  className = '',
  isRequired = false,
  placeholder = '',
  value='',
  onchange = ()=>{}

}) => {
   
  return (
    <div className='w-1/2'>
        <label htmlFor={namee} className="block  text-sm font-medium text-gray-800">{label}</label>
        <input type={namee} id={namee} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${className}`} placeholder={placeholder} required={isRequired} value={value} onChange={onchange}  />
    </div>
  )
}

export default Input