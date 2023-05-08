import Header from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Header />
        <main>{children}</main>
      </div>
      <Sidebar />
    </div>
  );
};

export default Layout;
