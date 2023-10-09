import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { StudentDataProvider } from './StudentDataContext'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { StudentProvider } from './context/StudentContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <StudentDataProvider>
    <StudentProvider>
      <App />
      </StudentProvider>
    </StudentDataProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
