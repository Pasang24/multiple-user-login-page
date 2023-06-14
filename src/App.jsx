import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NewAccountPage from "./pages/NewAccountPage";
import NavBar from "./components/custom_components/NavBar";

import ProtectedRoute from "./components/ProtectedRoute";
import AppliedJobs from "./pages/jobs/AppliedJobs";
import UpsertJobs from "./pages/jobs/UpsertJobs";
import ViewJob from "./pages/jobs/ViewJob";
import SearchPage from "./pages/SearchPage";

function App() {
  const [hasLoggedIn, setHasLoggedIn] = useState(
    JSON.parse(localStorage.getItem("hasLoggedIn")) || false
  );

  return (
    <>
      <NavBar hasLoggedIn={hasLoggedIn} setHasLoggedIn={setHasLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={`/search/:searchTerm`} element={<SearchPage />} />
        {!hasLoggedIn && (
          <>
            <Route
              path="/login"
              element={<LoginPage setHasLoggedIn={setHasLoggedIn} />}
            />
            <Route path="/signup" element={<NewAccountPage />} />

            <Route path="jobs">

              <Route path=":id" element={<ViewJob />} />

              <Route element={<ProtectedRoute role="applicant" />}>
                <Route path="applied" element={<AppliedJobs />} />
              </Route>

              <Route element={<ProtectedRoute role="recruiter" />}>
                <Route path="create" element={<UpsertJobs />} />
                <Route path="edit/:id" element={<UpsertJobs />} />
              </Route>
              
            </Route>
          </>
        )}
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
