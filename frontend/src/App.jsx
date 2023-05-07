import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Index from "./routes/Index";
import Boards from "./routes/Boards";
import Profile from "./routes/Profile";
import Layout from "./components/Layout/Layout";
import { useState } from "react";

function App() {
  const [boards, setBoards] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Layout>
            <Index boards={boards} setBoards={setBoards} />
          </Layout>
        </>
      ),
    },
    {
      path: "boards",
      element: (
        <Layout>
          <Boards boards={boards} setBoards={setBoards} />
        </Layout>
      ),
    },
    {
      path: "profile",
      element: (
        <Layout>
          <Profile />
        </Layout>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
