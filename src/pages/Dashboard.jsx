import React,{ useEffect, useState } from "react";
import Stats from "../components/dashboard/stats";
import ReadingCard from "../components/dashboard/readingCard";
import { FaBookOpen, FaFire } from "react-icons/fa";
import { auth } from "../firebase/firebase";



export default function Dashboard() {
  const [displayName, setDisplayName] = useState("");

  useEffect(()=> {
    const user = auth.currentUser;
    if (!user) return;
    const storedName = localStorage.getItem(`pf_name_${user.uid}`);
    if (storedName) {
      setDisplayName(storedName);
    }
  },[]);

  return (
    <div className="w-full px-4 py-6 md:px-8 lg:px-16">

        <div className="mx-auto max-w-6xl space-y-10"> 
            <div className="text-center text-4xl font-bold">
              Welcome{displayName && `, ${displayName}`}!
            </div>  
            <ReadingCard 

              title= "Atomic Habits"
              author= "Robert Green"
              currentPage = {90}
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