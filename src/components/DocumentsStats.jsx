import "./DocumentsStats.css";

import {
  FiFileText,
  FiHome,
  FiUploadCloud,
  FiBriefcase,
  FiHardDrive
} from "react-icons/fi";

function DocumentsStats({

  totalCount,

  govCount,

  digiCount,

  selfCount

}) {

 
  return (

    <div className="documents-stats">

      <div className="stat-card">

        <div className="stat-top">

          <div className="stat-icon">
            <FiFileText />
          </div>

          <span className="stat-number">
            {totalCount}
          </span>

        </div>

        <p>Total Documents</p>

      </div>

      <div className="stat-card">

        <div className="stat-top">

          <div className="stat-icon government">
            <FiHome />
          </div>

          <span className="stat-number">
            {govCount}
          </span>

        </div>

        <p>Government</p>

      </div>

      <div className="stat-card">

        <div className="stat-top">

          <div className="stat-icon upload">
            <FiUploadCloud />
          </div>

          <span className="stat-number">
            {selfCount}
          </span>

        </div>

        <p>Self Uploaded</p>

      </div>

      <div className="stat-card">

        <div className="stat-top">

          <div className="stat-icon digi">
            <FiBriefcase />
          </div>

          <span className="stat-number">
            {digiCount}
          </span>

        </div>

        <p>DigiLocker</p>

      </div>

      <div className="stat-card">

        <div className="stat-top">

          <div className="stat-icon storage">
            <FiHardDrive />
          </div>

          <span className="stat-number">
            12.5 MB
          </span>

        </div>

        <p>Total Size</p>

      </div>

    </div>

  );
}

export default DocumentsStats;