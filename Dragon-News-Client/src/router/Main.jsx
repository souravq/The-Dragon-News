import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import LandingPage from "../components/LandingPage/LandingPage";

export default function Main() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
