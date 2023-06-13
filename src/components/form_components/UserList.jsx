import { BiUserCircle, BiBriefcaseAlt2 } from "react-icons/bi";
import User from "./form_components/User";
import "./UserList.css";

function UserList({ user, setUser }) {
  return (
    <div className="users">
      <User user={user} setUser={setUser} currentUser="applicant">
        <BiUserCircle size={80} color="#faf9f6" />
      </User>
      <User user={user} setUser={setUser} currentUser="recruiter">
        <BiBriefcaseAlt2 size={80} color="#faf9f6" />
      </User>
    </div>
  );
}

export default UserList;
