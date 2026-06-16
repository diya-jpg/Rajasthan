import "./App.css";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import SelfUploaded from "./pages/SelfUploaded/SelfUploaded";
import Dashboard from "./pages/Dashboard/Dashboard";
import GovernmentDocuments from "./pages/GovernmentDocuments/GovernmentDocuments";
import SharedDocuments from "./pages/SharedDocuments/SharedDocuments";
function App() {

const governmentDocuments = [
  {
    title: "12th Marksheet - RBSE",
    department: "Board of Secondary Education Rajasthan",
    status: "Verified",
    size: "820 KB",
    date: "12 May 2026",
  },
  {
    title: "Aadhaar Card",
    department: "Unique Identification Authority of India",
    status: "Verified",
    size: "450 KB",
    date: "08 May 2026",
  },
  {
    title: "PAN Card",
    department: "Income Tax Department",
    status: "Verified",
    size: "320 KB",
    date: "05 May 2026",
  },
  {
    title: "Driving Licence",
    department: "Transport Department Rajasthan",
    status: "Verified",
    size: "680 KB",
    date: "02 May 2026",
  },
  {
    title: "Birth Certificate",
    department: "Civil Registration Department",
    status: "Verified",
    size: "390 KB",
    date: "15 Apr 2026",
  },
];

  return (
    <div className="app-shell">

      <Sidebar />

      <main className="page-content">

        <Topbar />

        <div className="content-main">

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/government-documents"
              element={
                <GovernmentDocuments
                  documents={governmentDocuments}
                />
              }
            />
<Route
  path="/self-uploaded"
  element={<SelfUploaded />}
/>

<Route
  path="/digilocker"
  element={<h2>DigiLocker</h2>}
/>

<Route
  path="/shared-documents"
  element={<SharedDocuments />}
/>
          </Routes>

        </div>

      </main>

    </div>
  );
}

export default App;