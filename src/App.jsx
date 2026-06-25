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
    <Documents/>
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
