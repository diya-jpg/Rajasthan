import "./DocumentsHeader.css";

function DocumentsHeader({ onUploadClick }) {
return ( <div className="documents-header">


  <div>
    <h1>My Documents</h1>

    <p>
      Access, manage and share your
      verified documents securely.
    </p>
  </div>

  <div className="documents-header-actions">

    <button className="secondary-btn">
      Sync with DigiLocker
    </button>

    <button className="secondary-btn">
      Fetch Government Document
    </button>

    <button className="primary-btn"onClick={onUploadClick}>
      Upload Document
    </button>

  </div>

</div>


);
}

export default DocumentsHeader;
