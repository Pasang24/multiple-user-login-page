import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import "./Pagination.css";

function Pagination({ currentPage, totalPages, handlePageChange }) {
  return (
    <div className="pagination">
      <div className="pagination-main">
        <button
          className="page-content page-btn"
          style={{ color: currentPage === 1 ? "gray" : "#a32cc4" }}
          disabled={currentPage === 1}
          onClick={() => handlePageChange(1)}
        >
          <MdOutlineKeyboardDoubleArrowLeft />
        </button>
        <button
          className="page-content page-btn"
          style={{ color: currentPage === 1 ? "gray" : "#a32cc4" }}
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <div className="page-content page-number">
          <span>{currentPage}</span>
        </div>
        <button
          className="page-content page-btn"
          style={{ color: currentPage === totalPages ? "gray" : "#a32cc4" }}
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <MdOutlineKeyboardArrowRight />
        </button>
        <button
          className="page-content page-btn"
          style={{ color: currentPage === totalPages ? "gray" : "#a32cc4" }}
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(totalPages)}
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
