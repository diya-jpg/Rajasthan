import "./Footer.css"

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Raj eVault</h3>
          <p>Government of Rajasthan — Citizen Document Vault</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Help & Support</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li><a href="#">support@rajevault.rajasthan.gov.in</a></li>
            <li><a href="#">1800-XXX-XXXX (Toll Free)</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="footer-social">
            <a href="#" title="Twitter">𝕏</a>
            <a href="#" title="Facebook">f</a>
            <a href="#" title="YouTube">▶</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Government of Rajasthan. All rights reserved. | Secure · Verified · Private</p>
      </div>
    </footer>
  )
}

export default Footer