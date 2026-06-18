import "./DepartmentGrid.css";

import {
  FiBook,
  FiTruck,
  FiUsers,
  FiBriefcase,
  FiHeart,
  FiHome,
  FiGrid,
  FiLayers
} from "react-icons/fi";

function DepartmentGrid({
  selectedDepartment,
  setSelectedDepartment
}) {

  const departments = [
    {
      name: "Education",
      icon: <FiBook />,
      iconClass: "education-icon"
    },
    {
      name: "Transport",
      icon: <FiTruck />,
      iconClass: "transport-icon"
    },
    {
      name: "Jan Aadhaar",
      icon: <FiUsers />,
      iconClass: "jan-icon"
    },
    {
      name: "Employment",
      icon: <FiBriefcase />,
      iconClass: "employment-icon"
    },
    {
      name: "Health",
      icon: <FiHeart />,
      iconClass: "health-icon"
    },
    {
      name: "Revenue",
      icon: <FiHome />,
      iconClass: "revenue-icon"
    },
    {
      name: "SSO",
      icon: <FiGrid />,
      iconClass: "sso-icon"
    },
    {
      name: "Other",
      icon: <FiLayers />,
      iconClass: "other-icon"
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

            <div
              className={`department-icon ${item.iconClass}`}
            >
              {item.icon}
            </div>

            <div className="department-name">
              {item.name}
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default DepartmentGrid;