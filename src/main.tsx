import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Lenis from '@studio-freight/lenis'
import App from './App.tsx'

const lenis = new Lenis()

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
