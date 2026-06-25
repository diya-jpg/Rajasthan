import "./DocumentsTable.css";
import DocumentRow from "./DocumentRow";

function DocumentsTable({ documents }) {

  if (documents.length === 0) {

    return (

      <div className="documents-table empty-state">

        <h2>No Documents Found</h2>

        <p>
          No documents are available for this category.
        </p>

      </div>

    );

  }

  return (

    <div className="documents-table">

      <div className="documents-table-header">

        <span>Document Details</span>
        <span>Category</span>
        <span>Source</span>
        <span>Date</span>
        <span>Actions</span>

      </div>

      {documents.map((doc) => (

        <DocumentRow
          key={doc.documentId}
          doc={doc}
        />

      ))}

    </div>

  );

}

export default DocumentsTable;