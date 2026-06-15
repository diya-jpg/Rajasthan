import { useState } from "react";
import "./GovPageHeader.css";
import { FiRefreshCw, FiDownloadCloud } from "react-icons/fi";
import FetchDocumentModal from "./FetchDocumentModal";

function GovPageHeader() {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="gov-header">

        <div className="gov-header-left">
          <h1>Government Issued Documents</h1>

          <p>
            View, download and manage documents issued by
            government departments.
          </p>
        </div>

        <div className="gov-header-right">

          <div className="last-sync">
            <span>Last Sync</span>
            <strong>Today, 09:42 AM</strong>
          </div>

          <button className="sync-btn">
            <FiRefreshCw />
            Sync Documents
          </button>

          <button
            className="fetch-docs-btn"
            onClick={() => setShowModal(true)}
          >
            <FiDownloadCloud />
            Fetch Documents
          </button>

        </div>

      </div>

      {showModal && (
        <FetchDocumentModal
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default GovPageHeader;