import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full navbar">
      <div className="flex-1 px-2 mx-2">
        <h1 className="text-3xl font bold underline">mood</h1>
      </div>
      <nav className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
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
      </nav>
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
    </header>
  );
};

export default Header;
