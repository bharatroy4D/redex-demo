import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "../components/PrivateRoute";
import Dashboard from "../components/Dashboard";
import VerifyPage from "../components/VerifyPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/dashboard",
                element: <PrivateRoute> <Dashboard /> </PrivateRoute>
            },
            {
                path: "/otp",
                element: <VerifyPage />
            }
        ]
    }
])