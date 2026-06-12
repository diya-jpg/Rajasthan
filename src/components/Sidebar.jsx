// import "./Sidebar.css";

// function Sidebar({ navItems }) {
//   return (
//     <aside className="sidebar">
//       <div className="brand">
//         <div className="brand-mark">R</div>
//         <div>
//           <div className="brand-title">Raj eVault</div>
//           <div className="brand-subtitle">
//             Government of Rajasthan
//           </div>
//         </div>
//       </div>

//       <nav className="nav-menu">
//         {navItems.map((item) => (
//           <button
//             key={item.label}
//             className={`nav-item ${item.active ? "active" : ""}`}
//           >
//             <span className="nav-icon">{item.icon}</span>
//             <span>{item.label}</span>
//           </button>
//         ))}
//       </nav>

//       <div className="sidebar-footer">
//         <div>Secure · Verified · Private</div>
//         <div className="footer-note">
//           v1.0 - Demo build
//         </div>
//       </div>
//     </aside>
//   );
// }

// export default Sidebar;
// import "./Sidebar.css";
// import logo from "../assets/raivault-logo.png";

// function Sidebar({ navItems }) {
//   return (
//     <aside className="sidebar">

//       <div className="brand">
//         <img
//           src={logo}
//           alt="Rai Vault"
//           className="brand-logo"
//         />
//       </div>

//       <nav className="nav-menu">
//         {navItems.map((item) => (
//           <button
//             key={item.label}
//             className={`nav-item ${item.active ? "active" : ""}`}
//           >
//             <span className="nav-icon">{item.icon}</span>
//             <span>{item.label}</span>
//           </button>
//         ))}
//       </nav>

//       <div className="sidebar-footer">
//         <div>Secure · Verified · Private</div>
//         <div className="footer-note">
//           Rajasthan Digital Vault
//         </div>
//       </div>

//     </aside>
//   );
// }

// export default Sidebar;

import "./Sidebar.css";
import logo from "../assets/raivault-logo.png";
import StorageWidget from "./StorageWidget";

function Sidebar({ navItems }) {
return ( <aside className="sidebar">


  <div className="brand">
    <img
      src={logo}
      alt="Rai Vault"
      className="brand-logo"
    />
  </div>

  <nav className="nav-menu">
    {navItems.map((item) => (
      <button
        key={item.label}
        className={`nav-item ${item.active ? "active" : ""}`}
      >
        <span className="nav-icon">{item.icon}</span>
        <span>{item.label}</span>
      </button>
    ))}
  </nav>

  {/* Storage Widget */}
  <StorageWidget />

  {/* Footer */}
  <div className="sidebar-footer">
    <div>Secure · Verified · Private</div>

    <div className="footer-note">
      Rajasthan Digital Vault
    </div>
  </div>

</aside>


);
}

export default Sidebar;
