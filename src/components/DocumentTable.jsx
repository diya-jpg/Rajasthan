import "./DocumentTable.css";

function DocumentsTable({
  selectedDepartment,
  selectedDocumentType
}) {

  const documents = [
    {
      name: selectedDocumentType,
      department: selectedDepartment,
      issuer: "Government of Rajasthan",
      status: "Verified",
      updated: "15 Jun 2026"
    },
    {
      name: selectedDocumentType,
      department: selectedDepartment,
      issuer: "eVault Repository",
      status: "Available",
      updated: "12 Jun 2026"
    }
  ];

  return (

    <div className="dashboard-section">

      <h2 className="dashboard-section-title">
        Documents
      </h2>

      
    </div>

  );
}

export default DocumentsTable;