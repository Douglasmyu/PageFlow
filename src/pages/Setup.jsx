import React from "react";
//set up page to get username, page goal, pace
export default function Setup(){
    return(
        <div>
            <h1>Welcome to PageFlow</h1>
            <h2>Account Info</h2>
            <div className="">
                <h1>Your name <span className="text-red-700">*</span></h1>
                <input 
                    placeholder="Enter name"
                    type = "text"
                    id = "name"
                    maxLength={15}
                />
            </div>
            <div>
                <h1>Daily page goal</h1>
                <p>How many pages should you read per day</p>
                <input 
                    placeholder="Enter number"
                    type = "text"
                    id = "number"
                    maxLength={6}
                />
            </div>
            <div>    
                <label>Reading pace:</label>
                <select>
                    <option>Select an option</option>
                    <option>Fast: 400-700+ wpm</option>
                    <option>Medium: 200–300 wpm</option>
                    <option>Slow: 100-200 wpm</option>
                </select>
            

            </div>

            <button>Get started</button>
        </div>
    );
}