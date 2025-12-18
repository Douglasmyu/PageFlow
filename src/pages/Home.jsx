import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div id = "main" className='min-h-screen flex flex-col items-center justify-center text-center px-4'>
      <h1 className="font-bold text-4xl md:text-5xl text-blue-700 dark:text-blue-300 mb-4">PageFlow</h1>
      <h2 className ="font-bold text-2xl md:text-3xl text-blue-700 dark:text-blue-700 mb-4">reading is a marathon</h2>
      <p className='text-lg text-sky-300 
      dark:text-sky-700 mb-8'>
        Keep track of your book progress with PageFlow</p>
      <div id ="start-button">
        <button className="bg-blue-600 hover:bg-blue-700 
          text-white font-semibold px-6 py-3 rounded-md 
          transition">
            <Link to ="/Register">
                Get Started
            </Link>
          </button>
      </div>
    </div>
    )
}