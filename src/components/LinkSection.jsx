import { Link } from "react-router-dom";
import "./LinkSection.css";
import Button from "./Buttton";

function LinkSection({ buttonText, desc, linkText, to }) {
  return (
    <div className="links">
      <div className="button-container">
        <Button type="submit">{buttonText}</Button>
      </div>
      <div>
        <span>{desc} </span>
        <Link to={to} className="link">
          {linkText}
        </Link>
      </div>
    </div>
  );
}

export default LinkSection;
