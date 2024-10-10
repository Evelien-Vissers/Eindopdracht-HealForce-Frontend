import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Button from './components/button/Button.jsx'
import Home from './pages/home/Home.jsx'
import Mission from "./pages/mission/Mission.jsx";
import Contact from './pages/contact/Contact.jsx'
import Register from './pages/register/Register.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page-container">
      <Header />
        <Register />
      <Routes>

      </Routes>
      <Footer />

    </div>
  )
}

export default App
