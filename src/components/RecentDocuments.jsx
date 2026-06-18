import "./RecentDocuments.css";
import { FiEye } from "react-icons/fi";

function RecentDocuments({ recentDocs }) {
  return (
    <div className="panel">

      <div className="panel-title-row">
        <h2>Recent Documents</h2>
      </div>

      {recentDocs.slice(0, 5).map((doc) => (
        <div
          className="news-item"
          key={doc.title}
        >
          <div>
            <strong>{doc.title}</strong>
            <p>{doc.date}</p>
          </div>

          <FiEye />
        </div>
      ))}

    </div>
  );
}

export default RecentDocuments;