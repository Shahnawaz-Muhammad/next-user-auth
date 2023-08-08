"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SignUp() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

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
        <button className="px-4 py-2 bg-gray-800 text-white rounded-lg">
          Submit
        </button>
        <p>
          Already Signed up? <Link href="/login" className="underline italic">Login</Link>
        </p>
      </div>
    </div>
  );
}
