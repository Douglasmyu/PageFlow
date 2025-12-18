import React from "react";
import { Link } from "react-router-dom";

export default function About(){
    return(
        <div className="w-full px-4 py-8 relative z-10 text-black">
            <div className="w-fit bg-blue-500 hover:bg-blue-700 
        text-white font-semibold px-6 py-3 rounded-md transition">
                <button>
                    <Link to ="/">Back</Link>
                </button>
            </div>
            <div id="title" className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-3">About PageFlow</h1>
            </div>
            <div id="features-1" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-xl shadow-xl border border-white border-opacity-20 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                    <div className="text-blue-800 mb-4 text-3xl">
                        <span className="inline-block p-3 rounded-full bg-blue-100 bg-opacity-80">📚</span>
                    </div>
                    <h2 className="font-bold text-[#1F2937]">Book Tracking</h2>
                    <p className="text-[#6B7280]"><a className="font-bold text-red-600">Keep</a> track of what you’re reading by logging pages, chapters, and start dates,
                    all in one simple dashboard.</p>
                </div>
                <div className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-xl shadow-xl border 
                border-white border-opacity-20 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                    <div className="text-blue-800 mb-4 text-3xl">
                        <span className="inline-block p-3 rounded-full bg-blue-100 bg-opacity-80">📈</span>
                    </div>
                    <h2 className="font-bold ">Visualize Progress</h2>
                    <p className="text-[#6B7280]"><a className="font-bold text-red-600">See</a> your reading momentum through progress bars, timelines, and streaks that
                    make consistency feel rewarding.</p>
                </div>
                <div className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-xl shadow-xl border
                 border-white border-opacity-20 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                    <div className="text-blue-800 mb-4 text-3xl">
                        <span className="inline-block p-3 rounded-full bg-blue-100 bg-opacity-80">👥</span>
                    </div>
                    <h2 className="font-bold ">Social Sharing</h2>
                    <p  className="text-[#6B7280]"><a className="font-bold text-red-600">Build</a> a daily reading habit with gentle streak tracking that encourages
                    progress without pressure.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-2xl shadow-xl 
                border-white border-opacity-20 transform transition-all duration-300 hove:scale-[1.02] 
                hover:shadow-2xl">
                    <div className="text-blue-800 mb-4 text-3xl">
                        <span className="inline-block p-3 rounded-full bg-blue-100 bg-opacity-80">🔥</span>
                    </div>
                    <h2 className="font-bold ">Reading Streaks</h2>
                    <p  className="text-[#6B7280]">
                    Build a daily reading habit with gentle streak tracking that encourages
                    progress without pressure.
                    </p>
                </div>
                <div className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-2xl shadow-xl
                border-white border-opacity-20 transform transition-all duration-300 hove:scale-[1.02]
                hover:shadow-2xl">
                    <h2 className="font-bold ">FlowPlant Companion</h2>
                    <p  className="text-[#6B7280]">
                    Watch your Flowplant grow as you read consistently, offering calm,
                    visual motivation along your reading journey.
                    </p>
                </div>
            </div>
        </div>
    )
}