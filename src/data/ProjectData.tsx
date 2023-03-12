import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
export const ProjectData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "This website is built with React and TypeScript. It is hosted on a rented server and uses a custom domain. The website is fully responsive and works on all devices. I created this website to show my skills and projects to potential employers.",
    image: "/projects/1/Project1.png",
    technologies: [
      {
        name: "React",
        icon: <FaIcons.FaReact />
      },
      {
        name: "TypeScript",
        icon: <SiIcons.SiTypescript />
      },
      {
        name: "Bootstrap",
        icon: <FaIcons.FaBootstrap />
      },
      {
        name: "SASS",
        icon: <FaIcons.FaSass />
      },
      {
        name: "Node.js",
        icon: <FaIcons.FaNodeJs />
      },
      {
        name: "git",
        icon: <FaIcons.FaGit />
      },
      {
        name: "Apache",
        icon: <FaIcons.FaServer />
      },
    ],
    link_target: "_blank",
    link_text: "View on GitHub",
    link: "",
  },
  {
    id: 2,
    title: "Black Desert Mobile Planner",
    description: "This is a web application that allows you to plan your character's skill tree and gear. It is built with Symfony and Doctrine. The special thing about this project is its abstract Database, which is created by the users in the backend. It was not a success because the users did not like the idea of creating and managing their own database.",
    image: "/projects/2/BDM-Fairy.jpg",
    technologies: [
      {
        name: "Symfony",
        icon: <FaIcons.FaSymfony />
      },
      {
        name: "Doctrine ORM",
        icon: <FaIcons.FaDatabase />
      },
      {
        name: "MySQL",
        icon: <FaIcons.FaDatabase />
      },
      {
        name: "PHP",
        icon: <FaIcons.FaPhp />
      },
      {
        name: "JavaScript",
        icon: <FaIcons.FaJs />
      },
      {
        name: "git",
        icon: <FaIcons.FaGit />
      },
    ],
    link_target: "_blank",
    link_text: "View on GitHub",
    link: "https://github.com/Klogzer/BDMPlanus",
  },
  {
    id: 3,
    title: "Jump DX 9001 deluxe",
    description: "This is a game we developed in University for a Class calles 'Webnologien', we were constrained by not beeing allowed to use the canvas element. It is a 2D platformer game with a gyroscope controller, it is a mobile first concept. The game is build with Dart, we had a lot of fun developing it and we learned a lot about game development. Specials are the fluid acceleration system, the camera system following the player and controlling the culling of objects.",
    image: "/projects/3/Jumpdx.png",
    technologies: [
      {
        name: "Dart",
        icon: <SiIcons.SiDart />
      },
      {
        name: "CSS",
        icon: <FaIcons.FaCss3 />
      },
      {
        name: "HTML",
        icon: <FaIcons.FaHtml5 />
      },
      {
        name: "Gitlab",
        icon: <FaIcons.FaGitlab />
      },

    ],
    link_target: "_blank",
    link_text: "View on GitHub",
    link: "https://github.com/Klogzer/BlockJumpy",
    link_target2: "_blank",
    link_text2: "Play the game",
    link2: "http://mauritz.us/jumpdx/"
  },
];
