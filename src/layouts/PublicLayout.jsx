import { Outlet, Navigate } from "react-router-dom";
import Nav from "../components/Nav";

export default function PublicLayout({user, authReady}){
    if(!authReady){
        return null;
    }

    if(user){
        const onboarded = localStorage.getItem(`pf_onboarded_${user.uid}`) === "true";
        return <Navigate to={onboarded ? "/dashboard" : "/setup"} replace />
    }
    return (
        <>
            <Nav user ={user}/>
            <Outlet />
        </>
    );
}