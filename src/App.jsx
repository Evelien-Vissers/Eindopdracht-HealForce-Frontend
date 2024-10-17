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
import Login from "./pages/login/Login.jsx";
import Questionnaire from "./pages/questionnaire/Questionnaire.jsx";
import UserAgreement from "./pages/useragreement/UserAgreement.jsx";
import PrivacyPolicy from "./pages/privacypolicy/PrivacyPolicy.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Match from "./pages/match/Match.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page-container">
      <Header />
        <Profile />
      <Routes>

      </Routes>
      <Footer />

    </div>
  )
}

export default App
