"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function Login() {

  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleFormSubmit = async() => {
    try {
      setLoading(true);
      const response = await axios.post('/api/users/login', user);
      console.log("logged in succussfully",response.data);
      toast.success("login success")
      router.push("/profile")
    } catch (error:any) {
      console.log("Login Failed", error.message)
      toast.error(error.message)
    } finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0){
      setButtonDisabled(false)
    }
    else{
      setButtonDisabled(true)
    }
  }, [user])

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-3">
      <h1>Login</h1>
      <hr />

      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          className="p-2 rounded-lg"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          className="p-2 rounded-lg"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />
      </div>

      <div className="flex flex-col gap-2 items-center">
        <button disabled={buttonDisabled} type="submit" className="px-4 py-2 bg-gray-800 text-white rounded-lg"
        onClick={handleFormSubmit}>
          {loading ? "LOADING..." : "Submit"}
        </button>
        <p>
          Not have an account? <Link href="/signup" className="underline italic">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
