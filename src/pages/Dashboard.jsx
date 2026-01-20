import React from "react";
import Stats from "../components/dashboard/stats";
import ReadingCard from "../components/dashboard/readingCard";
import { FaBookOpen, FaFire } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="w-full px-4 py-6 md:px-8 lg:px-16">

        <div className="mx-auto max-w-6xl space-y-10"> 
            <div className="text-center text-4xl font-bold">
              Welcome 
            </div>  
            <ReadingCard 

              title= "Atomic Habits"
              author= "Robert Green"
              currentPage = {50}
              totalPages = {350}
              />
            <Stats 
              label="Pages Read"
              value={1240}
              icon={<FaBookOpen />}/>

            <Stats 
              label = "reading streak"
              value = "5 days"
              icon= {<FaFire />}/>
        </div>
      
    </div>
  );
}