// -----------------------------------------------Imports---------------------------------------------
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import Maintenance from "../pages/Maintenance";
import DynamicRootPage from "../pages/DynamicRootPage";
import Loader from "../components/Loader/Loader";
import Category from "../pages/Category";
import Software from "../pages/Software";
import Dashboard from "../pages/Dashboard/Dashboard";
import Payment from "../pages/Dashboard/Payment";
import MySoftware from "../pages/Dashboard/MySoftware";
import Profile from "../pages/Dashboard/Profile";
import Login from "../pages/Authentication/Login";
import ForgotPassword from "../pages/Authentication/ForgotPassword";
import ChangePassword from "../pages/Authentication/ChangePassword";
import DashboardChangePassword from "../pages/Dashboard/DashboardChangePassword";

// Lazy Loading 😴
const Blog = lazy(() => import("../pages/Blog"));
const HelpCenter = lazy(() => import("../pages/HelpCenter"));
const Portfolio = lazy(() => import("../pages/Portfolio"));

// import Blog from "../pages/Blog";
// import HelpCenter from "../pages/HelpCenter";
// import Portfolio from "../components/Home/Portfolio/Portfolio";

// ---------------------------------------------------------------------------------------------------
console.log("enter inside the routes page");

const NotFound = () => (
  <p className="text-center text-primary fw-bold fs-5 mt-5 mx-5">
    Sorry, no content available on this page right now.
  </p>
);

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <DynamicRootPage />,
      },

      {
        path: "/:slug",
        element: <DynamicRootPage />,
      },
      {
        path: "/login/customer", // 👈 separate route
        element: <Login />,
      },
      {
        path: "/login/password-reset", // 👈 separate route
        element: <ForgotPassword />,
      },
      {
        path: "/reset/password-customer/:slug", // 👈 separate route
        element: <ChangePassword />,
      },
      {
        path: "/customer/dashboard", // 👈 separate dashboard routes
        element: <Dashboard />,
      },
      {
        path: "/customer/myProducts", // 👈 separate dashboard routes
        element: <MySoftware />,
      },
      {
        path: "/customer/payment", // 👈 separate dashboard routes
        element: <Payment />,
      },
      {
        path: "/customer/profile", // 👈 separate dashboard routes
        element: <Profile />,
      },
      {
        path: "/customer/changePassword", // 👈 separate dashboard routes
        element: <DashboardChangePassword />,
      },

      {
        path: "/blog/:slug",
        element: (
          <Suspense fallback={<Loader />}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: "/help/:slug",
        element: (
          <Suspense fallback={<Loader />}>
            <HelpCenter />
          </Suspense>
        ),
      },
      {
        path: "/portfolio/:slug",
        element: (
          <Suspense fallback={<Loader />}>
            <Portfolio />
          </Suspense>
        ),
      },
      {
        path: "/category/:slug",
        element: (
          <Suspense fallback={<Loader />}>
            <Category />
          </Suspense>
        ),
      },
      {
        path: "/software/:slug",
        element: (
          <Suspense fallback={<Loader />}>
            <Software />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <NotFound />, // 404 fallback
      },
    ],
  },
]);

export const maintenanceAppRouter = createBrowserRouter([
  {
    path: "*",
    element: <Maintenance />, // 404 fallback
  },
]);
