import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NewAccountPage from "./pages/NewAccountPage";
import NavBar from "./components/custom_components/NavBar";

import axios from "axios";
import { setUser } from "./redux/Slice/UserSlice";
import { useDispatch } from "react-redux";

import ProtectedRoute from "./components/ProtectedRoute";
import AppliedJobs from "./pages/jobs/AppliedJobs";
import UpsertJobs from "./pages/jobs/UpsertJobs";
import ViewJob from "./pages/jobs/ViewJob";
import SearchPage from "./pages/SearchPage";

function App() {
  const [hasLoggedIn, setHasLoggedIn] = useState(
    JSON.parse(localStorage.getItem("hasLoggedIn")) || false
  );

  const dispatch = useDispatch();

  let access_token = localStorage.getItem("userToken");

  useEffect(() => {
    if (access_token) {
      axios
        .get(`${process.env.REACT_APP_SERVER_URL}/user`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("userToken")
            )}`,
          },
        })
        .then((res) => {
          dispatch(setUser(res.data.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line
  }, [access_token]);

  return (
    <>
      <NavBar hasLoggedIn={hasLoggedIn} setHasLoggedIn={setHasLoggedIn} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:searchTerm" element={<SearchPage />} />
        <Route path="/jobs/:id" element={<ViewJob />} />
        <>
          {!hasLoggedIn && (
            <Route
              path="/login"
              element={<LoginPage setHasLoggedIn={setHasLoggedIn} />}
            />
          )}

          <Route path="/signup" element={<NewAccountPage />} />

          <Route element={<ProtectedRoute role="applicant" />}>
            <Route path="/applied" element={<AppliedJobs />} />
          </Route>

          <Route element={<ProtectedRoute role="recruiter" />}>
            <Route path="/create" element={<UpsertJobs />} />
            <Route path="/edit/:id" element={<UpsertJobs />} />
          </Route>

          {/* <Route path="jobs">
            <Route element={<ProtectedRoute role="applicant" />}>
              <Route path='/applied' element={<AppliedJobs />} />
            </Route>
          </Route> */}
        </>

        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
