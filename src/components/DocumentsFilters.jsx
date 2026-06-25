import "./DocumentsFilters.css";

function DocumentsFilters({

  activeTab,

  setActiveTab

}) {

  return (

    <div className="documents-filters">

      <div className="search-box">

        <input
          type="text"
          placeholder="Search documents..."
        />

      </div>

      <div className="filter-tabs">

        <button

          className={
            activeTab === "all"
              ? "active"
              : ""
          }

          onClick={() =>
            setActiveTab("all")
          }

        >

          All Documents

        </button>

        <button

          className={
            activeTab === "government"
              ? "active"
              : ""
          }

          onClick={() =>
            setActiveTab("government")
          }

        >

          Government

        </button>

        <button

          className={
            activeTab === "self"
              ? "active"
              : ""
          }

          onClick={() =>
            setActiveTab("self")
          }

        >

          Self Uploaded

        </button>

        <button

          className={
            activeTab === "digilocker"
              ? "active"
              : ""
          }

          onClick={() =>
            setActiveTab("digilocker")
          }

        >

          DigiLocker

        </button>

      </div>

      <div className="filter-actions">

        <button>

          Sort

        </button>

      </div>

    </div>

  );

}

export default DocumentsFilters;