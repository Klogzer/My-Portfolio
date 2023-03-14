import React, { useState, useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import userImg from '../assets/images/user.webp';
import { useNavbarContext } from './NavbarContext';

function Navbar() {
    const { navbarState, setNavbarState } = useNavbarContext();

    const handleTabChange = (tabName: string) => {
        setNavbarState({ ...navbarState, visible: true, activeTab: tabName })
    };
    const hideSidebar = () => {
        setNavbarState({ ...navbarState, visible: false })
    };
    const showSidebar = () => {
        setNavbarState({ ...navbarState, visible: true })
    };



    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars' onClick={showSidebar}>
                        <FaIcons.FaBars />
                    </Link>
                    <ul className='etc-menu'>
                        <li>
                            <Link to='/imprint'>Imprint</Link>
                        </li>
                    </ul>
                </div>
                <nav id='nav-menu' className={navbarState.visible ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' >
                        <li className='navbar-toggle' onClick={hideSidebar}>
                            <Link to='#' className='menu-bars' >
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        <li className='user-card'>
                            <div className='img-wrapper'>
                                <img src={userImg} alt="User Logo" />
                            </div>

                            <div className='text'>
                                <span>Falk Marius<br /></span>
                                <span>Mauritz</span>
                            </div>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={[item.cName, navbarState.activeTab === item.title ? ' active' : ''].join('')}>
                                    <Link to={item.path} onClick={() => handleTabChange(item.title)} >
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
