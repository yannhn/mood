import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Index from "./routes/Index";
import Boards from "./routes/Boards";
import Profile from "./routes/Profile";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Layout>
          <Index />
        </Layout>
      </>
    ),
  },
  {
    path: "boards",
    element: (
      <Layout>
        <Boards />
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

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
