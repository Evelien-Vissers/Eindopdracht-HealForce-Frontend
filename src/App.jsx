import {Routes, Route, Router} from 'react-router-dom'
import './App.css'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
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
import {AuthProvider} from "./authentication/AuthContext.js";
import ProtectedRoute from "./authentication/ProtectedRoute.js";


function App() {

  return (
    <div className="page-container">
        <AuthProvider>
            <Router>
        <Header />
            <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/mission" element={<Mission/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/useragreement" element={<UserAgreement/>}  />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/questionnaire" element={
              <ProtectedRoute>
              <Questionnaire/>
              </ProtectedRoute>} />
          <Route path="/profile" element={
              <ProtectedRoute>
                  <Profile/>
              </ProtectedRoute>} />
          <Route path="/match" element={
              <ProtectedRoute>
                  <Match/>
              </ProtectedRoute>} />
      </Routes>
      <Footer />
            </Router>
        </AuthProvider>
    </div>
  )
}

export default App
