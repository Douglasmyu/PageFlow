import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div id = "main" className='min-h-screen flex grid-col items-center justify-center text-center px-4'>
            <div className="w-1/2">
            <h1 className="font-bold text-5xl md:text-6xl text-blue-700 dark:text-blue-300 mb-4">PageFlow</h1>
                <h2 className ="font-bold text-2xl md:text-3xl text-blue-700 dark:text-blue-700 mb-4">Reading Made Easy</h2>
                <p className='text-lg text-sky-300 
                dark:text-sky-700 mb-8'>
                    PageFlow helps you track your reading progress visually and build consistent reading habits through calm, social motivation.</p>
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
            
            <div id ="image" className="w-1/2">
                <h1>image goes here</h1>
                <p>Hi, I'm FlowPlant! Nice to meet you!</p>
            </div>
    </div>
    );
}