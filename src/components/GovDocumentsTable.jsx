import "./GovDocumentsTable.css";
import GovDocumentRow from "./GovDocumentRow";

function GovDocumentsTable({ documents }) {
  return (
    <div className="gov-table">

      <div className="gov-table-header">

        <span>Document Details</span>
        <span>Status</span>
        <span>Size</span>
        <span>Date</span>
        <span>Actions</span>

      </div>

      {documents.map((doc) => (
        <GovDocumentRow
          key={doc.title}
          doc={doc}
        />
      ))}

    </div>
  );
}

export default GovDocumentsTable;