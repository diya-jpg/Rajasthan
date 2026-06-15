import "./SharedTable.css";
import SharedRow from "./SharedRow";

function SharedTable({ documents }) {
  return (
    <div className="shared-table">

      <div className="shared-table-header">

        <span>Document</span>
        <span>Shared With</span>
        <span>Shared On</span>
        <span>Valid Till</span>
        <span>Status</span>
        <span>Actions</span>

      </div>

      {documents.map((doc) => (
        <SharedRow
          key={doc.title}
          doc={doc}
        />
      ))}

    </div>
  );
}

export default SharedTable;