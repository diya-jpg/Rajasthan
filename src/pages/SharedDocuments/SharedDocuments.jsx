import "./SharedDocuments.css";

import SharedHeader from "../../components/SharedHeader";
import SharedTable from "../../components/SharedTable";

function SharedDocuments() {

  const sharedDocs = [
    {
      title: "Income Certificate",
      purpose: "Scholarship Verification",
      sharedWith: "ABC College",
      sharedOn: "12 May 2026",
      validTill: "12 Jun 2026",
      status: "Active",
    },
    {
      title: "Driving Licence",
      purpose: "License Renewal",
      sharedWith: "Transport Office, Jaipur",
      sharedOn: "05 May 2026",
      validTill: "06 May 2026",
      status: "Expired",
    },
  ];

  return (
    <section className="shared-page">

      <SharedHeader />

      <SharedTable documents={sharedDocs} />

    </section>
  );
}

export default SharedDocuments;