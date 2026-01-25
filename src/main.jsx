import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router'
import registerGlobalErrorSink from './modules/registerGlobalErrorSink'
import mousePosition from './modules/mousePosition'

window.addEventListener('mousemove', mousePosition.update);

registerGlobalErrorSink();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
