import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import ErrorPage from "@/components/shared/ErrorPage";
import HousePlant from "@/pages/product/pages/HousePlant";

const Home = lazy(() => import("@/pages/home/home"));
const AboutUs = lazy(() => import("@/pages/about-us/about-us"));
const Product = lazy(() => import("@/pages/product/product"));
const PlantDecoration = lazy(() =>
  import("@/pages/plant-decoration/plant-decoration")
);
const ContactUs = lazy(() => import("@/pages/contact-us/contact-us"));
const ShoppingCart = lazy(() => import("@/pages/shopping-cart/shopping-cart"));
const NotFound = lazy(() => import("@/pages/404/index"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "*", element: <NotFound /> },
      { index: true, element: <Home /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "products", element: <Product /> },
      { path: "products/house-plants", element: <HousePlant /> },
      { path: "plant-decoration", element: <PlantDecoration /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "shopping-cart", element: <ShoppingCart /> },
    ],
  },
]);
