import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import NavbarComp from "./components/NavbarComp"
import FooterComp from "./components/FooterComp"

import Dashboard from './pages/Dashboard'
import Faqs from './pages/Faqs'
import GradeReport from './pages/GradeR'
import Home from './pages/Home'
import GradeMissing from './pages/GradeM';
import InstructorContact from './pages/InsContact';



function App() {
  return (
    <div>
      <Router>
        <NavbarComp/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Faqs' element={<Faqs />} />
          <Route path='/GradeReport' element={<GradeReport />} />
          <Route path='/GradeMissing' element={<GradeMissing />} />

        </Routes>
        <FooterComp/>
      </Router>
    </div>
  )
}

export default App