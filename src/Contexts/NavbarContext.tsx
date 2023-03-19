import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the type for the Navbar state
type NavbarState = {
  activeTab: string;
  visible: boolean;
};

// Define the type for the NavbarContext value
type NavbarContextValue = {
  navbarState: NavbarState;
  setNavbarState: (state: NavbarState) => void;
};

// Create the NavbarContext
export const NavbarContext = createContext<NavbarContextValue | undefined>(undefined);

// Define a custom hook to use the NavbarContext
export const useNavbarContext = () => {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error('useNavbarContext must be used within a NavbarContextProvider');
  }
  return context;
};

// Define the props for the NavbarContextProvider
type NavbarContextProviderProps = {
  children: React.ReactNode;
  initialNavbarState: NavbarState;
};

// Create the NavbarContextProvider component
export const NavbarContextProvider = ({
  children,
  initialNavbarState,
}: NavbarContextProviderProps) => {
  // Initialize the state for the Navbar
  const [navbarState, setNavbarState] = useState(initialNavbarState);

  useEffect(() => {
    // Define the event listener to close the navbar when the Escape key is pressed
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setNavbarState({ ...navbarState, visible: !navbarState.visible });
      }
    };
    document.addEventListener('keydown', handleEscapeKey);

    // Define the event listener to close the navbar when the user clicks outside the navbar
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
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

    /**
     * Use MutationObserver to add/remove the "menu-active" class from the root element
     * 
     * @param mutationsList - The list of mutations to observe
     */
    function callback(mutationsList: any) {
      mutationsList.forEach((mutation: any) => {
        if (mutation.attributeName === 'class') {
          const root = document.getElementById('root');
          const target = mutation.target as HTMLElement;
          root?.classList.toggle('menu-active', target.classList.contains('active'));
        }
      });
    }



    const mutationObserver = new MutationObserver(callback);
    const menu = document.getElementById('nav-menu');
    if (menu !== null) {
      mutationObserver.observe(menu, { attributes: true });
    }

    // Remove the event listeners when the component is unmounted
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [navbarState]);

  // Render the NavbarContextProvider with the NavbarContext value and children
  return (
    <NavbarContext.Provider value={{ navbarState, setNavbarState }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarContextProvider;
