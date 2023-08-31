import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AnimalProvider } from './contexts/AnimalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimalProvider>
      <App />
    </AnimalProvider>
  </React.StrictMode>,
)
