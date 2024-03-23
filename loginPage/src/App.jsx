import Form from "./modules/Form";
import Dashboard from "./components/Dashboard/";
import { Routes , Route,  Navigate } from "react-router-dom";

const ProtectedRoute = ({children,Auth=false}) =>{
  const isloggedIn = localStorage.getItem('user:token') !== null || false

if(!isloggedIn && Auth){
  console.log('login ', isloggedIn);
  return <Navigate to={'/users/sign_in'}/> 
}
else if(isloggedIn && ['/users/sign_in','/users/sign_up'].includes(window.location.pathname)){
  return <Navigate  to={'/'}/>
}
return children
}

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<ProtectedRoute Auth={false}><Dashboard /></ProtectedRoute>}/>

      <Route path='/users/sign_in' element={
        <ProtectedRoute>
          <Form isSignInPage={true}/>
        </ProtectedRoute>
      } />
      <Route path='/users/sign_up' element={
        <ProtectedRoute>
          <Form isSignInPage={false}/>
        </ProtectedRoute>
      } />
    </Routes>
    
     

  );
}

export default App;
