import { BrowserRouter as Router, Route,Routes} from "react-router-dom"

import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Register from "./pages/Register"


function App() {
  

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path = "/" element ={<Home/>} />
      <Route path = "/about" element ={<About/>} />
      <Route path="/login" element ={<Login/>} />
      <Route path="/register" element ={<Register/>} />
      </Routes>
    </Router>
    
    </>
    
  )
}

export default App
