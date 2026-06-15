import "./SelfUploadFilterBar.css";

import { FiSearch } from "react-icons/fi";

function SelfUploadFilterBar() {
  return (
    <div className="self-filter-bar">

      <div className="self-search-box">

        <FiSearch className="self-search-icon" />

        <input
          type="text"
          placeholder="Search by document name, type, number..."
        />

      </div>

      <select>
        <option>All Categories</option>
        <option>Identity</option>
        <option>Personal</option>
        <option>Financial</option>
      </select>

      <select>
        <option>All File Types</option>
        <option>PDF</option>
        <option>JPG</option>
        <option>PNG</option>
        <option>DOCX</option>
      </select>

      <select>
        <option>Sort by Recently Added</option>
        <option>Oldest First</option>
        <option>Name A-Z</option>
      </select>

    </div>
  );
}

export default SelfUploadFilterBar;