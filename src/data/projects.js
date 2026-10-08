// One record per project — used by BOTH the card and the modal, so they can never disagree.
//
// NOTE: your original page had conflicting info between cards and modals.
// I merged them as follows (search for "CHECK" to review):
//   teaser = text from the card, desc = text from the modal, stack = chips from the card (deduplicated).
// Edit any of it so it is 100% true — recruiters read these.
const projectGroups = [
  { key: "client", label: "GROUP A", name: "CLIENT PROJECTS" },
  { key: "personal", label: "GROUP B", name: "PERSONAL PROJECTS" },
];

const projects = [
  {
    id: "sis",
    code: "PRJ-02",
    kind: "WEB · SERVICE MGMT",
    group: "client",
    title: "SIS Global Solution",
    teaser: "Responsive corporate website developed using the MERN Stack.",
    desc: "Developed a responsive corporate website for SIS Global Solution using the MERN Stack. The website presents the company’s services, industry solutions, global presence, and contact information through a modern and user-friendly interface optimized for different screen sizes.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    links: { repo: "....", live: "Live" },
  },

  {
    id: "trogo",
    code: "PRJ-06",
    kind: "WEB · TRANSPORT & LOGISTICS",
    group: "client",
    title: "TROGO — TOGOODS Draft",
    teaser:
      "Transport and logistics platform connecting passengers, drivers, and transport partners through one ecosystem.",
    desc: "Worked on the TROGO transport and logistics platform developed for TOGOODS Draft Private Limited. The platform is designed to bring passenger transportation, goods movement, heavy vehicles, and emergency transport services into one ecosystem. The application supports vehicle and service discovery, booking workflows, driver and vehicle verification, real-time trip tracking, transparent pricing, and transport-partner operations. The platform also includes dedicated passenger and transporter experiences covering secure OTP login, booking management, live tracking, driver management, document uploads, vehicle onboarding, and booking navigation. The project focuses on building a responsive, user-friendly interface and connecting different transport workflows into a centralized digital platform.",
    stack: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    links: {
      repo: "....",
      live: "https://www.togoodsdraft.com/",
    },
  },

  {
    id: "lets-shawarma",
    code: "PRJ-05",
    kind: "WEB · FOOD & DELIVERY",
    group: "client",
    title: "Let's Shawarma",
    teaser:
      "Responsive food ordering website designed to showcase the brand, menu, and online ordering experience.",
    desc: "Developed a responsive website for Let's Shawarma, focused on providing customers with a simple and engaging way to explore the brand and its food offerings. The project includes a modern responsive interface, structured menu presentation, clear product information, and an easy-to-navigate user experience across desktop and mobile devices. The website was designed with a strong focus on usability, visual presentation, responsive layouts, and a smooth customer journey from discovering the menu to placing an order.",
    stack: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
    links: {
      repo: "PRIVATE",
      live: "https://www.letsshawarma.in/",
    },
  },

  {
    id: "portfolio",
    code: "PRJ-03",
    kind: "WEB · SELF",
    group: "personal",
    title: "Portfolio Website",
    teaser: "This site — designed and maintained as its own ongoing project.",
    desc: "A personal portfolio built from the ground up — the platform for introducing myself, showcasing projects, and sharing my education, kept and updated as its own small ongoing project rather than a one-off.",
    stack: ["React.js", "Vite", "CSS", "JavaScript"],
    links: {
      repo: "https://github.com/OnkarKhairnar/Portfolio",
      live: "https://onkarkhairnar.github.io/Portfolio/",
    },
  },

  {
    id: "autocare",
    code: "PRJ-04",
    kind: "WEB · SELF",
    group: "personal",
    title: "SpotServe",
    teaser:
      "Car service center management system for appointments, services, customers, and vehicles.",
    desc: "A personal project built with the MERN stack — Fast & Smart Auto Care is a web-based Car Service Center Management System that simplifies appointment booking, service tracking, customer management, and vehicle records through an easy-to-use interface.",
    stack: ["React.js", "Node.js", "JavaScript", "Redux", "Bootstrap"],
    links: { repo: "...", live: "...." },
  },

  {
    id: "helping-hands",
    code: "PRJ-01",
    kind: "WEB · NGO OPS",
    group: "personal",
    title: "Helping Hands",
    teaser:
      "NGO operations application built with React.js and a Node.js, Express.js, and MongoDB backend.",
    desc: "Worked as a MERN Developer on the Helping Hands application, developing responsive and interactive user interfaces using React.js and building RESTful APIs with Node.js and Express.js. Integrated MongoDB for data management, implemented CRUD operations, and connected the frontend with backend services to provide a smooth and efficient user experience.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    links: { repo: "....", live: "...." },
  },

  {
    id: "mindsprint",
    code: "PRJ-07",
    kind: "WEB · QUIZ PLATFORM",
    group: "personal",
    title: "MindSprint",
    teaser:
      "MERN-based quiz platform with role-based access, quiz management, performance tracking, and leaderboards.",
    desc: "MindSprint is a full-stack quiz application built using the MERN stack with a Vite-powered React frontend. The application provides separate experiences for Admins, Quiz Creators, and Users with role-based access and protected functionality. Admins can manage administrators, categories, and the question bank, while Quiz Creators can create, manage, publish, and attempt quizzes. Users can participate in published quizzes and track their performance. The platform supports question management, CSV and JSON question imports, random quiz generation, timed quizzes, quiz attempts, scoring, achievements, streaks, bookmarks, notifications, leaderboards, statistics, dashboards, and performance tracking. The application uses REST APIs to connect the React frontend with the Node.js and Express.js backend and MongoDB for data storage.",
    stack: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "REST APIs",
    ],
    links: {
      repo: "....",
      live: "....",
    },
  },
];

export { projectGroups, projects };

export default projects;
