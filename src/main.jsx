/*
@copyright 2025 Aime Cesaire Mugishawayo
@license Apache-2.0
*/


// Node modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// CSS link
import './index.css'
import 'lenis/dist/lenis.css'

// Components
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
