import "./SidePanels.css";

function SidePanels({ recentDocs }) {
  return (
    <aside className="side-panels">

      <div className="panel">

        <div className="panel-title-row">
          <div>
            <p className="panel-label">
              Recent Documents
            </p>
          </div>
        </div>

        {recentDocs.slice(0, 5).map((doc) => (
          <div
            className="news-item"
            key={doc.title}
          >
            <strong>{doc.title}</strong>

            <p>{doc.subtitle}</p>
          </div>
        ))}

      </div>

    </aside>
  );
}

export default SidePanels;