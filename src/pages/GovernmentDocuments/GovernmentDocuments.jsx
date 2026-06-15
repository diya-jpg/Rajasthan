import "./GovernmentDocuments.css";

import GovPageHeader from "../../components/GovPageHeader";
import GovFilterBar from "../../components/GovFilterBar";
import GovTabs from "../../components/GovTabs";
import GovDocumentsTable from "../../components/GovDocumentsTable";

function GovernmentDocuments({ documents }) {
  return (
    <section className="gov-page">

      <GovPageHeader />

      <GovFilterBar />

      <GovTabs />

      <GovDocumentsTable documents={documents} />

    </section>
  );
}

export default GovernmentDocuments;