import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function PublicLayout({user}){
    return (
        <>
            <Nav user ={user}/>
            <Outlet />
        </>
    );
}