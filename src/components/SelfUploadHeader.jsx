import "./SelfUploadHeader.css";

import {
  FiUpload,
  FiRefreshCw,
  FiPlus
} from "react-icons/fi";

function SelfUploadHeader() {
  return (
    <div className="self-header">

      <div className="self-header-left">

        <h1>Self Uploaded Documents</h1>

        <p>
          Verify from government repositories first.
          If not found, you can upload a supporting document.
        </p>

      </div>

      <div className="self-header-right">

        <button className="secondary-btn">
          <FiUpload />
          Upload Multiple
        </button>

        <button className="secondary-btn">
          <FiRefreshCw />
          Fetch from DigiLocker
        </button>

        <button className="primary-btn">
          <FiPlus />
          Upload Document
        </button>

      </div>

    </div>
  );
}

export default SelfUploadHeader;