import {
  student,
  web_developer,
  data_analytics,
  programmer,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  capitaldynamics,
  cpp,
  python,
  java,
  flutter,
  android,
  r,
  portfolio_v1,
  portfolio_v2,
  portfolio_v3,
  threejs,
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
    title: "Student",
    icon: student,
  },
  {
    title: "Web Developer",
    icon: web_developer,
  },
  {
    title: "Data Analytics",
    icon: data_analytics,
  },
  {
    title: "Programmer",
    icon: programmer,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Android",
    icon: android,
  },
  {
    name: "R",
    icon: r,
  },
];

const education = [
  {
    certification: "Bachelor of Computer Science",
    dateRange: "2020 - 2023",
    category: {
      tag: "BACHELOR",
      color: "#f5222d",
    },
    educationFacility: "Monash University Malaysia",
    result: "As of Year 3 Semester 2, my GPA is 3.955.",
    hasGraduated: false,
  },
  {
    certification: "Australian Matriculation",
    dateRange: "2019",
    category: {
      tag: "AUSMAT",
      color: "#faad14",
    },
    educationFacility: "Sunway University College",
    result: "Graduated in 2019 with an ATAR of 88.75.",
    hasGraduated: true,
  },
  {
    certification: "Sijil Pelajaran Malaysia (SPM)",
    dateRange: "2018",
    category: {
      tag: "SPM",
      color: "#52c41a",
    },
    educationFacility: "SMK Bandar Sri Damansara 2",
    result: "Graduated in 2018 with 7A and 2B.",
    hasGraduated: true,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Capital Dynamics Asset Management",
    icon: capitaldynamics,
    iconBg: "#383E56",
    date: "January 2022 - June 2022",
    points: [
      "Developing and maintaining web applications using ReactJS and other related technologies",
      "Development of Mobile App using Dart, Flutter and Bloc design pattern",
      "Implementing responsive design and ensuring cross-browser compatibility",
      "Backend development using Django and Django REST Framework to create APIs and webhook listener",
      "Integrated a Know-Your-Customer service into their Web App, Mobile App, and backend",
    ],
  },
];

const testimonials = [
  {
    testimonial: "...",
    name: "...",
    designation: "...",
    company: "...",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const projects = [
  {
    name: "Portfolio V1",
    description:
      "Personal Portfolio created using Pure HTML, CSS and JS to mark the start of developing my web development skills.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio_v1,
    has_source_code: true,
    source_code_link: "https://github.com/kleeJH/portfolio-v1",
    has_project_link: true,
    project_link: "https://kleejh.github.io/portfolio-v1/",
  },
  {
    name: "Portfolio V2",
    description:
      "Personal Portfolio created using ReactJS, SCSS, React UI Frameworks, Framer Motion and sanity.io acting as the backend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "framermotion",
        color: "pink-text-gradient",
      },
      {
        name: "sanity.io",
        color: "violet-text-gradient",
      },
    ],
    image: portfolio_v2,
    has_source_code: true,
    source_code_link: "https://github.com/kleeJH/portfolio-v2",
    has_project_link: true,
    project_link: "https://junhong-portfolio.netlify.app/",
  },
  {
    name: "Portfolio V3",
    description:
      "Personal Portfolio created using ReactJS, Tailwind, ThreeJS and Framer Motion. Experimenting with 3D objects in browser.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
      {
        name: "framermotion",
        color: "violet-text-gradient",
      },
    ],
    image: portfolio_v3,
    has_source_code: false,
    source_code_link: "",
    has_project_link: false,
    project_link: "",
  },
];

export {
  services,
  technologies,
  education,
  experiences,
  testimonials,
  projects,
};
