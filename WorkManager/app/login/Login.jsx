"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";


export function LoginComp() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    // if(!loginData.user || !loginData.email){return toast.warn("invalild")}
    try {
      const respond = await axios
        .post("http://localhost:3000/api/login", loginData)
       
      console.log(respond);
      if(!respond.message){
        
        toast.success("login successfully");
        setLoginData({
          email: "",
          password: "",
        });
      }else{
        toast.error("fia")
      }
    } catch (error) {
      console.log(error);
      toast.error("failed to login")
    }
  };
  return (
    <div className="grid grid-cols-12 mt-5">
      <div className="grid col-span-4 col-start-6">
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
          <div className="">
            <button
              type="submit"
              className="bg-blue-600 p-3 rounded-md font-bold cursor-pointer"
            >
              Login
            </button>
          </div>
        </form>
        {JSON.stringify(loginData)}
      </div>
    </div>
  );
}

