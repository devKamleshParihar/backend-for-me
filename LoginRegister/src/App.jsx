import { Google, Apple, Facebook } from "react-bootstrap-icons";
import cartoon from "./cartoon.png";

function App() {
  const img = "cartoon.png";
  return (
    <>
      <div>
        <div className=" p-4 justify-start flex pl-10 h-[10%] ">
          <div className="text-xl font-semibold text-gray-700 cursor-pointer">
            Your Logo
          </div>
        </div>
        <div className="flex  ">
          <div className="flex w-[45%]">
            <div className=" w-[90%] flex flex-col  pt-10 pl-20    ml-20 ">
              <div className="text-3xl flex mb-3 font-bold">Sign in to</div>
              <div className="text-2xl  flex ">Lorem ipsum dolor sit amet.</div>
              <div className="text-lg flex pt-10 text-gray-600">
                If you don't have an account register
              </div>
              <div className="text-lg flex text-gray-600 ">
                you can{" "}
                <span className="pl-2 cursor-pointer text-[rgba(1,1,255,0.9)] font-semibold">
                  {" "}
                  Register here !
                </span>
              </div>
              <div className="flex justify-end pr-10">
                <img
                  style={{
                    filter: "drop-shadow(0 8px 6px rgba(1, 1, 255, 0.9))",
                  }}
                  className="h-[350px]  mr-20 "
                  src={cartoon}
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div className="flex w-[50%]  justify-center ">
            <div className="h-[600px] pl-5 w-[450px]  ">
              <div className=" font-semibold text-xl flex  mt-20 ">Sign in</div>

              <form action="/">
                <input
                  className="h-10 w-[70%] pl-3   rounded-md mt-5    placeholder:text-purple-700  bg-[rgba(1,1,255,0.2)]"
                  type="email"
                  required
                  placeholder="Enter your Name"
                />
                <input
                required
                  className="h-10 w-[70%] pl-3   rounded-md mt-10   placeholder:text-purple-700 bg-[rgba(1,1,255,0.2)]"
                  type="password"
                  placeholder="Enter your Password"
                />

                <div   className="flex justify-center ml-10 mt-1 text-gray-600 text-sm  cursor-pointer ">
                  Forget Password ?
                </div>

                <button
                  className="h-10 w-[70%] text-white text-lg pl-3  rounded-md mt-14  bg-[rgba(1,1,255,0.9)] cursor-pointer">
                  Login</button>
              </form>
              <div className="pl-20">
                <div className="flex ml-8 mt-14">or continue</div>
              </div>
              <div className="pl-5 cursor-pointer">
                <div className="flex  ml-20 mt-14 ">
                  <Google className="mr-3 text-red-700" size={25} />
                  <Facebook className="mr-3 text-blue-700" size={25} />
                  <Apple className="mr-3 text-black" size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
