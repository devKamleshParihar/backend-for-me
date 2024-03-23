import { useState ,useEffect} from "react";
import Button from "./components/Button";
import TaskBox from "./components/TaskBox";

function App() {
  const [isComplete, setisComplete] = useState(false);
  const [allTodos , setAllTodos] =useState([]);
  const [newTitle , setnewTitle] =useState('');
  const [newDesc , setnewDesc] =useState('');

  const color = 'bg-green-800';
  const addTodoHandler = (e)=>{
   
    e.preventDefault()    
    let newTodoitem = {
      title:newTitle,
      desc:newDesc
    }
    let updateTodos = [...allTodos];
    updateTodos.push(newTodoitem)
    setAllTodos(updateTodos)
    localStorage.setItem('TodoList',JSON.stringify(updateTodos))
  }
  let handleDeleteTodo = index =>{
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index,1);
    setAllTodos(reducedTodo);
    localStorage.setItem('TodoList',JSON.stringify(reducedTodo))
  }

  useEffect(()=>{
    let savedTodos = JSON.parse(localStorage.getItem('TodoList'))
    if(savedTodos){
      setAllTodos(savedTodos)
    }
  },[])
 
  return (
    <>
      <div className="justify-center  flex flex-col">
        <div className="flex flex-col items-center    mr-1  justify-center     text-white">
          <div className=" flex justify-center ">
            <h1 className="text-3xl text-gray-300 mt-4 mb-4 p-2 ">My Todos</h1>
          </div>
          <div className="flex flex-row  justify-center">
            <div className="rounded bg-gray-700 justify-center items-center  m-3 ">
              <form
                action=""
                className=" border-b flex flex-row mr-5 ml-5 mt-10 mb-8"
              >
                <label htmlFor="">
                  Title :
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e)=> setnewTitle(e.target.value)}
                    className="w-[90%] border-xl border-red-900 text-black m-3 mb-7 pr-10 rounded bg-gray-200 border-spacing-0"
                    placeholder="What's the title of your To Do ?"
                  />
                </label>
                <label htmlFor="label">
                  Description :
                  <input
                    type="text"
                    value={newDesc}
                    onChange={(e)=> setnewDesc(e.target.value)}
                    className="w-[90%] border-xl border-red-900 m-3 pr-1 rounded text-black bg-gray-200 border-spacing-0"
                    placeholder="What's the title of your To Do ?"
                  />
                </label>
                <button onClick={addTodoHandler} className="bg-green-800 mt-8 p-2 rounded-md mb-5" >Add</button>
              </form>

              <button
                className={` p-1 ml-7 bg-black mb-10 pr-3 pl-3 ${isComplete === false && color}`} onClick={()=>setisComplete(false)}>
                To-do
              </button>
              <button
                className={` p-1 bg-black mb-10 pr-3 pl-3 
                    ${isComplete === true && color}`} onClick={()=>setisComplete(true)}>
                Complete
              </button>
              {
            allTodos.map((item,index)=>{
              return(
              // <TaskBox key={index} title={item.title} desc={item.desc}/>
              <div key={index}
            className="  max-w-[50%] over flex flex-col justify-center 
         text-white  bg-gray-800  shadow-black mt-0 shadow-lg m-5 p-2  "
          >
            <div>

           <div className="flex flex-co text-green-500  text-xl">{item.title}</div>
           <div className="flex mb-4">{item.desc} </div>
            </div>
            <div>
            <button className="bg-black pr-5 p-1 pl-5 rounded-md mr-2 ml-2 " onClick={()=>handleDeleteTodo(index)}>Delete</button>
            <button className="bg-black pr-5 p-1 pl-5 rounded-md mr-2 ml-2">Complete</button>
            </div>
          </div>
            )})
          }
            </div>
            
          </div>
         
        </div>
      </div>
    </>
  );
}

export default App;
