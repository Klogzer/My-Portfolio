import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { NavbarContextProvider } from "./contexts";
import { Navbar, CallToActionButtons, Articles } from "./components";
import { About, Projects, Imprint } from "./routes";
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
        <CallToActionButtons />
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
      element: <Imprint />
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