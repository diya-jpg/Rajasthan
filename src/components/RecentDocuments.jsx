import "./RecentDocuments.css";

function RecentDocuments({ recentDocs }) {
  return (
    <section className="recent-panel">
      <div className="panel-header">

        <h2>Recent Documents</h2>

        <button className="link-button">
          View all →
        </button>

      </div>

      <div className="document-list">
        {recentDocs.map((doc) => (
          <div
            key={doc.title}
            className="document-row"
          >
            <div>
              <p className="document-title">
                {doc.title}
              </p>

              <p className="document-subtitle">
                {doc.subtitle}
              </p>
            </div>

            <div className="document-meta">
              <span>{doc.date}</span>

              <div className="doc-actions">
                <button>👁️</button>
                <button>⬇️</button>
                <button>🔗</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentDocuments;