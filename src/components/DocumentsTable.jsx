import "./DocumentsTable.css";
import DocumentRow from "./DocumentRow";

function DocumentsTable({ documents }) {
return ( <div className="documents-table">


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
