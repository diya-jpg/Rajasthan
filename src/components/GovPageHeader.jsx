import "./GovPageHeader.css";

function GovPageHeader() {
  return (
    <div className="gov-header">

      <div>
        <h1>Government Issued Documents</h1>

        <p>
          View, download and manage government-issued
          certificates and official records.
        </p>
      </div>

      <button className="fetch-docs-btn">
        Fetch Government Documents
      </button>

    </div>
  );
}

export default GovPageHeader;