import "./GovFilterBar.css";
import { FiSearch, FiFilter } from "react-icons/fi";

function GovFilterBar() {
  return (
    <div className="gov-filter-bar">

      <div className="search-box">
        <FiSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search by document name, certificate number, department..."
        />
      </div>

      <div className="filter-actions">

        <button className="mini-btn active">
          Personal
        </button>

        <button className="mini-btn">
          Family
        </button>

        <button className="mini-btn">
          <FiFilter />
          Filters
        </button>

        <select className="sort-select">
          <option>Sort: Recent</option>
          <option>Oldest</option>
          <option>Name A-Z</option>
        </select>

      </div>

    </div>
  );
}

export default GovFilterBar;