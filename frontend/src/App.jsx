import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Searchbar/Search";
import Boards from "./routes/Boards";
import Profile from "./routes/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Search />
      </>
    ),
  },
  {
    path: "boards",
    element: <Boards />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
