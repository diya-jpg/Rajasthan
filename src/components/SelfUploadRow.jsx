import "./SelfUploadRow.css";

import {
  FiFileText,
  FiEye,
  FiDownload,
  FiShare2
} from "react-icons/fi";

function SelfUploadRow({ doc }) {
  return (
    <div className="self-row">

      <div className="doc-details">

        <div className="doc-icon">
          <FiFileText />
        </div>

        <div className="doc-info">
          <h4>{doc.title}</h4>
        </div>

      </div>

      <div>{doc.category}</div>

      <div>{doc.type}</div>

      <div>

        <span
          className={
            doc.status === "Repository Verified"
              ? "verified-badge"
              : "uploaded-badge"
          }
        >
          {doc.status}
        </span>

      </div>

      <div>{doc.size}</div>

      <div>{doc.uploadedOn}</div>

      <div className="doc-actions">

        <button title="View">
          <FiEye />
        </button>

        <button title="Download">
          <FiDownload />
        </button>

        <button title="Share">
          <FiShare2 />
        </button>

      </div>

    </div>
  );
}

export default SelfUploadRow;