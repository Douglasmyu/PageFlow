import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import { auth } from "../firebase/firebase"; 



export default function Setup() {
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");
    const [pace, setPace] = useState("");
    const [error, setError] = useState({});

    //validate
    const validate = () =>{
        const newError = {};
        if (!name){
            newError.name = "Name is required"
        }
        if (!goal || Number(goal) <= 0){
            newError.goal = "Enter a valid goal"
        }
        setError(newError);
        return Object.keys(newError).length === 0;
    }
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        const user = auth.currentUser; // TEMP (later: useAuth())
        if (!user) return; // should not happen because /setup is protected

        localStorage.setItem(`pf_onboarded_${user.uid}`, "true");
        localStorage.setItem(`pf_name_${user.uid}`, name);
        console.log("Submitting setup...");
        navigate("/dashboard", { replace: true });
    };
    //handle submit to go to route to dashboard


    return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        
        {/* Card */}
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-md p-8 space-y-6">

        {/* Header */}
        <div>
            <h1 className="text-2xl font-bold">Account Info</h1>
            <p className="text-sm text-gray-500">
            We use this info to personalize your reading experience
            </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-blue-500 rounded-full w-1/3" />
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>

            {/* Name */}
            <div>
            <label className="block text-sm font-medium">
                Your name <span className="text-red-500">*</span>
            </label>
            <input
                type="text"
                placeholder="Enter your name"
                maxLength={30}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring"
            />
            </div>

            {/* Daily Goal */}
            <div>
            <label className="block text-sm font-medium">
                Daily page goal <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-gray-500 mb-1">
                How many pages do you want to read per day?
            </p>
            <input
                type="number"
                placeholder="e.g. 20"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
            />
            </div>

            {/* Reading Pace */}
            <div>
            <label className="block text-sm font-medium">
                Reading pace
            </label>
            <select className="mt-1 w-full border rounded-md px-3 py-2 bg-white">
                <option value="">Select an option</option>
                <option value="slow">Slow</option>
                <option value="medium">Medium</option>
                <option value="fast">Fast</option>
                <option value="unsure">Not sure</option>
            </select>
            </div>
            <div className="flex justify-end">
                <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                >
                Get started
                </button>
            </div>


        </form>

        {/* Footer Actions */}
        

        </div>
    </div>
    );
}
