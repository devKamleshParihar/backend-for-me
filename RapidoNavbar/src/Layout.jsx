import AllLinks from "./components/AllLinks/AllLinks";
import {Outlet} from 'react-router-dom'
import Footer from "./components/Footer/Footer";
function Layout() {
  return (
    <>
      <AllLinks/>
      <Outlet/>
      <Footer/>
      
    </>
  );
}

export default Layout;
