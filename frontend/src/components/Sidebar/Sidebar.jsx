import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-base-100">
        <li>
          <Link to={"/"}>home</Link>
        </li>
        <li>
          <Link to={"/search"}>search</Link>
        </li>
        <li>
          <Link to={"/boards"}>Boards</Link>
        </li>
        <li>
          <Link to={"/profile"}>Login/Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
