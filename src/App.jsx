import './App.css'

function App() {
  const navItems = [
    { label: 'Dashboard', icon: '🏠', active: true },
    { label: 'Government Documents', icon: '📁' },
    { label: 'Self Uploaded', icon: '☁️' },
    { label: 'Medical Documents', icon: '❤️' },
    { label: 'Shared Documents', icon: '🔗' },
    { label: 'Activity Log', icon: '🕒' },
    { label: 'Trash', icon: '🗑️' },
  ]

  const actionCards = [
    { title: 'View Government Documents', subtitle: 'Browse issued records', icon: '📄' },
    { title: 'Upload Document', subtitle: 'Add new personal files', icon: '⬆️' },
    { title: 'Fetch Government Document', subtitle: 'Sync verified data', icon: '🖥️' },
    { title: 'Share Document', subtitle: 'Send securely with permission', icon: '📤' },
    { title: 'Medical Documents', subtitle: 'Manage health certificates', icon: '💊' },
  ]

  const recentDocs = [
    { title: '12th Marksheet - RBSE', subtitle: 'Board of Secondary Education, Rajasthan', date: '12 May 2026' },
    { title: '10th Marksheet - RBSE', subtitle: 'Board of Secondary Education, Rajasthan', date: '10 May 2026' },
  ]

  return (
    <div className="app-shell">
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

      <main className="page-content">
        <div className="topbar">
          <div className="search-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="search"
              placeholder="Search documents, departments, certificate numbers..."
              aria-label="Search documents"
            />
          </div>
          <div className="top-status">Aadhaar Verified Citizen</div>
        </div>
        <div className="content-main">
          <section className="hero-section">
          <div className="hero-text">
            <p className="eyebrow">Citizen Workspace</p>
            <h1>Namaste, Citizen 👋</h1>
            <p>Manage your government-issued and personal documents — all in one secure place.</p>
          </div>

          <div className="hero-cards">
            {actionCards.map((card) => (
              <article key={card.title} className="action-card">
                <div className="action-icon">{card.icon}</div>
                <div>
                  <h2>{card.title}</h2>
                  <p>{card.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
          </section>

          <section className="dashboard-grid">

          <div className="main-column">
            <section className="recent-panel">
              <div className="panel-header">
                <div>
                  <p className="panel-label">Recent Documents</p>
                  <h2>Saved records in your vault</h2>
                </div>
                <button type="button" className="link-button">View all →</button>
              </div>

              <div className="document-list">
                {recentDocs.map((doc) => (
                  <div key={doc.title} className="document-row">
                    <div>
                      <p className="document-title">{doc.title}</p>
                      <p className="document-subtitle">{doc.subtitle}</p>
                    </div>
                    <div className="document-meta">
                      <span>{doc.date}</span>
                      <div className="doc-actions">
                        <button type="button" title="View">👁️</button>
                        <button type="button" title="Download">⬇️</button>
                        <button type="button" title="Share">🔗</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="side-panels">
            <div className="panel storage-panel">
              <div className="panel-title-row">
                <div>
                  <p className="panel-label">Storage Usage</p>
                  <h2>23.32 MB used</h2>
                </div>
                <span className="storage-badge">512 MB total</span>
              </div>
              <div className="storage-meter">
                <div className="storage-fill" style={{ width: '4.6%' }} />
              </div>
              <p className="storage-note">You’re using 4.6% of your free vault storage.</p>
            </div>

            <div className="panel news-panel">
              <div className="panel-title-row">
                <div>
                  <p className="panel-label">What’s New</p>
                  <h2>Latest updates</h2>
                </div>
              </div>
              <div className="news-item">
                <strong>Medical records now supported</strong>
                <p>Prescriptions and lab reports are stored safely.</p>
              </div>
              <div className="news-item">
                <strong>Faster DigiLocker sync</strong>
                <p>Verified documents sync up to 2× faster.</p>
              </div>
            </div>
          </aside>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
