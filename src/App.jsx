import { useState, useEffect } from 'react'
import Home from './pages/home'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import PublicLayout from './layouts/PublicLayout'
import ProtectedLayout from './layouts/ProtectedLayout'
import Dashboard from './pages/Dashboard'
import Friends from './pages/Friends'
import Books from './pages/Books'
import {  BrowserRouter, Routes, Route } from 'react-router-dom'
import { auth } from './firebase/firebase'
import { onAuthStateChanged } from "firebase/auth";
import './App.css'



function App() {

  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
    setUser(firebaseUser);
    setAuthReady(true);
  },[]);
  return unsubscribe;
}, []);
  return (
    <div className="h-screen bg-[#F7F9FB] flex items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout user={user} authReady={authReady}/>}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />

          <Route element={<ProtectedLayout user={user} authReady={authReady}/>}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/books" element={<Books />} />
            <Route path="/friends" element={<Friends />} />
          </Route>
        </Routes>
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