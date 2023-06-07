import UserList from "./UserList";
import "./UserSelectSection.css";

function UserSelectSection({ heading, desc, user, setUser }) {
  return (
    <>
      <h2>{heading}</h2>
      <UserList user={user} setUser={setUser} />
      <h3 className="desc">{desc}</h3>
    </>
  );
}

export default UserSelectSection;
