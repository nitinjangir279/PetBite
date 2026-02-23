import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";


import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import Home from "./home/Home";
import { Login } from "./pages/Login";
import Products from "./pages/Products";
import Offer from "./pages/Offer"
function App() {
  return (
    <>
       <Navbar />
      <Routes>
         {/* Default Home */}
        <Route path="/" element={<Home />} />
        {/* Redirect /home → / */}
        <Route path="/home" element={<Navigate to="/" replace />} />
        {/* Any wrong URL → Home */}
         <Route path="/login" element={<Login />} />

         <Route path="/products" element={<Products />} />

        <Route path="/offer" element={<Offer />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
