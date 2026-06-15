import "./Sidebar.css";
import logo from "../assets/raivault-logo.png";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

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
          <span className="nav-icon">🏠</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/government-documents"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span className="nav-icon">📁</span>
          <span>Government Documents</span>
        </NavLink>

        <NavLink
          to="/self-uploaded"
          className="nav-item"
        >
          <span className="nav-icon">☁️</span>
          <span>Self Uploaded</span>
        </NavLink>

        <NavLink
          to="/medical-documents"
          className="nav-item"
        >
          <span className="nav-icon">❤️</span>
          <span>Medical Documents</span>
        </NavLink>

        <NavLink
          to="/shared-documents"
          className="nav-item"
        >
          <span className="nav-icon">🔗</span>
          <span>Shared Documents</span>
        </NavLink>

      {/* STORAGE */}

<div className="storage-inline">

  <div className="storage-label">

    <span className="storage-icon">
      💾
    </span>

    <span>
      Storage
    </span>

  </div>

  <div className="storage-bar">
    <div className="storage-fill"></div>
  </div>

  <div className="storage-text">
    3.5 GB of 10 GB used
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