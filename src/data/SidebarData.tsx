import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarItem } from '../Interfaces';

export const SidebarData: SidebarItem[] = [
  {
    title: 'About Me',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <FaIcons.FaArchive />,
    cName: 'nav-text',
  },
  {
    title: 'Articles',
    path: '/articles',
    icon: <FaIcons.FaNewspaper />,
    cName: 'nav-text',
  },
];
