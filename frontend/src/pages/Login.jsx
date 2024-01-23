import "../assets/css/Signin.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <>
    <div className="bb">
      <div className="lt dark-mode">
        <div className="round">
          <form>
            <h3>Sign In</h3>
            <div className="mb-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password">Password </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="form-control"
              />
            </div>
            <div className="login-link-cont">
            <Link className="l11">Forgot Password?</Link>
            </div>
            <div className="d-grid">
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="btnn"
              >
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
          
        </div>
        <p className="copyright">&copy; Zencloud-Ascent 2024</p>
      </div>
      
    </div>
    
    </>
  );
}

export default Login;
