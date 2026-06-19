import "./Footer.css";

import {
  FiLock,
  FiCheckCircle,
  FiShield
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="app-footer">

      <div className="footer-card">

        <div className="footer-icon">
          <FiLock />
        </div>

        <div>
          <h4>Secure</h4>
          <p>End-to-end encrypted vault</p>
        </div>

      </div>

      <div className="footer-card">

        <div className="footer-icon">
          <FiCheckCircle />
        </div>

        <div>
          <h4>Verified</h4>
          <p>Government-issued sources</p>
        </div>

      </div>

      <div className="footer-card">

        <div className="footer-icon">
          <FiShield />
        </div>

        <div>
          <h4>Private</h4>
          <p>Visible only to you</p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;