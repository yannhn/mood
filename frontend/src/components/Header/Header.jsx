const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white border-b-4 ">
      <h1 className="text-3xl font bold underline">mood</h1>
      <nav>
        <ul className="flex gap-6">
          <li>
            <a href="" className="btn btn-outline">
              Boards
            </a>
          </li>
          <li>
            <a href="" className="btn btn-outline">
              Login/Profile
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
