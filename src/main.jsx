import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AnimalProvider } from './contexts/AnimalContext.jsx'
import { AppProvider } from './contexts/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <AnimalProvider>
        <App />
      </AnimalProvider>
    </AppProvider>
  </React.StrictMode>,
)
