import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider,  Outlet } from "react-router-dom";
import NavbarContextProvider from "./Contexts/NavbarContext";
import Navbar from "./components/Navbar";
import CTAButtons from "./components/CallToActionButton";
import Articles from "./components/Articles";
import About from "./routes/About";
import Projects from "./routes/Projects";
import { Impressum, Imprint } from "./routes/Imprint";
import "./styles/main.scss";

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
      path: "articles",
      element: <Articles />,
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