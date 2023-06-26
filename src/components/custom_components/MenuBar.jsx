import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./MenuBar.css";

function MenuBar({ setShowMenu, setHasLoggedIn }) {
  const navigate = useNavigate();

  const role = JSON.parse(localStorage.getItem("role"));

  useEffect(() => {
    const userProfile = document.querySelector(".user-profile");

    const handleClick = (event) => {
      if (!userProfile.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [setShowMenu]);

  const handleLogout = () => {
    setHasLoggedIn(false);
    navigate("/");
    localStorage.clear();
    // code for logout
    // dispatch(logout());
  };

  return (
    <motion.div
      initial={{ scale: 0, transformOrigin: "top right" }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className="menu-bar"
    >
      <div onClick={() => navigate("/profile")}>
        <span>My Profile</span>
      </div>

      {role === "recruiter" && (
        <>
          <div onClick={() => navigate("/create")}>
            <span>Create Jobs</span>
          </div>
        </>
      )}

      {role === "applicant" && (
        <>
          <div onClick={() => navigate("/applied")}>
            <span>Applied Jobs</span>
          </div>
        </>
      )}

      <div onClick={handleLogout}>
        <span>Log Out</span>
      </div>
    </motion.div>
  );
}

export default MenuBar;
