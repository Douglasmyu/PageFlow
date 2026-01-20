import React, { useState } from "react";
import { auth } from "../../firebase/firebase";

// what am i reading right now

export default function ReadingCard({title, author, currentPage, totalPages}) {
  const progressValue = currentPage/totalPages
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 flex flex-col">
      {/* book info */}
      <div className="text-center">
        <h1 className="font-black text-2xl">{title}</h1>
   
        <h3>Author: {author}</h3>
      </div>
      {/* progress */}
      <div className="flex justify-around">
        <p>Pages read: {currentPage}/{totalPages}</p>
        <progress  value={progressValue}/>
        <button className="bg-blue-400 rounded-2xl p-3">Update pages</button>
      </div>
    </div>
    );
}