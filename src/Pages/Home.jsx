import './home.css'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <h1 className="home-title">Home</h1>
      <p style={{color:"green"}}>Welcome to our website</p>
    </div>
  );
}

export default Home;
