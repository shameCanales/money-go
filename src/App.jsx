import "./App.css";
import "@fontsource/poppins";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./pages/RootLayout";
import MainUi from "./pages/MainUi";
// import DashBoard from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <p>PageNotFound</p>,
    children: [
      { index: true, element: <MainUi /> },
      // {
      //   path: "dashboard",
      //   element: <DashBoard />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
