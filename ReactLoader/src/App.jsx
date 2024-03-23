import { useEffect, useState } from "react"
// import Loader from "./Components/Loader"

const Loader = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-scrren">
      <div className=" mt-[50%] border-8 border-solid border-red-800 w-12 h-12 rounded-full "></div>
      <p>Loading...</p>
    </div>
  )
}

function App() {
  const [loading ,setLoading] = useState(true)

  useEffect(() => {
    setTimeout(()=>{

      setLoading(false);
    },2000)

  },[])

  return (
    <>
    {loading ? (<Loader/>):(
      <div>
        <h1>Your Content</h1>
          <p>Other components or data</p>
      </div>
      
    )}

    
    </>
  )
}

export default App
