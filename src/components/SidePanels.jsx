import "./SidePanels.css";

function SidePanels() {
  return (
    <aside className="side-panels">

      <div className="panel">

        <div className="panel-title-row">
          <h2>Help Center</h2>
        </div>

        <p className="storage-note">
          Need help with uploading,
          fetching or sharing documents?
        </p>

        <button className="help-btn">
          Visit Help Center
        </button>

      </div>

    </aside>
  );
}

export default SidePanels;