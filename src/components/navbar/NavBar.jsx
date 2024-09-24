import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="nav-left">
          <Link to="/">Shubham</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </div>
        <div className="nav-right">
          <button className="contact-button">
            <Link to="/contact">Contact</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
