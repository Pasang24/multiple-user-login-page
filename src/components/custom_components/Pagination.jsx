import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import "./Pagination.css";

function Pagination({ pageNum, handlePageChange }) {
  return (
    <div className="pagination">
      <div className="pagination-main">
        <button
          className="page-content page-btn"
          style={{ color: pageNum === 1 ? "gray" : "#a32cc4" }}
          disabled={pageNum === 1}
          onClick={() => handlePageChange(1)}
        >
          <MdOutlineKeyboardDoubleArrowLeft />
        </button>
        <button
          className="page-content page-btn"
          style={{ color: pageNum === 1 ? "gray" : "#a32cc4" }}
          disabled={pageNum === 1}
          onClick={() => handlePageChange(pageNum - 1)}
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <div className="page-content page-number">
          <span>{pageNum}</span>
        </div>
        <button
          className="page-content page-btn"
          style={{ color: pageNum === 12 ? "gray" : "#a32cc4" }}
          disabled={pageNum === 12}
          onClick={() => handlePageChange(pageNum + 1)}
        >
          <MdOutlineKeyboardArrowRight />
        </button>
        <button
          className="page-content page-btn"
          style={{ color: pageNum === 12 ? "gray" : "#a32cc4" }}
          disabled={pageNum === 12}
          onClick={() => handlePageChange(12)}
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
