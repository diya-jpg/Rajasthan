import "./RecentDocuments.css";
import {
  FiFileText,
  FiEye,
  FiDownload,
  FiShare2,
} from "react-icons/fi";

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
            <div className="document-left">

              <div className="document-icon">
                <FiFileText />
              </div>

              <div className="document-content">
                <p className="document-title">
                  {doc.title}
                </p>

                <p className="document-subtitle">
                  {doc.subtitle}
                </p>
              </div>

            </div>

            <div className="document-meta">
              <span>{doc.date}</span>

              <div className="doc-actions">
                <button>
                  <FiEye />
                </button>

                <button>
                  <FiDownload />
                </button>

                <button>
                  <FiShare2 />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentDocuments;