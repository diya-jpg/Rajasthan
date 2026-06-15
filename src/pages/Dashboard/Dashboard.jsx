import "./Dashboard.css";
import HeroSection from "../../components/HeroSection";
import RecentDocuments from "../../components/RecentDocuments";
import SidePanels from "../../components/SidePanels";

import {
  FiFileText,
  FiUpload,
  FiSearch,
  FiShare2,
   FiRefreshCw
} from "react-icons/fi";

function Dashboard() {

  const actionCards = [
    {
      title: "View Government Documents",
      subtitle: "Access official documents",
      icon: <FiFileText />,
    },
    {
      title: "Upload Document",
      subtitle: "Upload your files",
      icon: <FiUpload />,
    },
    {
      title: "Fetch Government Document",
      subtitle: "Retrieve documents",
      icon: <FiSearch />,
    },
    {
      title: "Share Document",
      subtitle: "Share securely",
      icon: <FiShare2 />,
    },
    {
  title: "Sync Documents",
  subtitle: "Keep documents updated",
  icon: <FiRefreshCw />,
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

      <section className="dashboard-grid">
        <RecentDocuments recentDocs={recentDocs} />
        <SidePanels recentDocs={recentDocs} />
      </section>
    </>
  );
}

export default Dashboard;