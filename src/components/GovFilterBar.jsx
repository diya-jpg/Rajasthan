import "./GovFilterBar.css";

function GovFilterBar() {
  return (
    <div className="gov-filter-bar">

      <div className="search-box">
        <input
          type="text"
          placeholder="Search by document name, certificate number..."
        />
      </div>

      <select>
        <option>All Departments</option>
        <option>Education Department</option>
        <option>Transport Department</option>
        <option>UIDAI</option>
        <option>Revenue Department</option>
      </select>

      <select>
        <option>All Status</option>
        <option>Verified</option>
        <option>Pending</option>
      </select>

      <button className="filter-btn">
        Apply Filters
      </button>

    </div>
  );
}

export default GovFilterBar;