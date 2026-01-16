import { Navigate, Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function ProtectedRoutes({user}){
    if(!user){
        return <Navigate to="/login" />;
    }

    return(
        <>
            <Nav user={user} />
            <Outlet />
        </>
    );
} 