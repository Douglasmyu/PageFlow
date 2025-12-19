import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function Register(){
    return(
        <div className="min-h-screen flex w-full">
            
            
    
            {/* white Right Side */}
            <div className="w-1/2 bg-gray-900 text-white flex items-center justify-center p-10 relative">
            
    
                {/* 📄 Form Card */}
                <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Sign up with Email</h2>
        
                    <label className="text-sm mb-1 block">Email</label>
                    <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white mb-2"
                    />
                    <p className="text-xs text-gray-400 mb-4">
                    We’ll send you a magic link to sign up. No password needed!
                    </p>
        
                    <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white font-semibold mb-4">
                    Send Magic Link
                    </button>
        
                    <div className="flex items-center mb-4">
                    <hr className="grow border-gray-600" />
                    <span className="mx-2 text-sm text-gray-500">Or</span>
                    <hr className="grow border-gray-600" />
                    </div>
        
                    <button className="w-full bg-white text-black py-2 rounded font-semibold mb-2 flex items-center justify-center gap-2">
                    <span><FcGoogle></FcGoogle></span> Sign Up with Google
                    </button>
        
                    <p className="text-sm text-gray-400 mt-4 text-center">
                    Dont have an account?{" "}
                    <Link to="/Login" className="text-blue-400 hover:underline">
                        Log In
                    </Link>
                    </p>
                </div>
            </div>
            <div className="w-1/2 bg-[#F7F9FB] text-white flex flex-col items-center justify-center p-8">
            
                <h2 className="text-3xl text-[#6B7280] font-bold mb-2">Join Us</h2>
                <p className="text-lg text-[#6B7280]">Create your account to get started</p>
            </div>
            {/* 🔙 Back Button */}
            <div className="absolute top-25 left-5">
                <Link to="/">
                <button className="bg-blue-600 hover:bg-blue-700 
                        text-white font-semibold px-6 py-3 rounded-lg 
                        transition">
                    Back
                </button>
                </Link>
            </div>
        </div>
    );
}