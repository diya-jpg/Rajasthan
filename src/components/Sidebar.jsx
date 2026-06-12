const navItems = [
  { label: 'Dashboard', icon: '🏠', active: true },
  { label: 'Government Documents', icon: '📁' },
  { label: 'Self Uploaded', icon: '☁️' },
  { label: 'Medical Documents', icon: '❤️' },
  { label: 'Shared Documents', icon: '🔗' },
  { label: 'Activity Log', icon: '🕒' },
  { label: 'Trash', icon: '🗑️' },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">R</div>
        <div>
          <div className="brand-title">Raj eVault</div>
          <div className="brand-subtitle">Government of Rajasthan</div>
        </div>
      </div>

      <nav className="nav-menu">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`nav-item ${item.active ? 'active' : ''}`}
            type="button"
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div>Secure · Verified · Private</div>
        <div className="footer-note">v1.0 - Demo build</div>
      </div>
    </aside>
  )
}

export default Sidebar