import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';
import Navbar from "../components/Navbar";
import "../assets/css/Signin.css"
import { UserContext } from "../Components/Context/UserContext";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const {user, setUser} = useContext(UserContext)
  const handleSignIn = async (e) => {
    
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/v1/auth/authenticate", {
        email: email,
        password: password,
      });
      window.alert("Logged In Successfully!!")
      await console.log(response.data)
      console.log(response.data);
      let role = "USER";
      if(email == "admin@gmail.com") {
        role = "ADMIN";
      } 
      await setUser({email, password, role, token :  response.data.token, id : response.data.id})
      localStorage.setItem(
          "user",
          JSON.stringify({
            email: email,
            password:password
  }));
      navigate("/");
    } catch (error) {
      console.error("Error during Login:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bb">
        <div className="lt dark-mode">
          <div className="round1">
            <form className="round3" onSubmit={handleSignIn}>
              <h3>Sign In</h3>
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
                  type="password"
                  placeholder="Enter Your Password"
                  className="form-control"
                  value={password}
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError("");
                  }}
                />
                {passwordError && <span className="error">{passwordError}</span>}
              </div>
              <div className="login-link-cont">
                <Link className="l11">Forgot Password?</Link>
              </div>
              <div className="d-grid">
                <button type="submit" className="btnn">
                  Sign In
                </button>
                <br /><br/>
              </div>
              <div className="login-link-cont">
                <p>New User?</p>
                <Link to={"/register"} className="l2">
                  Sign Up
                </Link>
              </div>
            </form>
          </div><br></br>
          
        </div>
      </div>
    </>
  );
}

export default Login;
