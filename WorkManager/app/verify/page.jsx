"use client"
import axios from "axios";
import { redirect, useSearchParams } from "next/navigation";
import React from "react";

function Verify() {
  const searchParamas = useSearchParams()
  const token = searchParamas.get('token')
  if(!token)(
    console.log('again sign up')
  )
  const handleVerify = async () => {
     const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/verify?token=${token}`)
     console.log(res)
     console.log(searchParamas);
     return res
  }
  return (
    <>
    <h1>Work manager</h1>
    <p>Kindly verify your email to complete your account registration.</p>
    <button onClick={handleVerify}>Verify Now</button>
    <p>The link will be valid for the next 24 hours.</p>
    <p>Contatct us </p>
    <p>insta, fb</p>
    </>
  )
}

export default Verify;
