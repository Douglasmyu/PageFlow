import { Navigate, Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav";

export default function ProtectedRoutes({ user, authReady }) {
  const location = useLocation();

  if (!authReady) return null;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // TEMP onboarding flag (swap to DB later)
  const onboarded =
    localStorage.getItem(`pf_onboarded_${user.uid}`) === "true";

  // Force setup if not onboarded (but allow /setup itself)
  if (!onboarded && location.pathname !== "/setup") {
    return <Navigate to="/setup" replace />;
  }

  // If already onboarded, block setup page
  if (onboarded && location.pathname === "/setup") {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <>
      <Nav user={user} />
      <Outlet />
    </>
  );
}