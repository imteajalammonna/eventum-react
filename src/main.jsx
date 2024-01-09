import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Details from "./components/Details";
import Register from "./pages/Register";
import AppliedEvents from "./pages/AppliedEvents";
import AuthProvider from "./components/AuthProvider";
import Profile from "./components/Profile";
import PrivateRoute from "./Routes/PrivateRoute";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch("/services.json")
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/events",
        element: <PrivateRoute><AppliedEvents></AppliedEvents></PrivateRoute>,
        loader: () => fetch("/services.json")
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);