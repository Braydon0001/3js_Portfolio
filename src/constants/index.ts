import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import {
  ExperienceType,
  NavLinkType,
  ProjectType,
  ServicesIconType,
  TechnologiesIconType,
  TestimonialType,
} from "../common/constantTypes";
import CSharpCanvas from "../components/canvas/CSharp";
import FigmaCanvas from "../components/canvas/Figma";

import FrontEndDevModel from "../components/canvas/FrontEndDevModel";
import WebDevCanvas from "../components/canvas/WebDev";

export const navLinks: NavLinkType[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "demos",
    title: "Demos",
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

const services: ServicesIconType[] = [
  {
    title: "Frontend Dev",
    model: FrontEndDevModel,
    skillGroups: [
      "React, Typescript, Next.js",
      "3JS, React Three Fiber, GIT",
      "Html, CSS, Javascript, Tailwind",
      "JQuery, MVC, Razor, Umbraco",
    ],
  },
  {
    title: "Backend Dev",
    model: CSharpCanvas,
    skillGroups: [
      "SQL Server, MySQL, Azure, AWS",
      "ASP .Net Web API, C#, GIT",
      "Entity Framework, Dapper",
      "Clean Architecture, LINQ",
    ],
  },
  {
    title: "UI/UX Design",
    model: FigmaCanvas,
    skillGroups: [
      "Figma, Adobe XD",
      "Adobe Photoshop / Illustrator",
      "LoFi / HiFi Prototyping",
      "Wireframing, Interaction design",
    ],
  },
  {
    title: "Web Design",
    model: WebDevCanvas,
    skillGroups: [
      "Wordpress, Elementor",
      "Woocommerce, PHP",
      "Adobe Creative Cloud",
      "Sanity Studio, Responsive",
    ],
  },
];

const technologies: TechnologiesIconType[] = [
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: ExperienceType[] = [
  {
    title: "Html Js Php Developer",
    company_name: "Wild Web",
    icon: "/img/experience-images/html5.svg",
    iconBg: "#383E56",
    date: "Jun 2019 - Jan 2020",
    points: [
      "Designed and developed fully custom and responsive web apps from the ground up using HTML, CSS, JavaScript & PHP",
      "Collaborating with cross-functional teams to turn Photoshop prototypes into high quality custom developed websites",
      "Implementing responsive design and ensuring cross-browser compatibility",
    ],
  },
  {
    title: "Wordpress Php Developer",
    company_name: "Black Ticket",
    icon: "/img/experience-images/wp.svg",
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Mar 2020",
    points: [
      "Developing and maintaining web applications using HTML, CSS, JavaScript, Php and Wordpress",
      "Wireframed prototypes as per the clients spec then built out the websites in accordance",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Collaborating with visual asset departments to ensure a high quality product",
    ],
  },
  {
    title: "I.T Specialist & Web Developer",
    company_name: "Zimbali Estate Management Association",
    icon: "/img/experience-images/server-solid.svg",
    iconBg: "#383E56",
    date: "Mar 2020 - Jun 2022",
    points: [
      "Did all the Design , Development and maintenance of their web apps.",
      "Managed all I.T service providers and ensured I.T / Software operations were running smoothly",
      "Troubleshooted and fixed any software errors and network or hardware / equipment related technical issues",
    ],
  },
  {
    title: "Full Stack Developer & UI UX Designer",
    company_name: "KodeLab / Insight Consulting",
    icon: "/img/experience-images/code-solid.svg",
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Present",
    points: [
      "Built out bleeding edge full stack B2B applications end to end using various technologies such as (but not limited to) React, Next.js, Tailwind, Asp .net Web API, SQL, etc",
      "Ensure our client and server requests are protected via JWT Authentication and Authorization, SSL encryption, Password hashing & salting, etc",
      "UI UX High fidelity prototyping via Figma and built out dynamic and user friendly interfaces in accordance",
      "Maintained and built features and modules using other technologies like MVC, Umbraco, Flutter, Azure Web Services",
      "Fleshed out ER diagrams of system domains then built out the RESTful API and Database via Entity Framework core and SQL Server or MySQL",
      "Participating in code reviews and providing constructive feedback to ensure highly robust and clean development as a standard",
      "Actively engaged in mentoring junior team members to support their career development",
    ],
  },
];

const testimonials: TestimonialType[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: ProjectType[] = [
  {
    name: "Surgical Society",
    description: [
      "I developed a web-based advanced back-office forms system using React Survey.js to generate form schemas and output answers in JSON format. These schemas and answers were stored in 'JSON columns' in the database. For form viewing and editing, I passed the form schema to the Survey component to dynamically generate the forms and populate the fields with the provided answers.",
      "With only a one-month deadline, I had to innovate to handle the complex form logic, create extremely lengthy forms (one schema was 9,000 lines), and execute CRUD operations, all while meeting specific niche requirements.",
    ],
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ASP.Net REST API",
        color: "green-text-gradient",
      },
      {
        name: "SQL Server (JSON Columns)",
        color: "pink-text-gradient",
      },
      {
        name: "MS Identity Core",
        color: "orange-text-gradient",
      },
    ],
    image: "img/thumbnails/surgeon-demo-thumb.jpg",
    video_iframe_links: [
      {
        name: "Surgeon App Video",
        url: "https://www.youtube.com/embed/k0A38OoG_wo?si=48B_n7GrZ-6UQl0K",
      },
    ],
    figma_links: [
      {
        name: "Surgeon App Presentation",
        url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fdsop7M44BoWU60uSWSzYhW%2FSurgical-Society%3Fnode-id%3D126-2%26t%3Dbs0DAfX9on5fFoEc-1%26scaling%3Dmin-zoom%26page-id%3D0%253A1%26starting-point-node-id%3D126%253A2",
      },
    ],
  },
  {
    name: "Engage",
    description: [
      "I worked on multiple projects utilizing Next.js, React, MySQL, and .NET Web API, encompassing various components such as a public site, an employee portal, a partner portal (both accessible via login), and a headless content management system (CMS) for the client.",

      "The employee portal was my first enterprise project at Kodelab. I started by creating low-fidelity (LoFi) and high-fidelity (HiFi) prototypes using Figma. Once approved, I built the front end with Tailwind CSS, developing mostly custom components while leveraging UI libraries where appropriate.",

      "Next, I transitioned to the headless CMS (Sanity.io), where I developed the backend and integrated data via its GROQ API. I also scaffolded a partner portal, adding an advanced product module with numerous niche features.",

      "Additionally, I contributed to the back-office admin app by implementing several key features. One significant accomplishment was building a fully functional data hierarchy renderer. This tool allows users to traverse and configure the company's organogram using multiple queries, including regional and departmental filters. It supports panning, zooming, theming, and a host of advanced node operations. I handled the data queries and constructed the hierarchical trees accordingly.",
    ],
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "ASP.Net REST API",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "orange-text-gradient",
      },
      {
        name: "Sanity Headless CMS",
        color: "violet-text-gradient",
      },
      {
        name: "Figma",
        color: "cyan-text-gradient",
      },
    ],
    image: "img/thumbnails/product-module-thumb.jpg",
    video_iframe_links: [
      {
        name: "Data Hierarchy Tree Renderer",
        url: "https://www.youtube.com/embed/_vPxPHYdemY?si=JLw5hVQLIm5TIKjy",
      },
      {
        name: "Clerk Auth Solution",
        url: "https://www.youtube.com/embed/XOaxkhZBzFg?si=JS4Bb7zpLLgqP0Pe",
      },
      {
        name: "Dynamic Theming Solution",
        url: "https://www.youtube.com/embed/OB_N6iv07Wg?si=LburBzs9h1S1FFsI",
      },
      {
        name: "Azure Image Export Client Feedback",
        url: "https://www.youtube.com/embed/KBuKT0dobXg?si=wp0XpwhFzuJsccIN",
      },
      {
        name: "Products Module",
        url: "https://www.youtube.com/embed/OOeQQqqmUJA?si=i9sj_AZcQfqIBAqW",
      },
    ],
    figma_links: [
      {
        name: "Employee Portal Presentation",
        url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FdBwfWvP5wqCoPmOFHVQ38q%2FEngage-Website-Design%3Fnode-id%3D1936-7%26t%3DqHLYC2yosDXtFaV8-1%26scaling%3Dmin-zoom%26page-id%3D1108%253A2%26starting-point-node-id%3D1936%253A7",
      },
    ],
  },
  {
    name: "Insight Consulting",
    description: [
      "I built the in-house Expense Claims solution which allows employees to log in using their Microsoft credentials, submit claims for company-related expenses, and receive notifications about the status of their claims. It includes an Azure file storage solution for uploading and viewing supporting files via a .NET Web API, an admin panel for managing categories, rates, and options, and a role-based backend for viewing, approving, and rejecting claims. Additionally, the system features a CSV export module to export paid claim data in a specific format for upload to SAP",
    ],
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ASP.Net REST API",
        color: "green-text-gradient",
      },
      {
        name: "SQL Server",
        color: "pink-text-gradient",
      },
      {
        name: "Azure Blob Stoarge",
        color: "orange-text-gradient",
      },
    ],
    image: "img/expense-form.png",
    figma_links: [
      {
        name: "Skills Matrix Presentation",
        url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FACCwFwTp1xmT7PiGVPIGVz%2FSkills-Matrix-App%3Fnode-id%3D101-3%26t%3DxIcV5YU4wPUKdunY-1%26scaling%3Dmin-zoom%26page-id%3D0%253A1%26starting-point-node-id%3D101%253A3",
      },
      {
        name: "KodeLab Website Prototype",
        url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FNe7ID8jGm1ntIi8QcdV4qM%2FKodeLab-Website%3Fnode-id%3D43-9%26t%3DIjbtRflMwTOwLSQQ-1%26scaling%3Dmin-zoom%26page-id%3D0%253A1%26starting-point-node-id%3D43%253A9",
      },
    ],
    video_iframe_links: [
      {
        name: "Expense Claims Admin Backend",
        url: "https://www.youtube.com/embed/D8GQOih-mR0?si=RbHtz8-o_1nLAJAZ",
      },
    ],
  },
  {
    name: "Illovo",
    description: [
      "I have developed multiple features for the Illovo CPA app using React and ASP.NET Web API, including creating custom features for AG Grid via its API, implementing charts, and enhancing the user interface. Additionally, I implemented an algorithm to generate a fiscal calendar with week-shifting logic and designed the accompanying UI",
    ],
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ASP.Net REST API",
        color: "green-text-gradient",
      },
      {
        name: "SQL Server",
        color: "pink-text-gradient",
      },
      {
        name: "Figma",
        color: "orange-text-gradient",
      },
    ],
    image: "img/thumbnails/illovo-thumb.jpg",
    video_iframe_links: [
      {
        name: "Illovo Fiscal Calendar",
        url: "https://www.youtube.com/embed/V6ZwApN66dU?si=wkQEOe7tSQkq0L5v",
      },
    ],
  },
  {
    name: "RCL Foods",
    description: [
      "I was primarily involved in UI/UX and front-end development for the Activity Tracker project, where I built the menu and Health Checker HiFi prototypes, along with the corresponding user interfaces",
    ],
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: "img/rcl.png",
    figma_links: [
      {
        name: "Dashboard Presentation",
        url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FfdeyU8yXig69jf45rPTuds%2FRCL-UI-Design%3Fnode-id%3D2116-24%26t%3DcM7WnhWTDMTDl4D7-1%26scaling%3Dmin-zoom%26page-id%3D53%253A4%26starting-point-node-id%3D2116%253A24",
      },
      {
        name: "Health Tracker Presentation",
        url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FfdeyU8yXig69jf45rPTuds%2FRCL-UI-Design%3Fnode-id%3D2116-365%26t%3DQXBSDqj0YDr13DN6-1%26scaling%3Dmin-zoom%26page-id%3D1801%253A345%26starting-point-node-id%3D2116%253A365",
      },
    ],
  },
  {
    name: "Works Group",
    description: [
      "An MVC App that was taken over from a previous developer. I was tasked with fixing bugs, adding new features, and improving the overall performance of the app. I also worked on fixing Syncing issues with a Windows Service that was responsible for syncing data between the app and SAP. I also worked on the order PDF generation features and improved the overall UI/UX of the app",
    ],
    tags: [
      {
        name: "MVC",
        color: "blue-text-gradient",
      },
      {
        name: "Windows Service",
        color: "green-text-gradient",
      },
      {
        name: "Razor",
        color: "pink-text-gradient",
      },
    ],
    image: "img/wgs.png",
  },
];

export { services, technologies, experiences, testimonials, projects };
