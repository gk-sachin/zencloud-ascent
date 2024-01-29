
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./Admin/Dashboard";
import Admission from "./pages/Admission";
import ContactUs from "./components/ContactUs";
import HomeNavbar from "./components/HomeNavbar";



function App() {
  return (
    <>
      <Router>
        <HomeNavbar />
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<ContactUs/>} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
