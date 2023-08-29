"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
export default function Profile() {
  const router = useRouter()

  const handleLogout = async() => {
    try {
      await axios.get('api/users/logout')
      toast.success("Logged Out Successfully")
      router.push('/login')
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message)
    }
  }
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-3">
      <h1 className="text-2xl"> Profile Page </h1>
      <hr />

      <button
      className="px-6 py-2 bg-black text-white my-4"
      onClick={handleLogout}>Logout</button>
      
    </div>
  );
}
