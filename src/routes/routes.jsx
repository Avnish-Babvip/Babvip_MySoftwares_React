// -----------------------------------------------Imports---------------------------------------------
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import Maintenance from "../pages/Maintenance";
import DynamicRootPage from "../pages/DynamicRootPage";
import Loader from "../components/Loader/Loader";
import Category from "../pages/Category";
import Software from "../pages/Software";

// Lazy Loading 😴
const Blog = lazy(() => import("../pages/Blog"));
const HelpCenter = lazy(() => import("../pages/HelpCenter"));
const Portfolio = lazy(() => import("../pages/Portfolio"));

// import Blog from "../pages/Blog";
// import HelpCenter from "../pages/HelpCenter";
// import Portfolio from "../components/Home/Portfolio/Portfolio";

// ---------------------------------------------------------------------------------------------------
console.log("enter inside the routes page");
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
    ],
  },
]);

export const maintenanceAppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Maintenance />,
  },
]);
