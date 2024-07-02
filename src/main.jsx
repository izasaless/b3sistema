import React from 'react'
import ReactDOM from 'react-dom/client'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Login from './components/Login.jsx'
import Cad from './components/Cad.jsx'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
)
