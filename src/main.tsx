import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { GiftsApp } from './GiftsApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GiftsApp/>
  </StrictMode>,
)
