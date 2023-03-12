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
import * as FaIcons from 'react-icons/fa';
import Projects from "./routes/Projects";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
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
        <CTAButtons/>
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