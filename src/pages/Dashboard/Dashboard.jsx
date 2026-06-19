import "./Dashboard.css";
import HeroSection from "../../components/HeroSection";
import DepartmentGrid from "../../components/DepartmentGrid";
import RecentDocuments from "../../components/RecentDocuments";

import { useState } from "react";

import {
  FiFileText,
  FiUpload,
  FiSearch,
  FiShare2,
  FiRefreshCw
} from "react-icons/fi";

function Dashboard() {

  const [selectedDepartment, setSelectedDepartment] =
    useState(null);

  const actionCards = [
    {
      title: "View Documents",
      subtitle: "Access official documents",
      icon: <FiFileText />,
      iconClass: "icon-blue",
    },
    {
      title: "Upload Document",
      subtitle: "Upload your files",
      icon: <FiUpload />,
      iconClass: "icon-upload",
    },
    {
      title: "Fetch Government Document",
      subtitle: "Retrieve documents",
      icon: <FiSearch />,
      iconClass: "icon-green",
    },
    {
      title: "Share Document",
      subtitle: "Share securely",
      icon: <FiShare2 />,
      iconClass: "icon-share",
    },
    {
      title: "Sync Digilocker",
      subtitle: "Keep documents updated",
      icon: <FiRefreshCw />,
      iconClass: "icon-red",
    },
  ];

  const recentDocs = [
    {
      title: "12th Marksheet - RBSE",
      subtitle: "Board of Secondary Education Rajasthan",
      date: "12 May 2026",
    },
    {
      title: "10th Marksheet - RBSE",
      subtitle: "Board of Secondary Education Rajasthan",
      date: "10 May 2026",
    },
    {
      title: "Aadhaar Card",
      subtitle: "UIDAI Verified Document",
      date: "08 May 2026",
    },
    {
      title: "Jan Aadhaar Card",
      subtitle: "Government of Rajasthan",
      date: "04 May 2026",
    }
  ];

  return (
    <>
      <HeroSection actionCards={actionCards} />

      <section className="top-section">

        <div className="top-left">

          <DepartmentGrid
            selectedDepartment={selectedDepartment}
            setSelectedDepartment={setSelectedDepartment}
          />

        </div>

        <div className="top-right">

          <RecentDocuments
            recentDocs={recentDocs}
          />

        </div>

      </section>

    </>
  );
}

export default Dashboard;