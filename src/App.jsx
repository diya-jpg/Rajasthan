import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import HeroSection from './components/HeroSection';
import RecentDocuments from './components/RecentDocuments';
import SidePanels from './components/SidePanels';
import {
  FiFileText,
  FiUpload,
  FiSearch,
  FiShare2
} from "react-icons/fi";
function App() {
  const navItems = [
    { label: 'Dashboard', icon: '🏠', active: true },
    { label: 'Government Documents', icon: '📁' },
    { label: 'Self Uploaded', icon: '☁️' },
    { label: 'Medical Documents', icon: '❤️' },
    { label: 'Shared Documents', icon: '🔗' },
    { label: 'Activity Log', icon: '🕒' },
    { label: 'Trash', icon: '🗑️' },
  ];
const fetchedDocs = [
  {
    title: "Birth Certificate",
    subtitle: "Rajasthan Civil Registration System",
  },
  {
    title: "Income Certificate",
    subtitle: "Revenue Department Rajasthan",
  },
  {
    title: "Caste Certificate",
    subtitle: "Government of Rajasthan",
  },
];
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
];
  const recentDocs = [
    {
      title: '12th Marksheet - RBSE',
      subtitle: 'Board of Secondary Education, Rajasthan',
      date: '12 May 2026',
    },
    {
      title: '10th Marksheet - RBSE',
      subtitle: 'Board of Secondary Education, Rajasthan',
      date: '10 May 2026',
    },
    {
      title: 'Aadhaar Card',
      subtitle: 'UIDAI Verified Document',
      date: '08 May 2026',
    },
    {
      title: 'PAN Card',
      subtitle: 'Income Tax Department',
      date: '05 May 2026',
    },
    { title: 'Driving Licence', subtitle: 'Transport Department Rajasthan', date: '02 May 2026', }, 
    
  ];

  return (
    <div className="app-shell">
      <Sidebar navItems={navItems} />

      <main className="page-content">
        <Topbar />

        <div className="content-main">
          <HeroSection actionCards={actionCards} />

          <section className="dashboard-grid">
            <RecentDocuments recentDocs={recentDocs} />
            <SidePanels recentDocs={recentDocs} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;