import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white border-b-4 ">
      <h1 className="text-3xl font bold underline">mood</h1>
      <nav>
        <ul className="flex gap-2">
          <li>
            <Link to={"/"} className="btn btn-xs btn-outline">
              home
            </Link>
          </li>
          <li>
            <Link to={"/boards"} className="btn btn-xs btn-outline">
              Boards
            </Link>
          </li>
          <li>
            <Link to={"/profile"} className="btn btn-xs btn-outline">
              Login/Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
