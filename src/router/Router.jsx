import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../dashboard/Dashboard";
import Services from "../pages/Services";
import AddItem from "../dashboard/AddItem";
import EditItem from "../dashboard/EditItem";
import DashboardHome from "../dashboard/DashboardHome";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        // loader: () => fetch("http://localhost:3000/posts"),
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/home",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/addItem",
        element: <AddItem></AddItem>,
      },
      {
        path: "/dashboard/edit/:id",
        element: <EditItem></EditItem>,
      },
    ],
  },
]);
