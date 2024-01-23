
import '../assets/css/Signin.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Login() {
    const navigate = useNavigate()
    return (
    <div className="lt">
        <div className="round">
            <form>
                <h3>Sign In</h3>
                <div className='mb-2'>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter Your Email' className="form-control" />
                </div>
                <div className='mb-2'>
                    <label htmlFor="password">Password </label>
                    <input type="password" placeholder="Enter Your Password" className="form-control" />
                </div>
                <div className='mb-2'>
                    <input type="checkbox" className="check-checkbox" id="check" />
                    <label htmlFor="check" className="custom-input-label">Remember Me</label>
                </div>
                <div className="d-grid">
                    <button onClick={() => {
                        navigate("/")
                    }}  className="btnn">Sign In</button><br/>
                </div>
                <div className='login-link-cont'>
                <Link className='l1'>Forgot Password?</Link>
                <Link to={'/register'} className='l2'>Sign Up</Link>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Login