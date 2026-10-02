import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'foundation-sites/dist/css/foundation.min.css'
import "foundation-icons/foundation-icons.css";
import './styles/variables.css'
import './styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
