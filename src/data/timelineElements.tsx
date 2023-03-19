import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import { TimelineItem } from '../Interfaces';

export const TimelineElements: TimelineItem[] = [
  {
    id: 10,
    title: "Full Stack Developer",
    location: "Lübeck, Germany",
    description: "Working as a full stack developer at Convotis Lübeck since 2022, developing the company's proprietary CMS and building new web applications using a modern software stack.",
    description2: "Working close to the customer is a big part of my job, to ensure that the software is tailored to their needs.",
    technologies: [
      {
        id: 1,
        name: "MySQL",
        icon: <FaIcons.FaDatabase style={{ color: 'currentColor' }} />,
      },
      {
        id: 3,
        name: "Node.js",
        icon: <FaIcons.FaNodeJs style={{ color: 'currentColor' }} />,
      },
      {
        id: 4,
        name: "React",
        icon: <FaIcons.FaReact style={{ color: 'currentColor' }} />,
      },
      {
        id: 5,
        name: "JavaScript",
        icon: <FaIcons.FaJs style={{ color: 'currentColor' }} />,
      },
      {
        id: 6,
        name: "Php",
        icon: <FaIcons.FaPhp style={{ color: 'currentColor' }} />,
      },
      {
        id: 7,
        name: "Symfony",
        icon: <FaIcons.FaSymfony style={{ color: 'currentColor' }} />,
      },
      {
        id: 8,
        name: "Linux",
        icon: <FaIcons.FaLinux style={{ color: 'currentColor' }} />,
      },
      {
        id: 9,
        name: "Git",
        icon: <FaIcons.FaGit style={{ color: 'currentColor' }} />,
      },

      {
        id: 10,
        name: "Pizza",
        icon: <FaIcons.FaPizzaSlice style={{ color: 'currentColor' }} />,
      },
    ],
    buttonText: "Company Website",
    date: "2022 - Present",
    icon: <FaIcons.FaCode style={{ color: 'currentColor' }} />,
  },
  {
    id: 9,
    title: "Software Engineering Intern",
    location: "Lübeck, Germany",
    description: "Working student for Lynet Kommunikations GmbH (now Convotis Lübeck GmbH) from 2020 to 2022. Producing several extensions to the company's proprietary CMS and working in close collaboration with a team of developers enhancing a customers After Sales Service.",
    buttonText: "Company Website",
    date: "2020 - 2022",
    icon: <FaIcons.FaLaptopCode style={{ color: 'currentColor' }} />,
  },
  {
    id: 8,
    title: "Café Bar Assistant",
    location: "Lübeck and Travemünde, Germany",
    description: "Worked for Lübeck and Travemünde Marketing GmbH at the Holstentor Café Bar from 2019 to 2020. Serving delicious coffee roasted in Lübeck and other drinks and food.",
    buttonText: "Company Website",
    date: "2019 - 2020",
    icon: <FaIcons.FaCoffee style={{ color: 'currentColor' }} />,
  },
  {
    id: 7,
    title: "Software Engineering Student",
    location: "Lübeck, Germany",
    description: "Studying software engineering at the Technical University of Lübeck, with an expected bachelor's degree.",
    buttonText: "University Website",
    date: "2017 - Present",
    icon: <FaIcons.FaUniversity style={{ color: 'currentColor' }} />,
  },
  {
    id: 6,
    title: "Café Bar Assistant",
    location: "Lübeck, Germany",
    description: "Worked at Café Erdapfel in the city center of Lübeck from 2015 to 2019. Serving handmade Kumpir (potato pizza) and other delicious food and drinks.",
    buttonText: "Café Website",
    date: "2015 - 2019",
    icon: <FaIcons.FaCoffee style={{ color: 'currentColor' }} />,
  },
  {
    id: 5,
    title: "Education",
    location: "Lübeck, Germany",
    description: "Completed general higher education entrance qualification (Abitur) at Emil-Possehl-Schule.",
    buttonText: "School Website",
    date: "2014 - 2017",
    icon: <FaIcons.FaGraduationCap style={{ color: 'currentColor' }} />,
  },
  {
    id: 4,
    title: "Operations Associate/Assistant",
    location: "Lübeck, Germany",
    description: "Worked part-time and as a temp at Intersport Mauritz from 2013 to 2017.",
    buttonText: "Company Website",
    date: "2013 - 2017",
    icon: <FaIcons.FaAsterisk style={{ color: 'currentColor' }} />,
  },

  {
    id: 3,
    title: "Snowboard Instructor",
    location: "Saalbach Hinterglemm, Austria",
    description: "Completed a training program to become a snowboard instructor through the Tiroler Ski-Verband. Worked for board.at Snowboard School during the winter season of 2012/2013.",
    buttonText: "School Website",
    date: "Winter 2012/2013",
    icon: <FaIcons.FaSkiing style={{ color: 'currentColor' }} />,
  },



  {
    id: 2,
    title: "Education",
    location: "Lübeck, Germany",
    description: "Graduated from Waldorf School Lübeck in 2011 with a Realschulabschluss.",
    buttonText: "Waldorf School Lübeck",
    date: "2011",
    icon: <FaIcons.FaGraduationCap style={{ color: 'currentColor' }} />,
  },
  {
    id: 1,
    title: "Birth",
    location: "Lübeck, Germany",
    description: "Born on October 7, 1992 in Lübeck.",
    buttonText: null,
    date: "October 7, 1992",
    icon: <FaIcons.FaBirthdayCake style={{ color: 'currentColor' }} />,
  },







]