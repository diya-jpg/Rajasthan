import "./App.css";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard/Dashboard";
import Documents from "./pages/Documents/Documents";
import SharedDocuments from "./pages/SharedDocuments/SharedDocuments";
import ActivityLog from "./pages/ActivityLog/ActivityLog";
import Trash from "./pages/Trash/Trash";
function App() {

const documents = [
{
title: "12th Marksheet - RBSE",
documentId: "RBSE-2026-001245",
department: "Board of Secondary Education Rajasthan",
date: "12 May 2026",
source: "Government"
},
{
title: "Aadhaar Card",
documentId: "UIDAI-4587-XXXX",
department: "UIDAI",
date: "08 May 2026",
source: "DigiLocker"
},
{
title: "Resume.pdf",
documentId: "DOC-001",
department: "Self Uploaded",
date: "05 May 2026",
source: "Manually Uploaded"
}
];

return ( <div className="app-shell">


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
  path="/all-documents"
  element={
    <Documents
      documents={documents}
    />
  }
/>
        <Route
          path="/shared-documents"
          element={<SharedDocuments />}
        />
 
 <Route
          path="/activity"
          element={<ActivityLog />}
        />
 <Route
          path="/trash"
          element={<Trash />}
        />
      </Routes>

    </div>

    <Footer />

  </main>

</div>


);
}

export default App;
