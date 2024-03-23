import React from 'react'
import { NavLink } from "react-router-dom";


const AllLinks = () => {
  return (
    <div className="bg-gray-200  p-2 shadow-md shadow-gray-300 flex flex-row ">
        <div className="  m-2 font-semibold flex-auto ">
          <img
            className="h-7 mix-blend" 
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            alt="img_rapido"
          />
        </div>
        <div className="flex text-lg bg-flex-row font-semibold  justify-end ">
          
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-orange-700" : "text-black"}`
            }
          >
            <div className="m-2 hover:text-red-400 ">Home</div>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? "text-orange-700" : "text-black"}`
            }
          >
            <div className="m-2 hover:text-red-400 ">About</div>
          </NavLink>

          <NavLink
            to="/Header"
            className={({ isActive }) =>
              `${isActive ? "text-orange-700" : "text-black"}`
            }
          >
            <div className="m-2 hover:text-red-400 ">Header</div>
          </NavLink>

        </div>
      </div>
  )
}

export default AllLinks