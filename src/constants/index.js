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
  carrent,
  jobit,
  tripguide,
  laravel,
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "bg-blue-500",
      },
      {
        name: "mongodb",
        color: "bg-green-500",
      },
      {
        name: "tailwind",
        color: "bg-pink-500",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "bg-blue-500",
      },
      {
        name: "restapi",
        color: "bg-green-500",
      },
      {
        name: "scss",
        color: "bg-pink-500",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "bg-blue-500",
      },
      {
        name: "supabase",
        color: "bg-green-500",
      },
      {
        name: "css",
        color: "bg-pink-500",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "bg-blue-500",
      },
      {
        name: "supabase",
        color: "bg-green-500",
      },
      {
        name: "css",
        color: "bg-pink-500",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "bg-blue-500",
      },
      {
        name: "supabase",
        color: "bg-green-500",
      },
      {
        name: "css",
        color: "bg-pink-500",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const emailjsConfig = {
  serviceId: "service_a56oedh",
  templateId: "template_4hzb1nf",
  publicKey: "QgWEGgwfawK97_lyj",
};

export { technologies, projects, emailjsConfig };
