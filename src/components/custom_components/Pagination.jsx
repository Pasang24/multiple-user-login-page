import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import "./custom_components/Pagination.css";

function Pagination() {
  return (
    <div className="pagination">
      <ul>
        <li>
          <MdOutlineKeyboardDoubleArrowLeft />
        </li>
        <li>
          <MdOutlineKeyboardArrowLeft />
        </li>
        <li>
          <MdOutlineKeyboardArrowRight />
        </li>
        <li>
          <MdOutlineKeyboardDoubleArrowRight />
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
