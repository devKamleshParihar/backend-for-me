import { useState } from "react"
// import Input from "./components/Input"


function App() {
  let [data ,setData] = useState('');
  let [submitData ,setSubmitData] = useState('');

  function eventHandler(e){
    setData(e.target.value)
  }
  let arr = [];
  
  arr.push(data);
  function submitEventHandler(e){
    e.preventDefault();

    setSubmitData(data);
  }


  return (
    <>
    <div className="flex bg-gray-200 h-screen justify-center items-center">
      <div className=" flex h-[500px] w-[500px] bg-white rounded-lg justify-center shadow-gray-400 shadow-lg ">
        <div>
          <h1 className="text-3xl flex justify-center mb-5">Task Manager</h1>
          <form action="" onSubmit={submitEventHandler}>
            <input type="text" value={data} onChange={eventHandler} className="border rounded-md border-black m-2"/>
            <button  type ='submit'  className="border rounded p-1 w-20 bg-black text-white ">Submit</button>
            <button className="border rounded p-1 w-20 bg-black text-white "> + New</button>
            {
              arr.map(value=> <div>{value}</div>)
            }
           <div>{submitData}</div>
          

          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
