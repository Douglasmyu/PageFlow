import { Outlet,Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
const user = { email: "test@example.com" };
return user ? <Outlet /> : <Navigate to="/Login" />;

}
export default ProtectedRoutes;
 