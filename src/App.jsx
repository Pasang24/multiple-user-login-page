import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NewAccountPage from "./pages/NewAccountPage";
import NavBar from "./components/custom_components/NavBar";

import axios from "axios";
import { setUser } from './redux/Slice/UserSlice';
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

  useEffect(() => {

    // let access_token = localStorage.getItem("userToken");
    // console.log(access_token);
    //   console.log("here1");
    //   axios.get(`${process.env.REACT_APP_SERVER_URL}/user`, {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("userToken")}`
    //     }
    //   }).then((user_res) => {
    //     console.log("here");
    //     console.log({ user_res });
        // dispatch(setUser(user_res.data.data))
    //   }


    let access_token = localStorage.getItem("userToken")
    console.log(JSON.parse(access_token));
    if (access_token) {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/user`,
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`
        }
      }
    )
      .then(res => {
        dispatch(setUser(res.data.data))
        console.log(res.data);

      }
      ).catch(err => {
        console.log(err);
      })
    }

  }, []);

  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_SERVER_URL}/applyjob`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`
  //       }
  //     }
  //   )
  //     .then(res => {

  //       setJobs(res.data)

  //     }).catch(err => {
  //       console.log(err);
  //     })
  //   console.log(applied_jobs);
  //   console.log(applied_jobs.length);
  // }, [])

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
