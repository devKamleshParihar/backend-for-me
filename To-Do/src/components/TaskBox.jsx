import React from 'react'

const TaskBox = ({
  key,
  title,
  desc
}) => {
  return (
    <div key={key}
            className=" w-[44%] flex flex-col justify-center 
         text-white  bg-gray-800 mt-10 p-2  "
          >
            <div>

           <div className="flex text-green-500  text-xl">{title}</div>
           <div className="flex mb-4">{desc} </div>
            </div>
            <div>
            <button className="bg-black pr-5 p-1 pl-5 rounded-md mr-2 ml-2">Delete</button>
            <button className="bg-black pr-5 p-1 pl-5 rounded-md mr-2 ml-2">Complete</button>
            </div>
          </div>
  )
}

export default TaskBox