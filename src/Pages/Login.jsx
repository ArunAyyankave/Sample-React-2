import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Link to="/"><button>Login</button></Link>
      <br /><br />
      <Link to="/signup">Signup</Link>
    </div>
  );
}

export default Login;
