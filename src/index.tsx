import React from "react";
import NavbarContextProvider from "./components/NavbarContext";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Projects from "./routes/Projects";
import About from "./routes/About";
import { Impressum, Imprint } from "./routes/Imprint";
import Navbar from "./components/Navbar";
import "./styles/main.scss";
import CTAButtons from "./components/CTAButtons";
const AppLayout = () => {

  return (
    <>
      <NavbarContextProvider
        initialNavbarState={{
          visible: true,
          activeTab: 'About Me'
        }}
      >
        <CTAButtons />
        <Navbar />
        <Outlet />
      </NavbarContextProvider>
    </>
  )
}
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{
      path: '/',
      element: <About />
    },
    {
      path: 'projects',
      element: <Projects />,
    },
    {
      path: 'imprint',
      element: <div>
        <Impressum />
        <hr />
        <Imprint />
      </div>
    }
    ]
  },

]);

let root = document.getElementById("root");


if (root !== null) {
  root.className = 'menu-active';
  createRoot(root).render(
    <RouterProvider router={router} />
  )
};