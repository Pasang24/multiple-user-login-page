import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NewAccountPage from "./pages/NewAccountPage";
import NavBar from "./components/custom_components/NavBar";

function App() {
  const [hasLoggedIn, setHasLoggedIn] = useState(
    JSON.parse(localStorage.getItem("hasLoggedIn")) || false
  );
  return (
    <>
      <NavBar hasLoggedIn={hasLoggedIn} setHasLoggedIn={setHasLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {!hasLoggedIn && (
          <>
            <Route
              path="/login"
              element={<LoginPage setHasLoggedIn={setHasLoggedIn} />}
            />
            <Route path="/signup" element={<NewAccountPage />} />
          </>
        )}
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
