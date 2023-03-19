import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { useNavbarContext } from '../contexts/NavbarContext';
import { SidebarItem } from '../Interfaces';
import { sidebarData } from '../data';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import userImg from '../assets/images/user.webp';



const Navbar = () => {
  const { navbarState, setNavbarState } = useNavbarContext();

  // Toggle the sidebar between visible and hidden
  const toggleSidebar = () => {
    setNavbarState({ ...navbarState, visible: !navbarState.visible });
  };

  // Set the active tab in the navbar state when a tab is clicked
  const handleTabChange = (tabName: string) => {
    setNavbarState({ ...navbarState, visible: true, activeTab: tabName });
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars' onClick={toggleSidebar}>
            <FaIcons.FaBars />
          </Link>
          <ul className='etc-menu'>
            <li>
              <Link to='/imprint'>Imprint</Link>
            </li>
          </ul>
        </div>
        <nav id='nav-menu' className={navbarState.visible ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle' onClick={toggleSidebar}>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className='user-card'>
              <div className='img-wrapper'>
                <img src={userImg} alt='User Logo' />
              </div>
              <div className='text'>
                <span>Falk Marius<br /></span>
                <span>Mauritz</span>
              </div>
            </li>
            {sidebarData.map(({ cName, title, icon, path }: SidebarItem, index) => (
              <li key={index} className={[cName, navbarState.activeTab === title ? ' active' : ''].join('')}>
                <Link to={path} onClick={() => handleTabChange(title)}>
                  {icon}
                  <span>{title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
