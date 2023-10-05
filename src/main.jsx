import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav.jsx'
import Header from './Header.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Header />
  </React.StrictMode>,
)
