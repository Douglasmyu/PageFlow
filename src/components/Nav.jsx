import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


function PublicNav(){
     
}
export default function Nav(){
    return(
        <div className="fixed top-0 left-0 w-full z-50 bg-slate-700 shadow-md ">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-white font-bold text-lg transition-transform duration-350 hover:scale-150">
                    <Link to="/"><span className="text-[#1F2937]">Page</span><span className="text-[#7ED3B2]">Flow</span></Link>
                </div>
                <div className="hidden md:block">
                    <div className="flex items-center space-x-8 text-white">
                        <Link to="/About" className="hover:text-gray-600 px-3 py-2 
                            font-medium rounded-md transition duration-300">
                            About
                        </Link>
                        <Link to="/Login" className="hover:text-gray-600 px-3 py-2 
                            font-medium rounded-md transition duration-300">
                            Login
                        </Link>
                        <Link to ="/Register" className="hover:text-gray-600 px-3 py-2 
                            font-medium rounded-md transition duration-300"> 
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}