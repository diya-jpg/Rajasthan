import "./FetchDocumentModal.css";
import { FiX, FiInfo, FiShield } from "react-icons/fi";

function FetchDocumentModal({ onClose }) {
  return (
    <div className="modal-overlay">

      <div className="fetch-modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          <FiX />
        </button>

        <h2>Fetch Government Document</h2>

        <p className="modal-subtitle">
          Retrieve your official government-issued
          document from connected departments.
        </p>

        <div className="info-box">
          <FiInfo />
          <span>
            Ensure you have the correct document number
            with you. The document will be added to your
            account after successful verification.
          </span>
        </div>

        <div className="form-group">
          <label>DOCUMENT TYPE</label>

          <select>
            <option>Caste Certificate</option>
            <option>Income Certificate</option>
            <option>Birth Certificate</option>
            <option>Driving Licence</option>
          </select>
        </div>

        <div className="form-group">
          <label>CERTIFICATE NUMBER</label>

          <input
            type="text"
            placeholder="123456"
          />

          <small>
            Example: 240618113100
          </small>
        </div>

        <div className="issued-box">
          <FiShield />

          <div>
            <span>Issued By</span>

            <strong>
              Social Justice & Empowerment Department
            </strong>
          </div>
        </div>

        <a
          href="/"
          onClick={(e) => e.preventDefault()}
          className="help-link"
        >
          Where can I find this number?
        </a>

        <div className="success-box">

          <strong>
            Document found successfully.
          </strong>

          <p>
            It has been added to your vault.
          </p>

          <span>
            12th Marksheet - RBSE
          </span>

        </div>

        <div className="modal-footer">

          <button
            className="done-btn"
            onClick={onClose}
          >
            Done
          </button>

        </div>

      </div>

    </div>
  );
}

export default FetchDocumentModal;