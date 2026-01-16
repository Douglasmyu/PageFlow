import { Outlet, Navigate } from "react-router-dom";
import Nav from "../components/Nav";

export default function PublicLayout({user}){
    if(user){
        return <Navigate to="/dashboard" />
    }
    return (
        <>
            <Nav user ={user}/>
            <Outlet />
        </>
    );
}