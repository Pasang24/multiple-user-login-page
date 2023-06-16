import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  AiOutlineExclamationCircle,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { RxCross2, RxCrossCircled } from "react-icons/rx";
import Spinner from "../loader_components/Spinner";
import "./JobModal.css";

function JobModal({ role, status, onClose }) {
  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => document.body.classList.remove("no-scroll");
  }, []);

  let modalIcon = <AiOutlineExclamationCircle size={80} color="red" />;
  let modalMsg = "Please login as Applicant to apply for job";

  if (role === "applicant") {
    if (status === "pending") {
      modalIcon = <Spinner size={80} />;
      modalMsg = "Please wait a few moment...";
    } else if (status === "applied") {
      modalIcon = <AiOutlineCheckCircle size={80} color="green" />;
      modalMsg = "Job Applied Successfully";
    } else if (status === "failed") {
      modalIcon = <RxCrossCircled size={80} color="red" />;
      modalMsg = "Error while applying for job";
    }
  }

  return (
    <motion.div
      className="job-modal-container"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      <div className="job-modal">
        {(role !== "applicant" || status !== "pending") && (
          <div className="close-modal">
            <button onClick={onClose}>
              <RxCross2 size={24} />
            </button>
          </div>
        )}
        <div className="modal-icon">{modalIcon}</div>
        <div className="modal-msg">
          <h2>{modalMsg}</h2>
        </div>
      </div>
    </motion.div>
  );
}

export default JobModal;
