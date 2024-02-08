import "../assets/css/Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";  

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

 
    if (!name.trim()) {
      alert("Name is required");
      return;
    }

  
    if (!email.trim()) {
      alert("Email is required");
      return;
    }

    
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }


    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
     
      const response = await axios.post("http://localhost:8081/register", {
        name: name,
        password: password,
        confirmPassword: confirmPassword,
      });

      console.log(response.data);  
      navigate("/");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="lt dark-mode">
        <div className="round">
          <form onSubmit={handleSignUp}>
          <h3>Sign Up</h3>
            <div className="mb-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="form-control"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="form-control"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password">Password </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                className="form-control"
                value={password}
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError("");
                }}
              />
              {passwordError && (
                <span className="error">{passwordError}</span>
              )}
            </div>
            <div className="mb-22">
              <label htmlFor="confirmPassword">Confirm Password </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="form-control"
                value={confirmPassword}
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label id="shh">
                <input
                  type="checkbox"
                  onChange={() => setShowPassword(!showPassword)}
                />
                <p>Show Password</p>
              </label>
            </div>
            <div className="d-grid">
              <button type="submit" className="btnn">
                Sign Up
              </button>
              <br /><br />
            </div>
            <div className="login-link-cont">
              <p>Already Have an Account? </p>
              <Link to={"/login"} className="l2">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="foot">
        <p className="copyrightt">&copy; Zencloud-Ascent 2024</p>
      </div>
    </>
  );
}

export default Register;
