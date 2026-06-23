import "./DocumentRow.css";

import {
  FiEye,
  FiDownload,
  FiShare2,
  FiFileText
} from "react-icons/fi";

function DocumentRow({ doc }) {

  return (

    <div className="document-row">

      <div className="document-details">

        <div className="document-icon">
          <FiFileText />
        </div>

        <div className="document-info">

          <h4>{doc.title}</h4>

          <p>{doc.documentId}</p>

        </div>

      </div>

      <div className="document-category">
        {doc.department}
      </div>

      <div className="document-source">
        {doc.source}
      </div>

      <div className="document-date">
        {doc.date}
      </div>

      <div className="document-actions">

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

export default DocumentRow;