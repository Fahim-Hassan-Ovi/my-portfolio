// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import gilLogo from './assets/company_logo/gil-logo-2.png'

// Education Section Logo's
import iubatLogo from './assets/education_logo/Iubat-logo.png'
import srccLogo from './assets/education_logo/srcc-logo.png'
import atmhsLogo from './assets/education_logo/atmhs-logo.png'

// Project Section Logo's
import gadgetBuilder from '././assets/work_logo/gadget-builder.png'
import bookers from './assets/work_logo/bookers.png'
import couponDigger from '././assets/work_logo/coupon-digger.png'
import donateBd from '././assets/work_logo/donate-bd.png'
import peddy from '././assets/work_logo/peddy.png'
import dragonNews from '././assets/work_logo/dragon-news.png'

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Firebase', logo: firebaseLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: gilLogo,
      role: "AI Automation Developer Intern",
      company: "Global Informatics Limited",
      date: "October 2025 - Present",
      desc: "Currently working as an intern focused on building AI-driven automation workflows using n8n. My role involves integrating APIs, automating data processing, and developing workflow-based solutions to enhance efficiency. This experience has strengthened my understanding of backend automation and broadened my technical skills beyond traditional MERN stack development.",
      skills: [
        "n8n",
        "Node.js",
        "Javascript",
        "Ollama",
        "PostgreSQL",
        "Pgvector",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: iubatLogo,
      school: "International University of Business Agriculture and Technology",
      date: "2022 - 2025",
      grade: "3.86 CGPA",
      desc: "I’m pursuing my Bachelor’s in Computer Science and Engineering at IUBAT, where I’ve developed strong skills in programming, data structures, algorithms, and web development. Through hands-on projects, I’ve applied theoretical concepts to real-world problems, building full-stack applications using React, Node.js, Express.js, and MongoDB.",
      degree: "Bachelor of Computer Science and Engineering",
    },
    {
      id: 1,
      img: srccLogo,
      school: "Shaheed Ramiz Uddin Cantonment College, Dhaka",
      date: "2018 - 2019",
      grade: "5.00 GPA",
      desc: "I completed my Higher Secondary education from Shaheed Ramiz Uddin Cantonment College, where I studied in the Science group. The college’s disciplined environment and academic excellence helped me strengthen my analytical and problem-solving abilities, shaping a strong foundation for my future studies in Computer Science and Engineering.",
      degree: "Higher Secondary Certificate",
    },
    {
      id: 2,
      img: atmhsLogo,
      school: "Ashraf Textile Mills High School, Gazipur",
      date: "2016 - 2017",
      grade: "5.00 GPA",
      desc: "I completed my Secondary School education from Ashraf Textile Mills High School, where I pursued the Science group. My time at the school developed my interest in mathematics, logic, and technology — inspiring me to continue my academic journey in Computer Science at the university level.",
      degree: "Secondary School Certificate",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Gadget Builder",
      description:
        "A full-stack e-commerce web app for managing and selling gadgets. It features role-based access (Admin & Customer), secure Firebase authentication, product CRUD operations, and a dynamic cart system synced with both localStorage and the database. The app includes separate dashboards for admins and users, all built with a modern, responsive UI using React, Tailwind CSS, and DaisyUI.",
      image: gadgetBuilder,
      tags: ["React JS", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Tailwind CSS", "DaisyUI"],
      github: "https://github.com/Fahim-Hassan-Ovi/gadget-builder-client",
      webapp: "https://gadget-builder.firebaseapp.com/",
    },
    {
      id: 1,
      title: "Bookers - Library Management System",
      description:
        "A full-stack library management system built with React, TypeScript, Redux Toolkit Query, Node.js, Express.js, and MongoDB. It enables users to view, add, edit, delete, and borrow books with real-time UI updates and a clean, responsive interface. Focused on core CRUD and borrowing functionality, Bookers ensures smooth RESTful API integration and a user-friendly experience.",
      image: bookers,
      tags: ["React JS", "Node.js", "MongoDB", "Express.js", "TypeScript", "Redux Toolkit Query", "Tailwind CSS"],
      github: "https://github.com/Fahim-Hassan-Ovi/bookers-library-management-app-client/blob/main/README.md",
      webapp: "http://localhost:5000/",
    },
    {
      id: 2,
      title: "Coupon Digger",
      description:
        "A single-page coupon collection web app where users can browse top brands, view exclusive deals, and copy coupon codes. It features Firebase authentication, private routes, brand search, and dynamic coupon management with a modern, responsive UI.",
      image: couponDigger,
      tags: ["React JS", "Firebase Auth", "Tailwind CSS", "DaisyUI"],
      github: "https://github.com/Fahim-Hassan-Ovi/coupon-digger?tab=readme-ov-file#coupon-digger",
      webapp: "https://coupon-digger-c3ccf.web.app/",
    },
    {
      id: 3,
      title: "Peddy – Pet Adoption Platform",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: peddy,
      tags: ["HTML", "Tailwind CSS", "Javascript", "DaisyUI"],
      github: "https://github.com/Fahim-Hassan-Ovi/adopt-pet",
      webapp: "https://peddy-take-pet.netlify.app/",
    },
    {
      id: 4,
      title: "Donate Bangladesh",
      description:
        "A responsive donation web app built with HTML, CSS, and JavaScript that lets users donate to causes, manage balances, and track donation history. It showcases DOM manipulation, event handling, and input validation with a clean, responsive design—developed entirely without frameworks or libraries.",
      image: donateBd,
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/codingmastr/Task-Reminder-Tool",
      webapp: "https://fahim-hassan-ovi.github.io/donate-new-bangladesh/index.html",
    },
    {
      id: 5,
      title: "Dragon News - Online Newspaper Platform",
      description:
        "Dragon News is a modern online newspaper platform built with React, Tailwind CSS, DaisyUI, and Firebase Authentication. Users can browse news by category, read full articles, and access premium content after authentication. The platform emphasizes responsive design, dynamic content fetching, and smooth user experience.",
      image: dragonNews,
      tags: ["React.js", "Tailwind CSS", "Firebase Auth", "JavaScript", "DaisyUI"],
      github: "https://github.com/Fahim-Hassan-Ovi/dragon-news?tab=readme-ov-file",
      webapp: "https://dragon-news-410c5.firebaseapp.com/category/01",
    },
  ];  