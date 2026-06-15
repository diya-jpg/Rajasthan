import "./Topbar.css";
import { FiBell, FiSearch } from "react-icons/fi";

function Topbar() {

  const user = {
    initials: "RK",
    name: "Riya Kumari",
    aadhaar: "1XXXXXXXXXXX",
  };

  const notificationCount = 3;

  return (
    <header className="topbar">

      <div className="search-wrapper">
        <FiSearch className="search-icon" />

        <input
          type="search"
          placeholder="Search documents, certificates, departments..."
        />
      </div>

      <div className="topbar-right">

        <button
          className="notification-btn"
          aria-label="Notifications"
        >
          <FiBell />

          {notificationCount > 0 && (
            <span className="notification-badge">
              {notificationCount}
            </span>
          )}
        </button>

        <div className="user-profile">

          <div className="user-avatar">
            {user.initials}
          </div>

          <div className="user-info">
            <strong>{user.name}</strong>

            <span>
              Jan Aadhaar: {user.aadhaar}
            </span>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;