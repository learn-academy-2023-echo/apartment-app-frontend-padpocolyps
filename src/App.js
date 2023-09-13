import { useState, useEffect } from 'react';
import './App.css';
import mockUsers from "./mockUsers.js"
import mockApartments from "./mockApartments.js"
import {  Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentShow from "./pages/ApartmentShow"
import ApartmentProtectedIndex from "./pages/ApartmentProtectedIndex"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Signup from "./pages/SignUp"
import Login from "./pages/Login"

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockApartments)
  
  return (
    <>    
      <Header current_user={currentUser}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments} />} />
        <Route path="/myapartments" element={<ApartmentProtectedIndex />} />
        <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={apartments}/>} />
        <Route path="/apartmentnew" element={<ApartmentNew />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;