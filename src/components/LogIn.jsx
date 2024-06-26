import React, { useState } from "react";
import { ArrowRight, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import { NavLink } from "react-router-dom";

const LogIn = () => {
  

  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(isLoggedIn);

  const logOut = () => {
    
    localStorage.removeItem(userlogin);
    // setIsLoggedIn(false);
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("user_signup");
    console.log("user data storage", getuserArr);

    const { email, password } = inpval;
    if (email === "") {
      alert("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      alert("plz enter valid email addres",
         {
        position: "top-center",
      });
    }else if (password === "") {
      alert("password field is requred", {
        position: "top-center",
      });
    } else if (password.length <= 5) {
      alert("password length must greater five", {
        position: "top-center",
      });
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("invalid Email or Password");
        } else {
          alert(`you loged in succesfuly`);

          localStorage.setItem("user_login", JSON.stringify(userlogin));

          history("/layout/dashboard");
          
        }
      }
    }
    setIsLoggedIn(true);
  };

  return (
    <>
    <div className="hidden bg-gray-700">
    <Header className="" isLoggedIn={isLoggedIn} onLogOut={logOut}/>
    </div>
    <section className="w-full h-screen flex justify-center items-center">
      <div className="w-[80%] grid grid-cols-1 mt-5 shadow !rounded-md dark:bg-gray-700 !dark:rounded-md bg-white lg:grid-cols-2">
        <div className="w-full h-full flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="w-full h-full xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black dark:text-gray-300 sm:text-4xl">
              Sign In
            </h2>

            <p className="mt-4 text-base dark:text-gray-300 text-gray-600">
              Don't have an account{' '}
              <NavLink
                to="/signup"
                title=""
                className="font-medium text-blue-500 transition-all duration-200 hover:underline"
              >
                Sign Up
              </NavLink>
            </p>
            
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium dark:text-gray-300 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white shadow bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                      name="email"
                      onChange={getdata}
                      required
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium dark:text-gray-300 text-gray-900"
                    >
                     Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white shadow px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                      name="password"
                      onChange={getdata}
                      required
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    onClick={addData}
                    className="inline-flex w-full items-center justify-center shadow rounded-md bg-green-500 px-3.5 py-2.5 font-semibold leading-7 text-white transition hover:bg-white hover:text-green-500"
                  >
                    Sign In <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3"></div>
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://media.istockphoto.com/id/1464628759/photo/fingerprint-scan-for-secure-access-and-service-unlock-design-concept.jpg?s=612x612&w=0&k=20&c=829SLUl_T637bT8nWQ1urQW7XRWuJBi_e0rUleFCf4w="
            alt=""
          />
        </div>
      </div>
      
    </section>
    </>
  );
};


export default LogIn;