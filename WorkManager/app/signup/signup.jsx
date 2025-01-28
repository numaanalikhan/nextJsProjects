"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

function SignUpComp() {
  const [signUpData, SetSignUpData] = useState({
    user: "",
    email: "",
    password: "",
  });
  const [loading,setLoading] = useState(false)
  
  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    // call the api...
    try{
      const res = await axios
        .post("http://localhost:3000/api/signup", signUpData)
        .then((resp) => {
          return resp.data;
        }).catch((error)=>{
          console.log(error);
          })
      console.log(res);
      toast.success("signup successfully",{position:"top-center"})
      SetSignUpData({
        user: "",
        email: "",
        password: "",
      });

    }catch(error){
    console.log(error);
    toast.error("signup failed",{position:"top-center"})
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="grid grid-cols-12 mt-5">
      <div className="grid col-span-4 col-start-6">
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">user</label>
          <input
            value={signUpData.user}
            name="user"
            onChange={(e) => {
              SetSignUpData({ ...signUpData, [e.target.name]: e.target.value });
            }}
            type="text"
            className="w-full max-w-96 p-3 rounded-lg text-black"
          />

          <label className="block mb-2">email</label>
          <input
            value={signUpData.email}
            name="email"
            onChange={(e) => {
              SetSignUpData({ ...signUpData, [e.target.name]: e.target.value });
            }}
            type="email"
            className="w-full max-w-96 p-3 rounded-lg text-black"
          />

          <label className="block mb-2">password</label>
          <input
            value={signUpData.password}
            name="password"
            onChange={(e) => {
              SetSignUpData({ ...signUpData, [e.target.name]: e.target.value });
            }}
            type="password"
            className="w-full max-w-96 p-3 rounded-lg block mb-8  text-black"
          />

          <div className="">
            <button className="bg-red-600 p-3 rounded-md font-bold cursor-pointer">
              {
                loading ? "processing" :"signup"
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpComp;

// fist store the values in the of input ele in
// to implement above do onchange
