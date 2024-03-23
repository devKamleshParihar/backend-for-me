import { useState } from "react";
import Counter from "./components/Counter"
import Buttom from "./components/Buttom";


function App() {

  let [counter , setCounter] = useState(0);
  const  addCounter = ()=>{
    setCounter(counter + 1 )
  }
  const  removeCounter = ()=>{
    if(counter!=0){
      setCounter(counter - 1 )
    }
  }


  return (
    <>
    <h1 className="flex justify-center text-3xl mt-20">Counter</h1>
     <div className="flex justify-center items-center rounded-md m-[0%]  ">
    <Counter counter = {counter}/>
    <Buttom value='Increase' onclick={addCounter}/>
    <Buttom value='Decrease' onclick={removeCounter}/>
     </div>
    </>
  )
}

export default App
