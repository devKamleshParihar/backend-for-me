import React from 'react'

const Counter = ({
  counter = 0,
}) => {
  return (
    <>
    <div className="text-green-400 text-2xl m-10" >{counter}</div>
    </>
  )
}

export default Counter