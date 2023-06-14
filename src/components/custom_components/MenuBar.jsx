import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./MenuBar.css";

function MenuBar({ setShowMenu, setHasLoggedIn }) {
  const navigate = useNavigate();

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
      <div onClick={() => navigate("/myjobs")}>
        <span>Jobs</span>
      </div>
      <div onClick={() => navigate("/appliedjobs")}>
        <span>Applied Jobs</span>
      </div>
      <div onClick={handleLogout}>
        <span>Log Out</span>
      </div>
    </motion.div>
  );
}

export default MenuBar;
