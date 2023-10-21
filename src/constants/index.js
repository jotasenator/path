import {
  react,
  next,
  vue,
  django,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  djangoT,
  vueT,
  cypress,
  nextT,
  testing,

  enpa,
  fivana,
  backyard,
  kimia,
  estadio,
  python3,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Next Developer",
    icon: next,
  },
  {
    title: "Vue Developer",
    icon: vue,
  },
  {
    title: "Django Developer",
    icon: django,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "React Testing Library",
    icon: testing,
  },
  {
    name: "Cypress",
    icon: cypress,
  },
  {
    name: "Next",
    icon: nextT,
  },
  {
    name: "Vue JS",
    icon: vueT,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Python 3",
    icon: python3,
  },
  {
    name: "Django",
    icon: djangoT,
  }
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "enpa",
    icon: enpa,
    iconBg: "#ffffff",
    date: "Sept 2016 - Sept 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies aimed to create apps taking into account the needs of the topography department.",
      "Creating Python 3 scripts for searching information in excel sheets and for automatize the file creation of topographic services.",
      "Collaborating with cross-functional teams including designers and the product owner to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "React Developer",
    company_name: "The Backyard Dev",
    icon: backyard,
    iconBg: "#ffffff",
    date: "Sept 2020 - Nov 2020",
    points: [
      "Developing and maintaining a web application in charge of managing invoice payments and showing statistics of the procedures that were carried out in it using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Capitán San Luis Stadium",
    icon: estadio,
    iconBg: "#ffffff",
    date: "Dec 2020 - Sept 2021",
    points: [
      "Developing and maintaining a web application for control management of computers and peripherals using stack MERN.",
      "Collaborating with product owner to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Fivana",
    icon: fivana,
    iconBg: "#ffffff",
    date: "Sept 2021 - Mar 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies for being able to automate the assimilation of invoices with diverse characteristics.",
      "Collaborating with cross-functional teams including designers, product managers, product owners and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews with other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Kimia/Msales",
    icon: kimia,
    iconBg: "#ffffff",
    date: "Apr 2022 - Mar 2023",
    points: [
      "Developing and maintaining web applications using React.js, Vue.js and other related technologies for being able to handle advertisers.",
      "Collaborating with cross-functional teams including designers, product managers, product owners and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews with other developers.",
    ],
  },
];

export { services, technologies, experiences };