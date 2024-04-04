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
    id: "work",
    title: "Work",
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
    description:
      'Web based advanced back office forms system that leverages React Survey.js to generate form schemas and return the Answers in JSON format. I then persisted the schema and answers in "JSON columns" in the db. To view and edit the forms and answers, i pass the form schema to the Survey component which generates the forms and also pass the answers to populate the form fields. I only had a month deadline so I had to get creative to manage the complexity of the form logic required, create extremely long forms (one of the schemas came to 9000 lines) and perform crud operations in adition to some of the niche requirements.',
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
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Engage Employee Portal",
    description:
      "A Next.js project that consisted of multiple components such as a public site, employee portal accessible via login and a headless Content Management System. This was my first enterprise project at Kodelab. I started by Creating LoFi and HiFi figma prototypes. Once approved i moved on to building the front-end of the system using Tailwind CSS (big fan) and building mostly custom components while leveraging UI libraries where it made sense. I then moved on to the headless content management system i.e. Sanity.io and build out the CMS backend and integrated the data via its GROQ API",
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
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Expense Claims",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Illovo CPA",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "RCL Foods Activity Tracker",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Works Group",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
