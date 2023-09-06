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
  htconsulting,
  cs,
  python,
  java,
  flutter,
  android,
  r,
  portfolio_v1,
  portfolio_v2,
  portfolio_v3,
  threejs,
  vincenttan,
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
    title: "Software Developer",
    icon: web_developer,
  },
  {
    title: "Data Science & Analytics",
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
    name: "C#",
    icon: cs,
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
    result: "Soon to graduate with a GPA of 3.958.",
    hasGraduated: true,
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
      "Integrated a Know-Your-Customer service into their Web App, Mobile App, and Backend",
    ],
    remarks: [],
  },
  {
    title: "Software Developer",
    company_name: "HT Consulting (Asia) Sdn. Bhd.",
    icon: htconsulting,
    iconBg: "#D3D3D3",
    date: "June 2023 - Aug 2023",
    points: [
      "Develop Frontend Web App using modern web technologies (React, MUI)",
      "Developed small-scale C# ASP.NET Windows App and fixed bugs in existing software",
      "Fully developed a Backend API using C# ASP.NET Core (Model, Controller)",
      "Contributed to a System Architecture proposal",
      "Reason for short employment: Unable to commute to work due to major car accident",
    ],
    remarks: [{ title: "Reason for short employment", text: "Unable to commute to work due to major car accident" }],
  },
];

const testimonials = [
  {
    testimonial: "We worked together at HT Consulting (Asia), and I appreciated his approach to the job. Kevin was a good team player and fast learner. He is reliable and got things done well and within the allotted timeframe, he did not shy away from tasks that he had little to no experience in and constantly tried to make sure that he gets them done the best he can. I believe Kevin has a lot of potential and would be a valuable addition to any workplace.",
    name: "Vincent Tan",
    designation: "Software Engineer",
    company: "HT Consulting (Asia) Sdn. Bhd.",
    image: vincenttan, // https://media.licdn.com/dms/image/C5603AQHWwL1AF5Vu7Q/profile-displayphoto-shrink_800_800/0/1603286673419?e=1699488000&v=beta&t=mSm9mqFVAc7mXM0DrwmfLxapwOekCsUkUxwObAjaDiI
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
    project_link: "https://junhong-portfolio-v2.netlify.app/",
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
    has_source_code: true,
    source_code_link: "https://github.com/kleeJH/portfolio-v3",
    has_project_link: true,
    project_link: "https://junhong-portfolio.netlify.app/",
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
