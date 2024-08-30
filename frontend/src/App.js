// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CoursesPage from './components/CoursesPage';
import ContactPage from './components/ContactPage';
import Login from './components/Login';
import Register from './components/Register';
import AdminLogin from './components/AdminLogin';
import AdminRegister from './components/AdminRegister';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/adminregister" element={<AdminRegister />} />
            <Route path="/admin" element={<AdminPanel />} /> 
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
