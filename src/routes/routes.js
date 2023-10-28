import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import { PrivateRoute } from "./PrivateRoute";
import { dashboardRoutes } from "./dashboardRoutes";
import { Layout as DashboardLayout } from "../layouts/Dashboard/Layout";
import Login from "../pages/Login/Login";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRoute>
                <DashboardLayout/>
            </PrivateRoute>
        ),
        children : dashboardRoutes,
    },
]);
