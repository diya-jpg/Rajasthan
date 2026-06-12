import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import HeroSection from './components/HeroSection';
import RecentDocuments from './components/RecentDocuments';
import SidePanels from './components/SidePanels';

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

  const actionCards = [
    {
      title: 'View Documents',
      subtitle: 'Browse records',
      icon: '📄',
    },
    {
      title: 'Upload Document',
      subtitle: 'Add files',
      icon: '⬆️',
    },
    {
      title: 'Fetch Document',
      subtitle: 'Sync data',
      icon: '🖥️',
    },
    {
      title: 'Share Document',
      subtitle: 'Send securely',
      icon: '📤',
    },
    {
      title: 'Medical Records',
      subtitle: 'Health docs',
      icon: '💊',
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
            <SidePanels />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;