import React from 'react'

const Buttom = ({
    value = '',
    onclick = ()=>{}
}) => {
  return (
    <button onClick={onclick}className="bg-gray-400 text-black p-2 mr-5 rounded-sm">{value}</button>
  )
}

export default Buttom