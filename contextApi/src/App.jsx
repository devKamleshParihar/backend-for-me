import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";



function App() {
  return (
    <UserContextProvider>
      <div>chai aur code</div>
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
}

export default App;
