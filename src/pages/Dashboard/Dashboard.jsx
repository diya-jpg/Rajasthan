import "./Dashboard.css";
import HeroSection from "../../components/HeroSection";
import DepartmentGrid from "../../components/DepartmentGrid";
import SidePanels from "../../components/SidePanels";
import RecentDocuments from "../../components/RecentDocuments";
import DocumentCenter from "../../components/DocumentCenter";
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

const [selectedDocumentType, setSelectedDocumentType] =
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
      title: "PAN Card",
      subtitle: "Income Tax Department",
      date: "05 May 2026",
    },
  ];

  return (
    <>
      <HeroSection actionCards={actionCards} />

      <section className="dashboard-main">

       <div className="dashboard-left">

  <DepartmentGrid
    selectedDepartment={selectedDepartment}
    setSelectedDepartment={setSelectedDepartment}
  />

  <DocumentCenter
  selectedDepartment={selectedDepartment}
/>
</div>
        <div className="dashboard-right">
<RecentDocuments recentDocs={recentDocs} />
          <SidePanels
            recentDocs={recentDocs}
          />

        </div>

      </section>
    </>
  );
}

export default Dashboard;