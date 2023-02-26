import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AddBloodRequestPage from "../Pages/AddBloodRequestPage/AddBloodRequestPage";
import BloodRequestsPage from "../Pages/BloodRequestsPage/BloodRequestsPage";
import EligibilityTest from "../Pages/EligibilityTest/EligibilityTest";
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
        path: "/search-donors",
        element: <SearchDonorPage></SearchDonorPage>,
      },
      {
        path: "/add-blood-request",
        element: <AddBloodRequestPage></AddBloodRequestPage>,
      },
      {
        path: "/blood-requests",
        element: <BloodRequestsPage></BloodRequestsPage>,
      },
      {
        path: "/eligibility-test",
        element: <EligibilityTest></EligibilityTest>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);
export default router;
