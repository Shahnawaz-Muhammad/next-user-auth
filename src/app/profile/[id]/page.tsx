"use client";
import React, { useState } from "react";


export default function UserProfile({params}:any) {
  
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-3">
      <h1 className="text-2xl">User Profile</h1>
      <hr />
      <h1 className="text-lg p-2 bg-orange-600 text-white rounded-lg">{params.id}</h1>

    </div>
  );
}
