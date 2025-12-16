import { useState } from 'react'
import Home from './pages/home'
import './App.css'

function App() {
  return (
    <div className="h-screen bg-green-500 flex items-center justify-center">
      <h1 className="text-6xl font-bold text-white">TAILWIND WORKS</h1>
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