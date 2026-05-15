// Navbar.jsx

import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import navImg from "../assets/navLogo.jpg"
import {FaBars, FaTimes} from "react-icons/fa"
import profileImg from "../assets/noavter.jpeg"

function Navbar() {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="left">
        <Link to="/" className="logo">
          <img src={navImg} alt="" />
          <span>LamaEstate</span>
        </Link>

        <div className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Agents</Link>
        </div>
      </div>

      {/* RIGHT */}
      <div className="right">
        {currentUser ? (
          <div className="user">

            <p>{currentUser.username}</p>

            <img
              src={currentUser.avatar || profileImg}
              alt=""
            />

            <Link to="/profilePage" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <div className="authLinks">
            <Link to="/login">Sign in</Link>

            <Link to="/register" className="register">
              Sign up
            </Link>
          </div>
        )}

        {/* HAMBURGER */}
        <div className="menuIcon">
          <FaBars
            onClick={() => setOpen(!open)}
          />
        </div>

        {/* MOBILE SIDEBAR */}
        <div className={open ? "menu active" : "menu"}>
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link to="/" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <Link to="/" onClick={() => setOpen(false)}>
            Agents
          </Link>

          {!currentUser && (
            <>
              <Link to="/login" onClick={() => setOpen(false)}>
                Sign in
              </Link>

              <Link to="/register" onClick={() => setOpen(false)}>
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;