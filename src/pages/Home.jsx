import React from "react";

export default function Home(){
    return(
        <div id = "main" className='min-h-screen flex flex-col items-center justify-center text-center px-4'>
      <h1 className="font-bold text-4xl md:text-5xl text-blue-700 dark:text-blue-300 mb-4">Remote Collab</h1>
      <h2 className ="font-bold text-2xl md:text-3xl text-blue-700 dark:text-blue-700 mb-4">Collab Made Simple</h2>
      <p className='text-lg text-sky-300 
      dark:text-sky-700 mb-8'>
        Collaborate with your remote team more effectively. 
        Plan, chat, and track tasks in one place — from anywhere.</p>
      <div id ="start-button">
        <button className="bg-blue-600 hover:bg-blue-700 
          text-white font-semibold px-6 py-3 rounded-md 
          transition">
            click me
          </button>
      </div>
    </div>
    )
}