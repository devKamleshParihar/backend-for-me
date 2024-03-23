import React,{useState,useEffect} from 'react'
 
import { useLoaderData } from 'react-router-dom'

const Github = () => {
  const data = useLoaderData()

  // const [data ,setData]  = useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/devKamleshParihar')
  //   .then(res=> res.json())
  //   .then(res=> setData(res))
  // },[])
  return (
    <div className='text-center bg-gray-600 p-4 text-white text-3xl'>Github Followers : {data.followers}
    <img className=" justify-center items-center flex " src={data.avatar_url} alt="github user image" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader =  async ()=>{
  const res = await fetch('https://api.github.com/users/devKamleshParihar')
  return res.json()
}