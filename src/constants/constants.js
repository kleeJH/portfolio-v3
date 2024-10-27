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
  vsystems,
  cs,
  python,
  java,
  flutter,
  android,
  r,
  tdj,
  portfolio_v1,
  portfolio_v2,
  portfolio_v3,
  prompter,
  authentication,
  messagesender,
  expressjsbackend,
  vincenttan,
} from "../assets";

const personalLinks = {
  github: "https://github.com/kleeJH/",
  gmail: "klee.junhong@gmail.com",
};

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
    title: "Learner",
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
    result: "Graduated with a GPA of 3.958.",
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
      "Developed and optimized frontend features for the web app using ReactJS and UI libraries, enhancing user experience and performance",
      "Quickly adapted to Dart and Flutter for mobile app development, meeting tight deadlines",
      "Implemented backend services with Python and Django, enhancing server efficiency",
      "Integrated KYC services across web and mobile platforms, ensuring seamless user onboarding and compliance",
    ],
    remarks: [],
  },
  {
    title: "Software Developer Intern",
    company_name: "HT Consulting (Asia) Sdn. Bhd.",
    icon: htconsulting,
    iconBg: "#D3D3D3",
    date: "June 2023 - September 2023",
    points: [
      "Developed user interface components using ReactJS and UI libraries, enhancing overall app performance and ensure PWA",
      "Quickly learned and applied C# ASP.NET to build Windows apps for testing connection types and logging system responses",
      "Integrated the cheque deposit machine SDK, resolving critical issues and improving system stability and user experience",
    ],
    remarks: [],
  },
  {
    title: "Backend Developer",
    company_name: "V Systems",
    icon: vsystems,
    iconBg: "#D3D3D3",
    date: "January 2024 - Present",
    points: [
      "Developed and implemented backend features for the social media app \"Wolf\" using JavaScript, Node.js, and Express.js, integrating blockchain functionalities for data storage and enabling stable coin transactions for users",
      "Enhanced user experience by writing efficient backend code and utilizing advanced MongoDB aggregation queries, significantly reducing response times",
      "Adapted to frequently changing product requirements under tight deadlines, collaborating with cross-functional teams to translate business needs into scalable backend solutions",
      "Utilized various development tools, including version control, Postman for backend testing, PM2 for process management, and containerization using CapRover, while improving coding skills through teamwork and a focus on code correctness in a fast-paced startup environment",
    ],
    remarks: [],
  },
];

const testimonials = [
  {
    testimonial:
      "We worked together at HT Consulting (Asia), and I appreciated his approach to the job. Kevin was a good team player and fast learner. He is reliable and got things done well and within the allotted timeframe, he did not shy away from tasks that he had little to no experience in and constantly tried to make sure that he gets them done the best he can. I believe Kevin has a lot of potential and would be a valuable addition to any workplace.",
    name: "Vincent Tan Zhen Shun",
    designation: "Software Engineer",
    company: "HT Consulting (Asia) Sdn. Bhd.",
    image: vincenttan, // https://media.licdn.com/dms/image/C5603AQHWwL1AF5Vu7Q/profile-displayphoto-shrink_800_800/0/1603286673419?e=1699488000&v=beta&t=mSm9mqFVAc7mXM0DrwmfLxapwOekCsUkUxwObAjaDiI
  },
];

const projects = [
  {
    name: "TDJ Website",
    description:
      "A website for an elementary school (Tadika Desa Jaya) using NextJS, ReactJS, Tailwind CSS, TypeScript, Framer Motion & Vercel.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "framermotion",
        color: "violet-text-gradient",
      },
    ],
    image: tdj,
    has_source_code: false,
    source_code_link: null,
    has_project_link: true,
    project_link: "https://www.tadikadesajaya.edu.my",
  },
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
      "Personal Portfolio created using ReactJS, Tailwind CSS, ThreeJS and Framer Motion. Experimenting with 3D objects in browser.",
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
  {
    name: "Prompter",
    description:
      "A web application that allows users to share their prompts used in LLMs (such as Chat GPT) with others.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: prompter,
    has_source_code: true,
    source_code_link: "https://github.com/kleeJH/nextjs-prompter",
    has_project_link: false,
    project_link: null,
  },
  {
    name: "JWT Authentication",
    description:
      "Implementation of a simple JWT authentication with the refresh token feature for user login feature.",
    tags: [
      {
        name: "csharp",
        color: "blue-text-gradient",
      },
      {
        name: "asp.netcore",
        color: "green-text-gradient",
      },
      {
        name: "webapi",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "violet-text-gradient",
      },
    ],
    image: authentication,
    has_source_code: true,
    source_code_link: "https://github.com/kleeJH/aspdotnet-jwt-auth",
    has_project_link: false,
    project_link: null,
  },
  {
    name: "Message Sender",
    description:
      "A simple application that sends requests to different communication protocols and displays the response.",
    tags: [
      {
        name: "csharp",
        color: "blue-text-gradient",
      },
      {
        name: "aspdotnetcore",
        color: "green-text-gradient",
      },
      {
        name: "windowsform",
        color: "pink-text-gradient",
      },
    ],
    image: messagesender,
    has_source_code: true,
    source_code_link: "https://github.com/kleeJH/dotnet-message-sender",
    has_project_link: false,
    project_link: null,
  },
  {
    name: "ExpressJS Backend",
    description:
      "An Express JS backend that uses MongoDB. Has JWT authorization, role module permission, logging, cronjob functionalities and more...",
    tags: [
      {
        name: "nodejs",
        color: "violet-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
    ],
    image: expressjsbackend,
    has_source_code: true,
    source_code_link: "https://github.com/kleeJH/nodejs-backend",
    has_project_link: false,
    project_link: null,
  },
];

export {
  personalLinks,
  services,
  technologies,
  education,
  experiences,
  testimonials,
  projects,
};
