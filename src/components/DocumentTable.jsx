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

      <div className="documents-table">

        <div className="table-header">

          <div>Document Name</div>
          <div>Department</div>
          <div>Issuer</div>
          <div>Status</div>
          <div>Updated</div>
          <div>Action</div>

        </div>

        {documents.map((doc, index) => (

          <div
            key={index}
            className="table-row"
          >

            <div>{doc.name}</div>

            <div>{doc.department}</div>

            <div>{doc.issuer}</div>

            <div>
              <span className="status-badge">
                {doc.status}
              </span>
            </div>

            <div>{doc.updated}</div>

            <div>
              <button className="view-btn">
                View
              </button>
            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default DocumentsTable;