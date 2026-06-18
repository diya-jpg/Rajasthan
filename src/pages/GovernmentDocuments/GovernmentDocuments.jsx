import "./GovernmentDocuments.css";

import GovPageHeader from "../../components/GovPageHeader";
import GovFilterBar from "../../components/GovFilterBar";
import GovDocumentsTable from "../../components/GovDocumentsTable";

function GovernmentDocuments({ documents }) {
  return (
  <section className="gov-page">

  <div className="gov-banner">

    <div className="gov-banner-content">
      <span className="gov-badge">
        GOVERNMENT RECORDS
      </span>

      <h1>Government Documents</h1>

      <p>
        Access, verify and manage all your
        government-issued documents securely.
      </p>
    </div>

  </div>

  <GovFilterBar />

  <GovDocumentsTable documents={documents} />

</section>
  );
}

export default GovernmentDocuments;