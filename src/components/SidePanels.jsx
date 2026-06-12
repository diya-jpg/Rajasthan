import "./SidePanels.css";

function SidePanels() {
  return (
    <aside className="side-panels">
      <div className="panel storage-panel">
        <div className="panel-title-row">
          <div>
            <p className="panel-label">Storage Usage</p>
            <h2>23.32 MB used</h2>
          </div>

          <span className="storage-badge">
            512 MB total
          </span>
        </div>

        <div className="storage-meter">
          <div
            className="storage-fill"
            style={{ width: "4.6%" }}
          />
        </div>

        <p className="storage-note">
          You’re using 4.6% of your free vault storage.
        </p>
      </div>

      <div className="panel news-panel">
        <div className="panel-title-row">
          <div>
            <p className="panel-label">What’s New</p>
            <h2>Latest updates</h2>
          </div>
        </div>

        <div className="news-item">
          <strong>
            Medical records now supported
          </strong>
          <p>
            Prescriptions and lab reports are stored safely.
          </p>
        </div>

        <div className="news-item">
          <strong>Faster DigiLocker sync</strong>
          <p>
            Verified documents sync up to 2× faster.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default SidePanels;