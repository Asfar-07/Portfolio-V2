import { Globe, AppWindow, Wrench, Columns3Cog, EarthLock,
   LayoutDashboard, BriefcaseBusiness, Bird, Database, Braces, MessageCircleCode,
   University, BookOpenCheck, BookMarked, MonitorSmartphone, Hourglass, Form
   } from 'lucide-react';

var projectData;
export default projectData = [
  {
    order: 1,
    type: { category: "web tool", color: "#005c9d", icon: Wrench },
    name: "Qu.dev Survey Builder",
    description: "QuDev solves this. It automatically generates a best-practice relational database schema for your survey system and gives you a full web interface to build, manage, version, and test surveys — without writing a single entity from scratch.",
    point: "if have struggle with create questions",
    display: "image",
    links:["https://github.com/Asfar-07/QuDev","https://github.com/Asfar-07/QuDev"],
    features: [{
      title: "open source",
      icon: Bird,
    },
    {
      title: "database friendly",
      icon: Database,
    },
    {
      title: "easy to integrate",
      icon: Braces,
    }
    ],
    image: ["/images/projects/qudev1.webp", "/images/projects/qudev2.webp"],
    tool: [
      "Java",
      "Spring",
      "MySQL",
      "CSS",
      "Thymeleaf"
    ]
  },

  {
    order: 2,
    type: { category: "web application", color: "#6dffba", icon: AppWindow },
    name: "DinoRyx Application",
    description: "A real-time Gym management platform with immersive data visualization, custom WebGL charts, and live API integration for dashboard.",
    point: "managing gym operations and building a community",
    display: "image",
    links: ["/", "/"],
    features: [{
      title: "microservices architecture",
      icon: Columns3Cog,
    },
    {
      title: "strong security",
      icon: EarthLock,
    },
    {
      title: "interactive dashboard",
      icon: LayoutDashboard,
    }
    ],
    image: ["/images/projects/dinoryx1.webp", "/images/projects/dinoryx2.webp"],
    tool: [
      "Java",
      "Spring",
      "React",
      "TypeScript",
      "CSS",
      "Tailwind CSS",
    ]
  },
  {
    order: 3,
    type: { category: "web application", color: "#ff6d6d", icon: Globe },
    name: "E-Learning Website",
    description: "A full-featured e-learning platform built with Spring Boot and MySQL, featuring Spring Security authentication, course management, JPA-based data handling, and an email notification system. Built with clean MVC architecture using Thymeleaf for dynamic UI rendering.",
    point: "building a responsive e-learning platform for an institution",
    display: "image",
    links: ["/", "/"],
    features: [{
      title: "responsive design",
      icon: MonitorSmartphone,
    },
    {
      title: "developed in short time",
      icon: Hourglass,
    },
    {
      title: "MVC architecture",
      icon: Form,
    }
    ],
    image: ["/images/projects/e-learning1.webp","/images/projects/E-Learning.webp"],
    tool: ["HTML5",
      "CSS",
      "JavaScript",
      "Java",
      "Spring",
      "MySQL",]
  },
  {
    order: 4,
    type: { category: "web application", color: "#005c9d", icon: MessageCircleCode },
    name: "Social Media Web App",
    description: "A real-time social media platform built as a college team project using Node.js and Socket.IO. Features include secure user authentication, public and private chat, user dashboard, search functionality, and a gaming section — all built with Express and Handlebars templating",
    point: "are you using different application ",
    links: ["/", "/"],
    features: [{
      title: "first_college project",
      icon: University,
    },
    {
      title: "live examination",
      icon: BookOpenCheck,
    },
    {
      title: "team documentation",
      icon: BookMarked,
    }
    ],
    image: ["/images/projects/socialmedia1.png","/images/projects/socialmedia2.png"],
    tool: ["Node js", "Express js", "SocketIO", "Handlebars", "MongoDB", "CSS"]
  },
  // {
  //   order: 5,
  //   type: { category: "portfolio application", color: "#033400", icon: BriefcaseBusiness },
  //   name: "this.Portfolio Website",
  //   description: "A responsive and animated personal portfolio built with React and Three.js, featuring 3D WebGL visuals, smooth GSAP animations, and a Node.js/Express backend for contact form handling. Designed for performance and modern user experience.",
  //   point: "if have struggle with create questions",
  //   display: "image",
  //   features: [{
  //     title: "microservices architecture",
  //     icon: Columns3Cog,
  //   },
  //   {
  //     title: "strong security",
  //     icon: EarthLock,
  //   },
  //   {
  //     title: "interactive dashboard",
  //     icon: LayoutDashboard,
  //   }
  //   ],
  //   image: ["/images/projects/portfolio-v2.webp"],
  //   tool: ["Next js",
  //     "React",
  //     "Tailwind CSS",
  //     "JavaScript",
  //     "Three js",
  //   ]
  // }
]