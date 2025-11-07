 import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
 import React from 'react'

export default function App() {
  return (
    <BrowserRouter>
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
