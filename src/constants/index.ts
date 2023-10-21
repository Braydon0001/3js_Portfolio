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
} from '../assets'

import {
  ExperienceType,
  NavLinkType,
  ProjectType,
  ServicesIconType,
  TechnologiesIconType,
  TestimonialType,
} from '../common/constantTypes'
import CSharpCanvas from '../components/canvas/CSharp'
import FigmaCanvas from '../components/canvas/Figma'

import FrontEndDevModel from '../components/canvas/FrontEndDevModel'
import WebDevCanvas from '../components/canvas/WebDev'

export const navLinks: NavLinkType[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services: ServicesIconType[] = [
  {
    title: 'Frontend Dev',
    model: FrontEndDevModel,
    skillGroups: [
      'React, Typescript, Next.js',
      '3JS, React Three Fiber, GIT',
      'Html, CSS, Javascript, Tailwind',
      'JQuery, MVC, Razor, Umbraco',
    ],
  },
  {
    title: 'Backend Dev',
    model: CSharpCanvas,
    skillGroups: [
      'SQL Server, MySQL, Azure, AWS',
      'ASP .Net Web API, C#, GIT',
      'Entity Framework, Dapper',
      'Clean Architecture, LINQ',
    ],
  },
  {
    title: 'UI/UX Design',
    model: FigmaCanvas,
    skillGroups: [
      'Figma, Adobe XD',
      'Adobe Photoshop / Illustrator',
      'LoFi / HiFi Prototyping',
      'Wireframing, Interaction design',
    ],
  },
  {
    title: 'Web Design',
    model: WebDevCanvas,
    skillGroups: [
      'Wordpress, Elementor',
      'Woocommerce, PHP',
      'Adobe Creative Cloud',
      'Sanity Studio, Responsive',
    ],
  },
]

const technologies: TechnologiesIconType[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const experiences: ExperienceType[] = [
  {
    title: 'Html Js Php Developer',
    company_name: 'Wild Web',
    icon: '/img/experience-images/html5.svg',
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Wordpress Php Developer',
    company_name: 'Black Ticket',
    icon: '/img/experience-images/wp.svg',
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'I.T Specialist & Php Developer',
    company_name: 'Zimbali Estate Management Association',
    icon: '/img/experience-images/server-solid.svg',
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer & UI UX Designer',
    company_name: 'KodeLab / Insight Consulting',
    icon: '/img/experience-images/code-solid.svg',
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
]

const testimonials: TestimonialType[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects: ProjectType[] = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
]

export { services, technologies, experiences, testimonials, projects }
