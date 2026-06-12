import "./StorageWidget.css";

function StorageWidget() {
  return (
    <div className="storage-widget">
      <div className="storage-header">
        <span>🌿 Storage Usage</span>
        <span>23.32 MB</span>
      </div>

      <div className="storage-bar">
        <div
          className="storage-progress"
          style={{ width: "4.6%" }}
        />
      </div>

      <div className="storage-info">
        23.32 MB of 512 MB used
      </div>
    </div>
  );
}

export default StorageWidget;