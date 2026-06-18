import "./SelfUploadStats.css";

import {
  FiFileText,
  FiShield,
  FiUpload,
  FiHardDrive,
  FiCalendar
} from "react-icons/fi";

function SelfUploadStats() {

  const stats = [
    {
      title: "Total Documents",
      value: "6",
      icon: <FiFileText />
    },
    {
      title: "Verified From Repository",
      value: "2",
      icon: <FiShield />
    },
    {
      title: "Uploaded Manually",
      value: "4",
      icon: <FiUpload />
    },
    {
      title: "Total Size",
      value: "23.32 MB",
      icon: <FiHardDrive />
    },
    {
      title: "Last Uploaded",
      value: "24 May 2026",
      icon: <FiCalendar />
    }
  ];

  return (
    <div className="stats-grid">
      {stats.map((item) => (
        <div
          key={item.title}
          className="stat-card"
        >
          <div className="stat-icon">
            {item.icon}
          </div>

<div className="stat-content">

  <div className="stat-title">
    {item.title}
  </div>

  <div className="stat-value">
    {item.value}
  </div>

</div>

        </div>
      ))}
    </div>
  );
}

export default SelfUploadStats;