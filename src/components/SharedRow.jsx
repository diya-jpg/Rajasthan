import "./SharedRow.css";

import {
  FiCopy,
  FiShare2
} from "react-icons/fi";

function SharedRow({ doc }) {
  return (
    <div className="shared-row">

      <div className="shared-doc">

        <h4>{doc.title}</h4>

        <p>{doc.purpose}</p>

      </div>

      <div>{doc.sharedWith}</div>

      <div>{doc.sharedOn}</div>

      <div>{doc.validTill}</div>

      <div>

        <span
          className={
            doc.status === "Active"
              ? "active-badge"
              : "expired-badge"
          }
        >
          {doc.status}
        </span>

      </div>

      <div className="shared-actions">

        <button>
          <FiCopy />
        </button>

        <button className="revoke-btn">
          <FiShare2 />
          Revoke Access
        </button>

      </div>

    </div>
  );
}

export default SharedRow;