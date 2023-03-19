import * as FaIcons from 'react-icons/fa';
import { CTA } from '../Interfaces';

export const CTAData: CTA[] = [
  {
    color: '#bd2c00',
    name: 'Github',
    url: 'https://www.github.com/klogzer',
    icon: <FaIcons.FaGithub/>,
  },
  // xing
  {
    color: '#026466',
    name: 'Xing',
    url: 'https://www.xing.com/profile/Marius_Mauritz/cv',
    icon: <FaIcons.FaXing/>,
  },
  // mail
  {
    color: '#252431',
    name: 'Mail',
    url: 'mailto:request@mauritz.us',
    icon: <FaIcons.FaRegEnvelope/>,
  },
];

export default CTAData;