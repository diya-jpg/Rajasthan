import "./Sidebar.css";
import logo from "../assets/raivault-logo.png";

import {
FiGrid,
FiFileText,
FiShare2,
FiDatabase
} from "react-icons/fi";

import { NavLink } from "react-router-dom";

function Sidebar() {
return ( <aside className="sidebar">


  <div className="brand">
    <img
      src={logo}
      alt="Raj eVault"
      className="brand-logo"
    />
  </div>

  <nav className="nav-menu">

    <NavLink
      to="/"
      end
      className={({ isActive }) =>
        `nav-item ${isActive ? "active" : ""}`
      }
    >
      <span className="nav-icon">
        <FiGrid />
      </span>

      <span>Dashboard</span>
    </NavLink>

    <NavLink
      to="/all-documents"
      className={({ isActive }) =>
        `nav-item ${isActive ? "active" : ""}`
      }
    >
      <span className="nav-icon">
        <FiFileText />
      </span>

      <span>All Documents</span>
    </NavLink>

    <NavLink
      to="/shared-documents"
      className={({ isActive }) =>
        `nav-item ${isActive ? "active" : ""}`
      }
    >
      <span className="nav-icon">
        <FiShare2 />
      </span>

      <span>Shared Documents</span>
    </NavLink>

    <div className="storage-nav-section">

      <div className="storage-nav-item">
        <span className="nav-icon">
          <FiDatabase />
        </span>

        <span>Storage</span>
      </div>

      <div className="storage-progress-line">
        <div className="storage-progress-fill"></div>
      </div>

      <div className="storage-info">
        23.32 MB / 512 MB
      </div>

    </div>

  </nav>

  <div className="sidebar-footer">

    <div className="footer-security">
      Secure · Verified · Private
    </div>

    <div className="footer-note">
      Rajasthan Digital Vault
    </div>

  </div>

</aside>


);
}

export default Sidebar;
