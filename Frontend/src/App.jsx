import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/login/Login";

import TripSchedule from "./Pages/tripSchedule/TripSchedule";
import Signup from "./Pages/Signup";
import BookingForm from "./Components/Booking/BookingForm";
import ResetPassword from "./Pages/login/ResetPassword";
import ForgotPassword from "./Components/LoginComponents/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<Login/>}/>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/resetpassword/:id" element={<ResetPassword/>} />
        <Route path="/addreservation" element={<BookingForm />} />

        <Route path="/tripSchedule" element={<TripSchedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
