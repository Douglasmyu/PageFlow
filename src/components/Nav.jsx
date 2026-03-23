import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import { signOutUser } from "../firebase/auth";
import { auth } from "../firebase/firebase";
//logged in links
function AuthNavLinks({user}){
    const [displayName, setDisplayName] = useState("");
    
      useEffect(()=> {
        const user = auth.currentUser;
        if (!user) return;
        const storedName = localStorage.getItem(`pf_name_${user.uid}`);
        if (storedName) {
          setDisplayName(storedName);
        }
      },[]);

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
        function handleClick(event){
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)){
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return ()=> document.removeEventListener("mousedown",handleClick)
    },[]);

    const navigate = useNavigate();
    const handleSignout = async () => {
        try{
            await signOutUser();
            navigate("/");
        } catch(err){
            console.error("Logout failed",err);
        }
    };
    return(
        <>
            <Link to="/dashboard" className="hover:text-gray-300 no-underline">Dashboard</Link>
            <Link to="/books"className="hover:text-gray-300 no-underline">Books</Link>
            <Link to="/friends"className="hover:text-gray-300 no-underline">Friends</Link>
            <div className="relative ml-4" ref={dropdownRef}>
                <button 
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white" 
                    onClick={()=>setOpen((prev) => !prev)}>
                    {displayName|| "Account"}
                </button>
                {open && (
                    <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden z-50">
                        <button 
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                            setOpen(false);
                            }}>
                            Account Info
                        </button>

                        <button
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() =>{
                                setOpen(false);
                            }}>
                            My Books
                        </button>

                        <button
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={()=> {
                                setOpen(false);
                                handleSignout();
                            }}>
                            Log out
                        </button>

                    </div>
                )}
            </div>                
                {/* <NavDropdown 
                    title={user?.displayName || "Account"}
                    align="end"
                    className="ml-4 text-white">
                    <NavDropdown.Item className="text-sm">
                        account info
                    </NavDropdown.Item>

                    <NavDropdown.Item className="text-sm">
                        Mybooks
                    </NavDropdown.Item>

                    <NavDropdown.Item className="text-sm" onClick={handleSignout}>
                        Logout
                    </NavDropdown.Item>
                </NavDropdown> */}
       
                
        </>
    );
}
//logged out links
function PublicNavLinks(){
    return(
        <>
            <Link to="/About" className="hover:text-gray-300">About</Link>
            <Link to="/Login" className="hover:text-gray-300">Login</Link>
            <Link to ="/Register" className="hover:text-gray-300">Register</Link>
        </>
    );
}
export default function Nav({user}){
    const[isOpen, setIsOpen] = useState(false);

    const logoTarget = user ? "/dashboard" : "/";
    return(
        <div className="fixed top-0 left-0 w-full z-50 bg-slate-700 shadow-md ">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            {isOpen && (
                <div className="md:hidden bg-slate-700 px-4 pb-4">
                    <div className="flex flex-col space-y-4 text-white"
                        onClick={()=> setIsOpen(false)}>
                        {user ? <AuthNavLinks /> : <PublicNavLinks />}
                    </div>
                </div>
                )}
                <button onClick={()=> setIsOpen(!isOpen)}
                        className="md:hidden text-white focus:outline-none">
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                ):(
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                        )}
                        
                    </svg>
                </button>
                <div className="text-white font-bold text-lg transition-transform duration-350 hover:scale-150">
                    <Link to={logoTarget}>
                        <span className="text-[#1F2937]">Page</span>
                        <span className="text-[#7ED3B2]">Flow</span>
                    </Link>
                </div>
                <div className="hidden md:block">
                    <div className="flex items-center space-x-8 text-white">
                        {user ? <AuthNavLinks /> : <PublicNavLinks />}
                        <button id="toggle dark/lightmode"></button>
                    </div>
                </div>
            </div>
        </div>
    );
}