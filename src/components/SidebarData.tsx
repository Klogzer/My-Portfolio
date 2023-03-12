import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'About Me',
        path: '/',
        icon: <IoIcons.IoIosPerson style={{ color: 'currentColor' }} />,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <FaIcons.FaArchive style={{ color: 'currentColor' }} />,
        cName: 'nav-text'
    },

];
