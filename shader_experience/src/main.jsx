import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className="flex justify-center text-white text-6xl mt-40">Mouse Hover to see color change</h1>
    <p className="flex justify-center text-white text-2xl">practice of Mouse interaction with shader</p>
    <p className="flex justify-center text-white text-xl">Mouse.x = red , Mouse.y = green</p>
    <div className="canvas-wrapper">
      <App />  
    </div>
  </StrictMode>,
)
