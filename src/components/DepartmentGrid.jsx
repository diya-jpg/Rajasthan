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
    },
    {
      name: "SSO",
      description: "SSO services",
      icon: <FiGrid />,
      iconClass: "sso-icon"
    },
    {
      name: "Other",
      description: "Other documents",
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

            <div className="department-left">

              <div
                className={`department-icon ${item.iconClass}`}
              >
                {item.icon}
              </div>

              <div className="department-info">

                <h4>{item.name}</h4>

                <p>{item.description}</p>

              </div>

            </div>

            <div className="department-arrow">
              →
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default DepartmentGrid;