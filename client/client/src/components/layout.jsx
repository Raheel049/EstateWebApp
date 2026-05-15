// Layout.jsx
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import "./layout.scss"

function Layout() {
  return (
    <div className="layout">
      <div className="navbarItem">
        <Navbar />
      </div>
      <div className="content">
        <Outlet /> 
      </div>
    </div>
  );
}

export default Layout