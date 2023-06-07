import { Link, useNavigate } from "react-router-dom";
import Button from "./Buttton";
import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="nav-bar">
      <div className="nav-links">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-buttons">
        <Button onClick={() => navigate("/login")}>Login</Button>
        <Button onClick={() => navigate("/signup")}>Sign Up</Button>
      </div>
    </nav>
  );
}

export default NavBar;
