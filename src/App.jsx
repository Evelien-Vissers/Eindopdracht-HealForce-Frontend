import {Routes, Route} from 'react-router-dom'
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
import ProtectedRoute from "./authentication/ProtectedRoute.jsx";
import { AuthProvider} from "./authentication/AuthContext.jsx";
import Admin from "./pages/admin/Admin.jsx";


function App() {

  return (
    <AuthProvider>
    <div className="page-container">
        <Header />


          <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/mission" element={<Mission/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/useragreement" element={<UserAgreement/>}  />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/admin" element={<ProtectedRoute roleRequired="ROLE_ADMIN"><Admin/></ProtectedRoute>} />
          <Route path="/questionnaire" element={<ProtectedRoute roleRequired="ROLE_USER"><Questionnaire/></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute roleRequired="ROLE_USER"><Profile/></ProtectedRoute>} />
          <Route path="/match" element={<ProtectedRoute roleRequired="ROLE_USER"><Match/></ProtectedRoute>} />

          </Routes>

      <Footer />

    </div>
   </AuthProvider>
  )
}

export default App
