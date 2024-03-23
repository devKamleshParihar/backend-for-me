import React from 'react'

const Button = ({
    className={
      data:false
    },
    onClick
}) => {
  return (
    <>
<button className={` p-1 ml-7 bg-green-800 mb-10 pr-3 pl-3 ${className.data === false && 'bg-green-200'}`} onClick={()=>onClick(false)}>To-do</button> 
<button className={` p-1 bg-black mb-10 pr-3 pl-3 ${className.data === true && 'bg-green-200'}`} onClick={()=>onClick(true)}>Complete</button> 
    </>
                 )
}

export default Button