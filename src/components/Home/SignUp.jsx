import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Header";

export default function SignUp() {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    password: "",
    // getUserList()
  });

  const [userdataList,setUserdataList] = useState([]);
  console.log(userdataList);
  

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

  const addData = (e) => {
    e.preventDefault();

    const { name, email, password } = inpval;

    if (name === "") {
      alert("name field is requred!", {
        position: "top-center",
      });
    } else if (email === "") {
      alert("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      alert("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (password === "") {
      alert("password field is requred", {
        position: "top-center",
      });
    } else if (password.length <= 5) {
      alert("password length must greater five", {
        position: "top-center",
      });
    } else {

      let allUser = localStorage.getItem('user_signup')
      let allUserParse = JSON.parse(allUser)
      if(allUserParse){
        console.log("user",allUser)
        let isUserPresent = allUserParse?.some(item => item.email == inpval.email)
        if(isUserPresent){
          alert("Email already taken")
        }else{
          let newUserList = [...allUserParse,inpval]
          localStorage.setItem('user_signup',JSON.stringify(newUserList))
           alert("Signed Up succesfully");
           history("/login");
          console.log("new list",newUserList)
        }

      }else{
        localStorage.setItem('user_signup',JSON.stringify([inpval]))
         alert("Signed Up succesfully");
         history("/login");
      }
      

   

      
      


      
    }
  };

  // Add data to Localstrage userList

  // useEffect(() => {
  //   localStorage.setItem("user_signup", JSON.stringify([...data, inpval]));
      // console.log(userList);
  // }, [inpval]);

  // const getUserList = () => {
  //   let userList = localStorage.getItem("userList");
  //   console.log(userList);
  //   if (userList) {
  //     return JSON.parse(localStorage.getItem("userList"));
  //   } else {
  //     return [];
  //   }
  // };

  return (
    <>
      <section className="h-screen w-full flex justify-center items-center dark:bg-gray-700">
        <div className="w-[80%] grid grid-cols-1 mt-5 shadow !rounded-md dark:bg-gray-700 !dark:rounded-md bg-white lg:grid-cols-2">
          <div className="w-full h-full flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="w-full h-full xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-black dark:text-gray-300 sm:text-4xl">
                Sign Up
              </h2>
              <p className="mt-4 text-base dark:text-gray-300 text-gray-600">
                Already have an account?{" "}
                <NavLink
                  to="/login"
                  title=""
                  className="font-medium text-blue-500 transition-all duration-200 hover:underline"
                >
                  Sign In
                </NavLink>
              </p>
              <form action="#" method="POST" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-base font-medium dark:text-gray-300 text-gray-900"
                    >
                      {" "}
                      Full Name{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white shadow bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Full Name"
                        id="name"
                        name="name"
                        onChange={getdata}
                        required
                      ></input>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-base font-medium dark:text-gray-300 text-gray-900"
                    >
                      {" "}
                      Email address{" "}
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
                        {" "}
                        Password{" "}
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
                      type="button"
                      onClick={addData}
                      className="inline-flex w-full items-center justify-center shadow rounded-md bg-green-500 px-3.5 py-2.5 font-semibold leading-7 text-white transition hover:bg-white hover:text-green-500"
                    >
                      Sign Up <ArrowRight className="ml-2" size={16} />
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
}
