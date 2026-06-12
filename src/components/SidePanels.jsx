import "./SidePanels.css";

function SidePanels({ recentDocs }) {
return ( <aside className="side-panels">


  {/* Newly Added Documents */}
  <div className="panel">
    <div className="panel-title-row">
      <div>
        <p className="panel-label">Newly Added Documents</p>
      </div>
    </div>

    {recentDocs.slice(0, 3).map((doc) => (
      <div className="news-item" key={doc.title}>
        <strong>{doc.title}</strong>
        <p>{doc.subtitle}</p>
      </div>
    ))}
  </div>

  {/* What's New */}
  <div className="panel news-panel">
    <div className="panel-title-row">
      <div>
        <p className="panel-label">What's New</p>

      </div>
    </div>

    <div className="news-item">
      <strong>Medical records now supported</strong>
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
