import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  mysql,
  python,
  php,
  docker,
  laravel,
  Fakebets,
  Hsternclone,
  ReactSocial,
  Pokedex,
  Rentacar,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "php",
    icon: php,
  },
];

const projects = [
  {
    name: "FakeBets",
    description:
      "Projeto Full-Stack, site de apostas feito com Front-end React com Inertia, Laravel como middleware utilizando breeze para auth, Back-end api-REST Nodejs com express, scraper de dados de aposta em Python e banco de dados Mysql.",
    tags: [
      {
        name: "React",
        color: "bg-blue-500",
      },
      {
        name: "Laravel",
        color: "bg-red-600",
      },
      {
        name: "Nodejs",
        color: "bg-green-500",
      },
      {
        name: "Python",
        color: "bg-blue-600",
      },
      {
        name: "Mysql",
        color: "bg-sky-600",
      },
    ],
    image: Fakebets,
    source_code_link: "https://github.com/Medeiros156/FakeBets_",
    project_link: "https://fakebetsprod-production.up.railway.app/",
  },
  {
    name: "RentAcar",
    description:
      "Projeto Front-End, site de aluguel de carros feito com React e Sass.",
    tags: [
      {
        name: "React",
        color: "bg-blue-500",
      },
      {
        name: "Sass",
        color: "bg-pink-600",
      },
    ],
    image: Rentacar,
    source_code_link: "https://github.com/Medeiros156/rentAcar",
    project_link: "https://medeiros156.github.io/rentAcar/",
  },
  {
    name: "HStern Products Display",
    description:
      "Projeto em PHP de display de produtos com scraper de dados do site Hstern.com.",
    tags: [
      {
        name: "PHP",
        color: "bg-indigo-400",
      },
    ],
    image: Hsternclone,
    source_code_link: "https://github.com/Medeiros156/HsternClone",
    project_link: "https://hsternclone.000webhostapp.com/",
  },
  {
    name: "Pokedex React",
    description:
      "Projecto de Pokedex feito com React e fetch de dados da pokeapi.co.",
    tags: [
      {
        name: "React",
        color: "bg-blue-500",
      },
    ],
    image: Pokedex,
    source_code_link: "https://github.com/Medeiros156/Pokedex",
    project_link: "https://medeiros156.github.io/Pokedex/",
  },
  {
    name: "React Social",
    description: "Rede Social em React com Dark Mode e Login.",
    tags: [
      {
        name: "React",
        color: "bg-blue-500",
      },
    ],
    image: ReactSocial,
    source_code_link: "https://github.com/Medeiros156/Reactsocial",
    project_link: "https://medeiros156.github.io/Reactsocial/#/",
  },
];

const emailjsConfig = {
  serviceId: "service_a56oedh",
  templateId: "template_4hzb1nf",
  publicKey: "QgWEGgwfawK97_lyj",
};

export { technologies, projects, emailjsConfig };
