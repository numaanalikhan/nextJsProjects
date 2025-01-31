"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";
import styles from './page.module.css'
export function LoginComp() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    // if(!loginData.user || !loginData.email){return toast.warn("invalild")}
    try {
      const respond = await axios.post(
        "http://localhost:3000/api/login",
        loginData
      );

      console.log(respond);
      if (!respond.message) {
        toast.success("login successfully");
        setLoginData({
          email: "",
          password: "",
        });
      } else {
        toast.error("fia");
      }
    } catch (error) {
      console.log(error);
      toast.error("failed to login");
    }
  };
  return (
    <div className="flex  items-center gap-16">
      <div className="flex-1 flex items-center justify-center">
        <Image
        className={`object-contain ${styles.image}` }
          alt="login"
          width={400}
          height={800}
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1738341971~exp=1738345571~hmac=c23f94b0f53e17a257ee72421cac98a41fdd39e968d40ad6a75b7e07fa868e23&w=740"
        />
      </div>

        <div className="flex-1">
          <form onSubmit={handleLogin}>
            <label className="block mb-2">email</label>
            <input
              type="email"
              value={loginData.email}
              name="email"
              onChange={(e) => {
                setLoginData({ ...loginData, [e.target.name]: e.target.value });
              }}
              className="w-full max-w-96 p-3 rounded-lg text-black"
            />
            <label className="block mb-2">password</label>
            <input
              type="password"
              value={loginData.password}
              name="password"
              onChange={(e) => {
                setLoginData({ ...loginData, [e.target.name]: e.target.value });
              }}
              className="w-full max-w-96 p-3 rounded-lg block mb-8  text-black"
            />
                <button
                  type="submit"
                  className="bg-blue-600 p-3 rounded-md font-bold cursor-pointer"
                >
                  Login
                </button>
          </form>
        <p>_____________________________</p>
        <span className="border-b-2 cursor-pointer my-4"><Link href={"/signup"}>Create Account</Link></span>
        </div>
    </div>
  );
}

// <div className="grid col-span-4 col-start-6">
// <form onSubmit={handleLogin}>
//   <label className="block mb-2">email</label>
//   <input
//     type="email"
//     value={loginData.email}
//     name="email"
//     onChange={(e) => {
//       setLoginData({ ...loginData, [e.target.name]: e.target.value });
//     }}
//     className="w-full max-w-96 p-3 rounded-lg text-black"
//   />
//   <label className="block mb-2">password</label>
//   <input
//     type="password"
//     value={loginData.password}
//     name="password"
//     onChange={(e) => {
//       setLoginData({ ...loginData, [e.target.name]: e.target.value });
//     }}
//     className="w-full max-w-96 p-3 rounded-lg block mb-8  text-black"
//   />
//   <div className="">
//     <button
//       type="submit"
//       className="bg-blue-600 p-3 rounded-md font-bold cursor-pointer"
//     >
//       Login
//     </button>
//   </div>
// </form>
// {JSON.stringify(loginData)}
// </div>
