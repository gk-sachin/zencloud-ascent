import "../assets/css/Signin.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <div className="lt">
      <div className="round">
        <form>
          <h3>Sign Up</h3>
          <div className="mb-2">
            <label htmlFor="email">Name</label>
            <input
              type="Name"
              placeholder="Enter Your Name"
              className="form-control"
            />
          </div>
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
          <div className="mb-2">
            <label htmlFor="password">Comfirm Password </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="form-control"
            />
          </div>
          <div className="d-grid">
            <button
              onClick={() => {
                navigate("/");
              }}
              className="btnn"
            >
              Sign Up
            </button>
            <br />
          </div>
          <div className="login-link-cont">
            <Link to={"/login"} className="l2">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;
