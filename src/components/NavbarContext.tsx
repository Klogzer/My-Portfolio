import React, { createContext, useContext, useState, useEffect } from 'react';

type NavbarState = {
  activeTab: string;
  visible: boolean;
};

type NavbarContextValue = {
  navbarState: NavbarState;
  setNavbarState: (state: NavbarState) => void;
};

export const NavbarContext = createContext<NavbarContextValue | undefined>(undefined);

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error('useNavbarContext must be used within a NavbarContextProvider');
  }
  return context;
};


type NavbarContextProviderProps = {
  children: React.ReactNode;
  initialNavbarState: NavbarState;
};

export const NavbarContextProvider = ({
  children,
  initialNavbarState,
}: NavbarContextProviderProps) => {
  const [navbarState, setNavbarState] = useState(initialNavbarState);

  useEffect(() => {

    // register event listener to change the navbar state when the hits the escape key
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setNavbarState({ ...navbarState, visible: !navbarState.visible });
      }
    };
    document.addEventListener('keydown', handleEscapeKey);

    // register event listener to change the navbar state when the user clicks outside the navbar
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // consider if the click was on .menu-bars or .nav-menu
      const isMenuBars = target.closest('.menu-bars');
      const isNavMenu = target.closest('.nav-menu');
      if (isMenuBars || isNavMenu) {
        return;
      }
      const isOutside = !target.closest('.nav-menu');
      if (isOutside) {
        setNavbarState({ ...navbarState, visible: false });
      }
    };
    document.addEventListener('click', handleOutsideClick);


    // Save the navbar state to local storage whenever it changes

    localStorage.setItem('navbarState', JSON.stringify(navbarState));

    function callback(mutationsList: any) {
      mutationsList.forEach((mutation: any) => {
        if (mutation.attributeName === "class") {
          let root = document.getElementById("root");
          if (root !== null && mutation.target.classList.contains("active") ) {
            root.classList.add("menu-active");
          } else if (root !== null) {
            root.classList.remove("menu-active");
          }
        }
      });
    }
    const mutationObserver = new MutationObserver(callback);
    let menu = document.getElementById("nav-menu");
    if (menu !== null) {
      mutationObserver.observe(menu, { attributes: true });
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [navbarState]);



  return (
    <NavbarContext.Provider value={{ navbarState, setNavbarState }}>
      {children}
    </NavbarContext.Provider>
  );
};
export default NavbarContextProvider;
