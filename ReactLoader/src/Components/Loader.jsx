import React from 'react'
import './App.css'

const Loader = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-scrren">
      <div className="  border-8 border-solid border-red-800 w-screen  "></div>
      <p>Loading...</p>
    </div>
  )
}

export default Loader