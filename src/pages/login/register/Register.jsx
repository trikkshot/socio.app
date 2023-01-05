
import { Link } from "react-router-dom";
import "./register.scss"

const Register = () => {
  
    return (
      <div className="Register">
        <div className="card">
          <div className="left">
            <h1>Socio.app</h1>
            <p>
              Welcome to the page Land where you will explore yourself to the world!
            </p>
            <span>Do you have an account?</span>
            <Link to="/login">
            <button>Login</button>
            
            </Link>
            
              
            
          </div>
          <div className="right">
            <h1>Register</h1>
            <form>
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="text" placeholder="Name" />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  
export default Register;