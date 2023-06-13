import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./custom_components/MenuBar.css";

function MenuBar({ setShowMenu }) {
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
    </motion.div>
  );
}

export default MenuBar;
