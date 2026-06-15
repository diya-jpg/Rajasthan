import "./SelfUploadTable.css";
import SelfUploadRow from "./SelfUploadRow";

function SelfUploadTable({ documents }) {
  return (
    <div className="self-table">

      <div className="self-table-header">

        <span>Document Details</span>
        <span>Category</span>
        <span>Type</span>
        <span>Status</span>
        <span>Size</span>
        <span>Uploaded On</span>
        <span>Actions</span>

      </div>

      {documents.map((doc) => (
        <SelfUploadRow
          key={doc.title}
          doc={doc}
        />
      ))}

    </div>
  );
}

export default SelfUploadTable;