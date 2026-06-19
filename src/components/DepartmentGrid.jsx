import "./DepartmentGrid.css";

import {
  FiBook,
  FiTruck,
  FiUsers,
  FiBriefcase,
  FiHeart,
  FiHome
} from "react-icons/fi";

function DepartmentGrid({
  selectedDepartment,
  setSelectedDepartment
}) {

  const departments = [
    {
      name: "Revenue",
      description: "Land records & certificates",
      icon: <FiHome />,
      iconClass: "revenue-icon"
    },
    {
      name: "Education",
      description: "Academic records & certificates",
      icon: <FiBook />,
      iconClass: "education-icon"
    },
    {
      name: "Transport",
      description: "Driving license & RC",
      icon: <FiTruck />,
      iconClass: "transport-icon"
    },
    {
      name: "Jan Aadhaar",
      description: "Identity documents",
      icon: <FiUsers />,
      iconClass: "jan-icon"
    },
    {
      name: "Employment",
      description: "Employment records",
      icon: <FiBriefcase />,
      iconClass: "employment-icon"
    },
    {
      name: "Health",
      description: "Health records",
      icon: <FiHeart />,
      iconClass: "health-icon"
    }
  ];

  return (
    <div className="dashboard-section">

      <h2 className="dashboard-section-title">
        Browse by Department
      </h2>

      <div className="department-grid">

        {departments.map((item) => (

          <div
            key={item.name}
            className={
              selectedDepartment === item.name
                ? "department-card active"
                : "department-card"
            }
            onClick={() =>
              setSelectedDepartment(item.name)
            }
          >

            <div className="department-top">

              <div
                className={`department-icon ${item.iconClass}`}
              >
                {item.icon}
              </div>

              <h4 className="department-title">
                {item.name}
              </h4>

            </div>

            <div className="department-bottom">

              <p className="department-description">
                {item.description}
              </p>

              <span className="department-arrow">
                →
              </span>

            </div>

          </div>

        ))}

      </div>

      <div className="department-footer">

        <button className="view-all-btn">
          View All →
        </button>

      </div>

    </div>
  );
}

export default DepartmentGrid;