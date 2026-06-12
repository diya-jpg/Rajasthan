import "./Topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <div className="search-wrapper">
        <span className="search-icon">🔍</span>

        <input
          type="search"
          placeholder="Search documents..."
        />
      </div>

      <div className="top-status">
        Aadhaar Verified Citizen
      </div>
    </div>
  );
}

export default Topbar;