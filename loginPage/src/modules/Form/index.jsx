import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {useNavigate} from 'react-router-dom'

const Form = ({ isSignInPage = true }) => {
  const [data, setData] = useState({
    ...(!isSignInPage && {
      fullName: "",
    }),
    email: "",
    password: "",
  });

  const navigate = useNavigate()
  const navigateuser = (e)=>{
    e.preventDefault()
    navigate(`/users/${isSignInPage ? 'sign_up':'sign_in'}`)
  }

  const handleSubmit = async (e)=>{
   try {
    e.preventDefault()
    console.log(data)


    const res = await fetch(`http://localhost:1000/api/${isSignInPage ? 'login' : 'register'}`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    const resData = await res.json()
    console.log(resData);
    
   } catch (error) {
    console.log(error);
    
   }

  }
  return (
    <div className="bg-[#e1edff] h-screen flex justify-center items-center">
      <div className="bg-white w-[500px] h-[600px] border shadow-lg rounded-lg  flex flex-col justify-center items-center">
        <div className="text-4xl font-extrabold">
          Welcome {isSignInPage && "Back"}
        </div>
        <div className="text-xl font-light mb-10">
          {isSignInPage
            ? "sign in to get explore"
            : "sign up now to get started"}{" "}
        </div>

        <form
          className="flex flex-col items-center w-full " onSubmit={(e) => handleSubmit(e)}
        >
          {!isSignInPage && (
            <Input
              label="Full Name"
              namee="name"
              placeholder="Enter Your Full Name"
              className="mb-6"
              value={data.fullName}
              onchange={(e) => setData({ ...data, fullName: e.target.value })}
            />
          )}
          <Input
            
            namee="email"
            placeholder="Enter Your Email Address"
            className="mb-6"
            value={data.email}
            onchange={(e) => setData({ ...data, email: e.target.value })}
          />
          <Input
            
            namee="password"
            placeholder="Enter Your Password"
            className="mb-8"
            value={data.password}
            onchange={(e) => setData({ ...data, password: e.target.value })}
          />
          <Button
            label={isSignInPage ? "Sign in" : "Sign up"}
            className="mt-4 w-1/2"
          />
        </form>

        <div>
          
          {isSignInPage
            ? "Din'nt have an account"
            : "Already have an accound ?"}
          {
            <span className="text-primary cursor-pointer underline " onClick={(e)=>navigateuser(e)}>
              {isSignInPage ? "sign up" : "sign in"}
            </span>
          }
        </div>
      </div>
    </div>
  );
};

export default Form;
