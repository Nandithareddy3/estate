 import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
 import React from 'react'
import Header from './components/Header.jsx';
import signout from './pages/signout.jsx';
import signin from './pages/signin.jsx';
import profile from './pages/profile.jsx';
import about from './pages/about.jsx';
import home from './pages/home.jsx';
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<div>Home Page</div>} />
      <Route path="/about" element={<div>About Page</div>} /> 
      <Route path="/signin" element={<div>Signin Page</div>} />
      <Route path="/signout" element={<div>Signout Page</div>} />
      <Route path="/profile" element={<div>Profile Page</div>} />
    </Routes>
    </BrowserRouter>
  )
}
