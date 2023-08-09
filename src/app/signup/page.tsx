"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignUp() {
  const router = useRouter()
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDissabled] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSignup = async () => {
    try {
      setLoading(true)
      console.log("Signup Successfull")

      const response = await axios.post("api/users/signup", user)
      console.log("Signup Successfull", response.data)
      router.push("/login")
    } catch (error:any) {
      console.log("Signup Failed", error.message)
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
      setButtonDissabled(false)
    }
    else{
      setButtonDissabled(true)
    }
  }, [user])

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-3">
      <h1>Sign Up</h1>
      <hr />

      <div className="flex flex-col gap-1">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          className="p-2 rounded-lg"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
        />
      </div>

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
        <button disabled={buttonDisabled} onClick={onSignup} className="px-4 py-2 bg-gray-800 text-white rounded-lg">
          {loading ? "Loading..." : "Submit"}
        </button>
        <p>
          Already Signed up? <Link href="/login" className="underline italic">Login</Link>
        </p>
      </div>
    </div>
  );
}
