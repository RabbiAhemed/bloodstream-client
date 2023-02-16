import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddBloodRequestPage from "../Pages/AddBloodRequestPage/AddBloodRequestPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import SearchDonorPage from "../Pages/SearchDonorPage/SearchDonorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/search-donor",
        element: <SearchDonorPage></SearchDonorPage>,
      },
      {
        path: "/add-blood-request",
        element: <AddBloodRequestPage></AddBloodRequestPage>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
export default router;
