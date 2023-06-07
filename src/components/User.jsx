import { AnimatePresence, motion } from "framer-motion";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "./User.css";

function User({ user, setUser, currentUser, children }) {
  return (
    <div
      className="user-box"
      onClick={() =>
        setUser({
          //action object for updating user piece of state
          type: "updateUser",
          payload: currentUser,
        })
      }
    >
      {children}
      <h3>{currentUser.toUpperCase()}</h3>
      <AnimatePresence>
        {currentUser === user && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="selected-user"
          >
            <BsFillCheckCircleFill size={40} color="#faf9f6" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default User;
