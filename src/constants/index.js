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

  edx,
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
    title: "navbar.p1",
  },
  {
    id: "path",
    title: "navbar.p2",
  },
  {
    id: "contact",
    title: "navbar.p3",
  },
];

const services = [
  {
    title: "about.p4",
    icon: react,
  },
  {
    title: "about.p5",
    icon: next,
  },
  {
    title: "about.p6",
    icon: vue,
  },
  {
    title: "about.p7",
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
    title: "experiences.title6",
    company_name: "enpa Pinar del Río",
    icon: enpa,
    iconBg: "#ffffff",
    date: "experiences.date6",
    points: [
      "experiences.points6-a",
      "experiences.points6-b",
      "experiences.points6-c",
      "experiences.points6-d",
    ],
  },
  {
    title: "experiences.title5",
    company_name: "The Backyard Dev",
    icon: backyard,
    iconBg: "#ffffff",
    date: "experiences.date5",
    points: [
      "experiences.points5-a",
      "experiences.points5-b",
      "experiences.points5-c",
    ],
  },
  {
    title: "experiences.title4",
    company_name: "Capitán San Luis Stadium",
    icon: estadio,
    iconBg: "#ffffff",
    date: "experiences.date4",
    points: [
      "experiences.points4-a",
      "experiences.points4-b",
      "experiences.points4-c",
    ],
  },
  {
    title: "experiences.title3",
    company_name: "Fivana",
    icon: fivana,
    iconBg: "#ffffff",
    date: "experiences.date3",
    points: [
      "experiences.points3-a",
      "experiences.points3-b",
      "experiences.points3-c",
      "experiences.points3-d",
    ],
  },
  {
    title: "experiences.title2",
    company_name: "Kimia/Msales",
    icon: kimia,
    iconBg: "#ffffff",
    date: "experiences.date2",
    points: [
      "experiences.points2-a",
      "experiences.points2-b",
      "experiences.points2-c",
      "experiences.points2-d",
    ],
  },
  {
    title: "experiences.title1",
    company_name: "Harvard/edx",
    icon: edx,
    iconBg: "#ffffff",
    date: "experiences.date1",
    points: [
      "experiences.points1-a",
      "experiences.points1-b",
      "experiences.points1-c",
      "experiences.points1-d",
    ],
  },
].reverse();

const links = {
  github_link: 'https://github.com/jotasenator',
  linkedin_link: 'https://www.linkedin.com/in/maykel-contreras-camacho-7a1545110/'
};

export { services, technologies, experiences, links };