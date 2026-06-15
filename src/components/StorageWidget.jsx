import "./StorageWidget.css";

function StorageWidget() {
  return (
    <div className="storage-widget">

      <div className="storage-title">
        Storage
      </div>

      <div className="storage-progress">
        <div
          className="storage-progress-fill"
          style={{ width: "35%" }}
        ></div>
      </div>

      <p className="storage-text">
        3.5 GB of 10 GB used
      </p>

      <button className="storage-btn">
        Get More Storage
      </button>

    </div>
  );
}

export default StorageWidget;