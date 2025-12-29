import { useState } from 'react'
import Home from './pages/home'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Nav from './components/Nav'
import Dashboard from './pages/Dashboard'
import ProtectedRoutes from './utils/protectedRoutes'
import {  BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'


function AppContent(){
  const location = useLocation();
  const noRoutes = ["/Login", "/Register", "/About"];
  const shouldShow = !noRoutes.includes(location.pathname);

  return (
    <>
      {shouldShow && <Nav />}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />} />
        <Route path="/Login"  element={<Login />}/>
        <Route path="/Register"  element={<Register />}/>
        <Route element = {<ProtectedRoutes />}> 
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
         
        
          
      </Routes>
    
    </>
  );
}
function App() {
  return (
    <div className="h-screen bg-[#F7F9FB] flex items-center justify-center">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
      
      
    </div>
  )
}

export default App

// // <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>