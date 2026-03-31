import React from 'react'
import { X } from "lucide-react";

export default function maintain({setIsOpen}) {
  return (
    <div className="w-full h-screen fixed inset-0 backdrop-blur-sm z-500 bg-[#ffffff2a] flex items-center justify-center">
      <div
        className="w-full h-full absolute inset-0 z-501"
        onClick={()=>setIsOpen(false)}
      ></div>
      <main className=" flex justify-center items-center w-140 h-80 p-6 bg-(--p-bg-light) rounded-lg border border-white z-502 relative">
        <div className=' absolute right-5 top-5 text-[white] cursor-pointer'
        onClick={()=>setIsOpen(false)}><X /></div>
        <h4 className="text-2xl font-bold text-center text-(--p-font)">
          Server is under maintenance. Please check back later.
        </h4>
      </main>
    </div>
  );
}
