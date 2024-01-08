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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
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
        element: <Details></Details>,
        loader: () => fetch("/services.json")
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/events",
        element: <AppliedEvents></AppliedEvents>
      },
      {
        path: "/profile",
        element: <Profile></Profile>
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