import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
