import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import NavbarComp from "./components/NavbarComp"
import FooterComp from "./components/FooterComp"

import Dashboard from './pages/Dashboard'
import Faqs from './pages/Faqs'
import GradeReport from './pages/GradeReport'
import Home from './pages/Home'
import GradeMiss from './pages/GradeMiss';
import InsContact from './pages/InsContact';
import Login from './pages/Login';



function App() {
  return (
      <Router>
        <NavbarComp/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Faqs' element={<Faqs />} />
          <Route path='/GradeReport' element={<GradeReport />} />
          <Route path='/GradeMiss' element={<GradeMiss />} />
          <Route path='/InsContact' element={<InsContact />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
        <FooterComp/>
      </Router>
  )
}

export default App