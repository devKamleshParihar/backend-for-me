import React, { useState,useContext } from 'react'
import UserContext from '../../Context/UserContext'


const Login = () => {
    const [username,setUsername] =useState('')
    const [Password,setPassword] =useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(username);
        setUser({username,Password})
    }

  return (
    <>
    <h1>Login</h1>
    <input
    value={username} 
    onChange={(e)=> setUsername(e.target.value)}
    type="text"
    placeholder='enter username'/>

    <input
    value={Password} 
    onChange={(e)=> setPassword(e.target.value)}
    type="text"
    placeholder='enter password'/>

    <button onClick={handleSubmit}>submit</button>
    </>
   
  )
}

export default Login