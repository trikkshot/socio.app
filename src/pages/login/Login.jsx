import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss"

const Login = () => {

  const {Login} = useContext(AuthContext);

  const handleLogin = ()=>{
    Login();
  }
  

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Socio.app</h1>
          <p>
            Welcome to the page Land where you will explore yourself to the world!
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
          <button>Register</button>
          </Link>
          
            
          
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;