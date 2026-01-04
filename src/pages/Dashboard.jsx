import React from "react";
import Stats from "../components/dashboard/stats";
import Welcome from "../components/dashboard/welcome";
import ReadingCard from "../components/dashboard/readingCard";

export default function Dashboard() {
  return (
    <div className="w-full px-4 py-6 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-10"> 
            <Welcome />
            <Stats />
            <ReadingCard />
        </div>
      
    </div>
  );
}