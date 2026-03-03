import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import GnzyPage from './gnzyyyyyyy/App';
import AhiruPage from './AhiruSareas/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Gnzyyyyyyy" element={<GnzyPage />} />
        <Route path="/AhiruSareas" element={<AhiruPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
