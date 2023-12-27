import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import SignUp from './components/Signup/Signup'
import PassengerControl from './components/Form/PassengerControl';
import Station from './components/PassengerProfile/Station';
import { ViewPassenger } from './pages/ViewPassenger';
import { ViewStation } from './components/PassengerProfile/ViewStation';
import { ViewNextOfKin } from './components/PassengerProfile/ViewNextOfKin';
import ClaimsPage from './components/ClaimsPage/ClaimsPage';
import { ViewClaims } from './components/ClaimsPage/ViewClaims';
import Homepage from './components/HomePage/HomePage';

const App = () => {
  return (
    <Routes>
       <Route path="/" element={<Homepage />} /> 
      <Route path="/login" element={<Login />} />          
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/passengers" element={<PassengerControl/>}/>
      <Route path="/station" element={<Station/>}/>
      <Route path="/view-passenger" element={<ViewPassenger/>}/>
      <Route path="/view-station" element={<ViewStation/>}/>
      <Route path="/view-nextofkin" element={<ViewNextOfKin/>}/>
      <Route path="/claims" element={<ClaimsPage/>}/>
      <Route path="/view-claims" element={<ViewClaims/>}/>
     </Routes>
  )
}

export default App