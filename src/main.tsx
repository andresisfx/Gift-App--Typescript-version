import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { GiftsApp } from './GiftsApp.tsx'
import { MyCounterApp } from './counter/components/MyCounterApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GiftsApp/>
    {/* <MyCounterApp/> */}
  </StrictMode>,
)
