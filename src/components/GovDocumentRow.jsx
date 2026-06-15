import "./GovDocumentRow.css";

function GovDocumentRow({ doc }) {
  return (
    <div className="gov-row">

      <div className="doc-details">
        <h4>{doc.title}</h4>
        <p>{doc.department}</p>
      </div>

      <div className="doc-status">
        <span className="verified-badge">
          {doc.status}
        </span>
      </div>

      <div className="doc-size">
        {doc.size}
      </div>

      <div className="doc-date">
        {doc.date}
      </div>

      <div className="doc-actions">
        <button title="View">👁️</button>
        <button title="Download">⬇️</button>
        <button title="Share">🔗</button>
      </div>

    </div>
  );
}

export default GovDocumentRow;