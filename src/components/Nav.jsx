import React from "react";
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { signOutUser } from "../firebase/auth";

//logged in links
function AuthNavLinks(){
    const navigate = useNavigate();
    const handleSignout = async () => {
        try{
            await signOutUser();
            navigate("/");
        } catch(err){
            console.error("Logout failed",err);
        }
    };
    return(
        <>
            <Link to="/dashboard" className="hover:text-gray-300">Account</Link>
            <Link to="/books" className="hover:text-gray-300">Books</Link>
            <Link to="/friends"className="hover:text-gray-300">Friends</Link>
            <button 
                onClick={handleSignout} 
                className="ml-4 bg-blue-600 px-4 py-2 rounded-md"
            >
                Logout</button>
        </>
    );
}
//logged out links
function PublicNavLinks(){
    return(
        <>
            <Link to="/About" className="hover:text-gray-300">About</Link>
            <Link to="/Login" className="hover:text-gray-300">Login</Link>
            <Link to ="/Register" className="hover:text-gray-300">Register</Link>
        </>
    );
}
export default function Nav({user}){
    const logoTarget = user ? "/dashboard" : "/";
    return(
        <div className="fixed top-0 left-0 w-full z-50 bg-slate-700 shadow-md ">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-white font-bold text-lg transition-transform duration-350 hover:scale-150">
                    <Link to={logoTarget}>
                        <span className="text-[#1F2937]">Page</span>
                        <span className="text-[#7ED3B2]">Flow</span>
                    </Link>
                </div>
                <div className="hidden md:block">
                    <div className="flex items-center space-x-8 text-white">
                        {user ? <AuthNavLinks /> : <PublicNavLinks />}
                    </div>
                </div>
            </div>
        </div>
    )
}