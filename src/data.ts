import { Project, Skill, Certification, Education, Experience, Achievement } from "./types";

export const ownerDetails = {
  name: "Indhumathi R S",
  titleMsg: "Hi, I'm",
  roles: ["Software Engineer", "Java Full Stack Developer", "AI Enthusiast", "Machine Learning Engineer", "Problem Solver", "Backend Developer"],
  tagline: "Computer Science Engineering Student | Java Full Stack Developer | Problem Solver",
  shortIntro: "Computer Science Engineering student with strong foundations in programming and software development. Passionate about building real-world applications and continuously learning modern technologies.",
  stats: {
    projectsCompleted: 8,
    certificationsCount: 6,
    cgpa: "8.7",
    techLearned: 14,
    hackathonsParticipated: 4
  },
  about: {
    institution: "Government College of Engineering, Erode",
    cgpa: "8.7/10",
    bio: "A Computer Science Engineering student at Government College of Engineering, Erode with a CGPA of 8.7/10. Passionate about software development, backend engineering, web technologies, and problem solving.",
    interests: ["Full Stack Development", "Java Development", "Software Engineering", "Open Source Learning"]
  },
  socials: {
    github: "https://github.com/Indhumathi1505",
    linkedin: "https://www.linkedin.com/in/indhumathi-r-s-b134032b7/",
    email: "indhumathirsj@gmail.com",
    leetcode: "https://leetcode.com/u/sXbykKTGvc/",
    hackerrank: "https://www.hackerrank.com/profile/indhumathirsj"
  }
};

export const projectsData: Project[] = [
  {
    id: "placement-ai",
    title: "Placement AI – Career Suite",
    category: "Full Stack",
    description: "A recruitment preparation system leveraging AI for mock interviews, resume ATS reviews, skill parsing, visual learning roadmaps for major career domains, and an interactive career chat assistant.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Java 17", "Spring Boot", "MongoDB Atlas", "LLaMA", "MiniLM", "Claude AI", "JWT", "Render"],
    features: [
      "Dynamic AI-driven mock interviews with behavioral and technical evaluation metrics",
      "Smart resume scanner extracting key developer skills and scoring ATS compliance",
      "Interactive learning roadmaps outlining required skills for software engineering domains",
      "Real-time AI Career & Code assistant chats offering personalized feedback and solutions"
    ],
    githubUrl: "https://github.com/Indhumathi1505/Placement-AiProject",
    liveUrl: "https://github.com/Indhumathi1505/Placement-AiProject",
    featured: true,
    extendedDescription: "PlaceIQ is an AI-powered placement readiness platform developed to help students evaluate and improve their employability before campus recruitment. The system analyzes academic performance, technical skills, projects, internships, and resumes to predict placement readiness and identify skill gaps. It leverages Large Language Models (LLMs), Natural Language Processing (NLP), and sentence embeddings to provide personalized career guidance. The platform performs AI-based resume analysis, skill matching, and placement probability prediction with a readiness score. It also generates customized learning roadmaps, career recommendations, and mock interview suggestions based on each student's profile. Secure user authentication and an interactive dashboard enable students to track their progress and continuously improve their skills. The application integrates AI models such as LLaMA, MiniLM, Claude, and Google Antigravity AI Agent to deliver intelligent insights and automate career planning. By combining AI-driven analytics with a scalable architecture, PlaceIQ bridges the gap between academic learning and industry expectations, making placement preparation more effective and data-driven."
  },
  {
    id: "ekart",
    title: "EKart – Car Marketplace Website",
    category: "Full Stack",
    description: "A comprehensive full-stack platform for buying and selling cars, powered by robust Java/Spring Boot APIs and a sleek user interface.",
    technologies: ["React 19", "Vite", "Spring Boot 3.2", "MongoDB Atlas", "Redis", "WebSockets", "JWT", "Render"],
    features: [
      "Buy and sell second-hand or used cars directly on the platform",
      "Secure authentication and user profile management",
      "Redis-based session caching and high-performance querying",
      "Real-time buyer-seller instant messaging system"
    ],
    githubUrl: "https://github.com/Indhumathi1505/Clar-app",
    liveUrl: "https://github.com/Indhumathi1505/Clar-app",
    videoUrl: "/carapp-demo.mp4",
    featured: true,
    extendedDescription: "Project Overview: Developed a comprehensive, full-stack car buying and selling web application connecting individual buyers, sellers, and commercial showrooms. Modern Tech Stack: Built a responsive Single Page Application (SPA) using React 19 and Vite, powered by a robust Spring Boot 3.2 RESTful backend. Database & Caching: Utilized MongoDB (Atlas) for flexible, document-based storage of vehicle listings and images, alongside Redis for efficient session management. Real-Time Communication: Implemented a real-time, peer-to-peer messaging system between buyers and sellers using WebSockets and the STOMP protocol. Role-Based Access Control: Engineered a secure, three-tiered architecture supporting distinct workflows for General Users (Buyers/Sellers), Showrooms (Dealers), and Administrators. Listing Lifecycle & Moderation: Created an admin-controlled approval queue ensuring that all user and showroom car listings are moderated before going public. Secure Authentication: Secured REST API endpoints and managed user authorization statelessly using JWT (JSON Web Tokens) and Axios interceptors. Interactive User Experience: Enabled buyers to filter/browse approved vehicles, toggle favourites, submit reviews, and seamlessly chat with vehicle owners. Showroom Integration: Provided dedicated, secure registration (using BCrypt hashing) and upload workflows for dealerships to manage their new car inventories. Cloud Deployment: Successfully deployed the production-ready application using Render for hosting the frontend and backend APIs, and MongoDB Atlas for the cloud database. Architecture & Scalability: Designed a scalable system with clear separation of concerns, utilizing Spring Data repositories, custom DTOs, and global exception handling. Complex Data Handling: Managed intricate data models, including conditional fields based on seller type and efficient handling of multipart file uploads for car imagery."
  },
  {
    id: "smart-class-advisor",
    title: "Smart Class Advisor Management System",
    category: "Full Stack",
    description: "An administrative academic suite crafted for colleges to automate subject allocation, track marks, and evaluate performance indicators.",
    technologies: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
    features: [
      "Role-based authentication & dashboard access (Advisors, Teachers, Students)",
      "Dynamic subject allocation and class curriculum tracking",
      "Comprehensive internal and lab mark ledger management",
      "Automatic dynamic CGPA/GPA calculator",
      "Performance prediction analytics using students' academic scores"
    ],
    githubUrl: "https://github.com/Indhumathi1505/ClassAdvisor",
    liveUrl: "https://github.com/Indhumathi1505/ClassAdvisor",
    featured: true
  },
  {
    id: "legal-case",
    title: "Legal Case Management System",
    category: "Full Stack",
    description: "An enterprise-grade administrative dossier portal designed for law firms to automate case tracking, client scheduling, and document discovery pipelines.",
    technologies: ["React.js", "Tailwind CSS", "Spring Boot", "MySQL", "Google Gemini API", "JWT", "Spring Security"],
    features: [
      "Role-based secure access for legal counsel, paralegals, and clients",
      "Dynamic hearing timeline tracker with automated email notifications",
      "Robust document indexing and full-text contract search utility",
      "Audit logs keeping full chronological track of case file revisions"
    ],
    githubUrl: "https://github.com/Indhumathi1505/LegalCase-Management",
    liveUrl: "https://github.com/Indhumathi1505/LegalCase-Management",
    featured: true,
    extendedDescription: "LexForge is a full-stack AI-powered Legal Case Management System designed to simplify the workflow of law firms by centralizing case, client, lawyer, and document management. The platform provides secure role-based access for administrators, lawyers, and clients, enabling efficient collaboration throughout the legal process. It includes features such as case registration, client management, lawyer assignment, court calendar scheduling, document storage, security logs, and report generation. An integrated AI Legal Assistant powered by the Gemini API helps users analyze legal queries, summarize legal documents, explain legal concepts, and provide structured case insights. The system also offers real-time notifications for hearing updates and case progress. A modern dashboard provides quick access to ongoing cases, pending tasks, and analytics, improving productivity and decision-making. The application emphasizes data security, scalability, and user-friendly design, making it suitable for real-world law firm operations. This project demonstrates full-stack development skills, REST API integration, AI-assisted legal support, secure authentication, and responsive UI development."
  },
  {
    id: "ai-reviewer",
    title: "AI Code Reviewer Service",
    category: "Full Stack",
    description: "An automated developer assistant utility integrating with code repos to audit syntax, flag code smells, detect security bugs, and suggest optimization guidelines.",
    technologies: ["React", "Node.js", "AI Studio API", "REST APIs", "Git"],
    features: [
      "Real-time code analysis comparing diffs against modern clean code benchmarks",
      "Complexity analysis metrics detailing nested scopes and recursion depths",
      "One-click suggestions auto-generating optimized snippet replacements",
      "Seamless GitHub webhook triggers for instant pull-request comments"
    ],
    githubUrl: "https://github.com/Indhumathi1505/Aicode-reviewer",
    liveUrl: "https://github.com/Indhumathi1505/Aicode-reviewer",
    featured: true,
    extendedDescription: "CodeSphere: Next-Generation AI Developer Workspace CodeSphere is a comprehensive, full-stack web application designed to empower developers with a unified suite of AI-driven tools, real-time collaboration, and robust project management. Built with a modern tech stack featuring a React/Vite frontend and a Spring Boot (Java) backend, it provides a seamless, high-performance environment for modern software engineering. At the core of the platform is an intelligent AI Code Reviewer that performs static analysis, calculates time and space complexity, detects security vulnerabilities, and generates optimized refactored code. Developers can write, compile, and test their code across multiple programming languages using the integrated Monaco-powered online compiler. Beyond coding, CodeSphere features an AI Chat Assistant and Document Analyzer, allowing users to upload project specifications or documentation and interactively query them for context. The platform supports real-time collaborative document editing powered by WebSockets, ensuring seamless team coordination. Security and personalization are deeply integrated, offering JWT-based authentication, Two-Factor Authentication (2FA), and highly customizable user profiles with dynamic themes. By combining automated AI insights with a fully-featured cloud IDE experience, CodeSphere dramatically accelerates the software development lifecycle, ensuring code quality, security, and efficiency."
  },
  {
    id: "coffee-website",
    title: "Vibrant Coffee Spot Website",
    category: "Frontend",
    description: "An elegant interactive promotional frontend website for a boutique cafe featuring rich sensory interfaces and smooth transitions.",
    technologies: ["HTML", "CSS3", "JavaScript"],
    features: [
      "Fully responsive responsive layout adapting with mobile-first media queries",
      "Interactive product showcases with customized cart previews",
      "Immersive scroll-linked micro-animations",
      "Optimized layout styled with high performance Flexbox and Grid models"
    ],
    githubUrl: "https://github.com/Indhumathi1505",
    liveUrl: "https://github.com/Indhumathi1505",
    images: [
      "/coffee-app/Screenshot (1115).png",
      "/coffee-app/Screenshot (1116).png",
      "/coffee-app/Screenshot (1117).png",
      "/coffee-app/Screenshot (1118).png",
      "/coffee-app/Screenshot (1119).png",
      "/coffee-app/Screenshot (1120).png",
      "/coffee-app/Screenshot (1121).png"
    ],
    featured: false,
    extendedDescription: "This project is a detailed case study in modern web aesthetic implementation. Focused entirely on sensory web design, it leverages smooth scrolling interactions and micro-animations to create a premium digital experience mimicking the warmth of a boutique coffee shop. Performance optimizations include carefully structured CSS grid layouts and compressed assets, ensuring rapid load times while maintaining high-fidelity visuals."
  },
  {
    id: "weather-app",
    title: "Real-time Weather Dashboard",
    category: "Frontend",
    description: "A sleek, animated meteorological visualizer featuring auto-locating search queries, multi-day forecasting charts, and dynamic weather theme changes.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React"],
    features: [
      "Interactive charts detailing humidity levels, wind speed, and pressure profiles",
      "Geolocation search with caching logic for ultra-fast location loads",
      "Dynamic theme shifts mirroring current atmospheric conditions (rainy, clear, cloudy)",
      "Fully responsive responsive grids adapting flawlessly from widescreen down to mobile"
    ],
    githubUrl: "https://github.com/Indhumathi1505",
    liveUrl: "https://github.com/Indhumathi1505",
    videoUrl: "/weatherapp-demo.mp4",
    featured: false,
    extendedDescription: "A robust implementation of API-driven frontend architecture. This case study demonstrates efficient state management in React, handling asynchronous weather data streams and dynamic UI rendering. The app leverages geolocation APIs and local storage caching to provide immediate, localized meteorological insights, presented through an intuitive, data-dense layout that adapts its thematic elements based on live weather conditions."
  },
  {
    id: "calculator",
    title: "Advanced Math Workspace & Calculator",
    category: "Frontend",
    description: "An elegant interactive scientific calculation engine designed with a modern mathematical input parser and smooth fluid micro-animations.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React"],
    features: [
      "Scientific math equation parser supporting complex logarithmic and algebraic functions",
      "Chronological ledger history storing past computational steps and solutions",
      "Smooth glassmorphism dark-mode UI customized with premium HSL gradients",
      "Zero latency keyboard shortcut indexing mapping physical key inputs"
    ],
    githubUrl: "https://github.com/Indhumathi1505",
    liveUrl: "https://github.com/Indhumathi1505",
    videoUrl: "/calculator-demo.mp4",
    featured: false,
    extendedDescription: "This calculator serves as a case study in complex state management and parsing logic within a frontend application. It moves beyond simple arithmetic by implementing a custom parser capable of handling scientific operations and maintaining a continuous history ledger. The project highlights advanced DOM manipulation for zero-latency keyboard event mapping and a meticulously crafted glassmorphism design system that elevates a utilitarian tool into a premium user experience."
  }
];

export const skillsData: Skill[] = [
  // Programming Languages
  { name: "Java", icon: "Code2", category: "Programming" },
  { name: "C Language", icon: "Binary", category: "Programming" },
  
  // Frontend
  { name: "HTML5", icon: "FileHtml", category: "Frontend" },
  { name: "CSS3", icon: "Palette", category: "Frontend" },
  { name: "JavaScript", icon: "Cpu", category: "Frontend" },
  { name: "React", icon: "Atom", category: "Frontend" },
  
  // Backend
  { name: "Spring Boot", icon: "Layers", category: "Backend" },
  { name: "REST APIs", icon: "Network", category: "Backend" },
  
  // Database
  { name: "MySQL", icon: "Database", category: "Database" },
  { name: "MongoDB", icon: "FolderGit", category: "Database" },
  
  // Tools
  { name: "Git", icon: "GitBranch", category: "Tools" },
  { name: "GitHub", icon: "Github", category: "Tools" },
  { name: "VS Code", icon: "Terminal", category: "Tools" },
  { name: "Postman", icon: "Send", category: "Tools" },
  { name: "Cursor", icon: "Code2", category: "Tools" },
  { name: "Antigravity", icon: "Sparkles", category: "Tools" }
];

export const educationData: Education = {
  institution: "Government College of Engineering, Erode",
  degree: "Bachelor of Engineering (B.E)",
  department: "Computer Science and Engineering",
  duration: "2023 - 2027",
  gpa: "8.7 / 10",
  details: [
    "Consistent top-performer, maintaining a high cumulative grade point average (8.7 CGPA).",
    "Specialized coursework in Agile Software Engineering, Database Systems, Object Oriented Programming with Java, and Data Structures & Algorithms.",
    "Active participant in tech symposiums, code hackathons, and software engineering workshops."
  ]
};

export const certificationsData: Certification[] = [
  {
    id: "nptel-cloud",
    title: "Cloud Computing",
    issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
    date: "2025",
    credentialUrl: "/Cloud Computing.pdf",
    description: "In-depth program covering virtualization, cloud service delivery models (SaaS, PaaS, IaaS), MapReduce distributed frameworks, resource scheduling, and cloud security architecture."
  },
  {
    id: "coursera-python",
    title: "Crash Course on Python",
    issuer: "Coursera",
    date: "2024",
    credentialUrl: "/Coursera Python.pdf",
    description: "Hands-on foundation course covering basic Python syntax, data structures (lists, dictionaries, tuples), object-oriented programming concepts, and writing automated scripts."
  },
  {
    id: "coursera-c",
    title: "Programming Fundamentals in C",
    issuer: "Coursera",
    date: "2023",
    credentialUrl: "/Coursera C fundamentals.pdf",
    description: "Foundational programming certification focused on memory allocation, pointer manipulation, arrays, modular program structure, and compilation processes in C."
  },
  {
    id: "infosys-java",
    title: "Java Programming Fundamentals",
    issuer: "Infosys Springboard",
    date: "2024",
    credentialUrl: "/infosys java cert.pdf",
    description: "Rigorous training in Core Java, object-oriented concepts, multithreading, exception handling, dynamic collection frameworks, and memory management basics."
  },
  {
    id: "hackerrank-java",
    title: "Java (Basic)",
    issuer: "HackerRank",
    date: "2024",
    description: "Verified assessment validating proficiency in standard Java concepts including inheritance, method overriding, collections, and loop structures."
  },
  {
    id: "hackerrank-sql",
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "2024",
    description: "Verified assessment validating knowledge of SQL relational query operations, data filtering, joining multiple tables, aggregations, and subqueries."
  },
  {
    id: "ibm-ai",
    title: "AI Fundamentals: Foundations for Understanding AI",
    issuer: "IBM SkillsBuild",
    date: "2025",
    credentialUrl: "/AI -Completion Certificate _ SkillsBuild.pdf",
    description: "Comprehensive foundational introduction covering artificial intelligence concepts, machine learning algorithms, deep learning structures, natural language processing, and ethical AI practices."
  },
  {
    id: "gen-ai",
    title: "Generative AI Foundations",
    issuer: "SkillsBuild / IBM Cognitive Class",
    date: "2025",
    credentialUrl: "/genai.jpeg",
    description: "Verified completion of Generative AI concepts, exploring LLMs, prompt engineering paradigms, application deployment options, and AI ethics."
  }
];

export const aboutFeaturesData = [
  {
    title: "Problem Solving",
    description: "Strong data structures and algorithmic skills. Active on LeetCode and HackerRank solving complex puzzles.",
    icon: "Cpu"
  },
  {
    title: "Team Collaboration",
    description: "Experienced working in agile academic teams, git branch workflows, and cooperative project building.",
    icon: "Users"
  },
  {
    title: "Leadership",
    description: "Organized campus tech sessions, coordinated peer study groups, and managed project milestone releases.",
    icon: "Shield"
  },
  {
    title: "Continuous Learning",
    description: "Always updating knowledge. Certified in Cloud Computing, Java, and C through major platforms.",
    icon: "BookOpen"
  },
  {
    title: "Software Development",
    description: "Passionate about full-stack engineering, designing robust systems, modular services, and neat code.",
    icon: "Code2"
  }
];

export const experiencesData: Experience[] = [
  {
    id: "exp-1",
    company: "Smart Class Advisor (Academic Project Lead)",
    role: "Full Stack Developer",
    duration: "2024",
    type: "Leadership",
    description: [
      "Led a team of students to design and develop a web application for tracking academic GPA benchmarks and advisor allotments.",
      "Integrated Spring Boot REST APIs with React frontend components, achieving full responsive layouts.",
      "Constructed custom predictors using historical scores for future CGPA estimations."
    ],
    skills: ["Java", "Spring Boot", "React", "MySQL"]
  },
  {
    id: "exp-2",
    company: "Open Source Contributor & Freelance Work",
    role: "Software Developer",
    duration: "2023 - Present",
    type: "Freelance",
    description: [
      "Built and deployed custom interactive frontend promotional pages for local clients, ensuring mobile responsiveness.",
      "Contributed bug fixes to community packages and maintained active version control repositories on GitHub.",
      "Optimized assets and page configurations to improve Lighthouse loading scores by up to 25%."
    ],
    skills: ["HTML", "CSS", "JavaScript", "Git", "Vite"]
  },
  {
    id: "exp-3",
    company: "Technical Symposiums & Coding Events",
    role: "Organizer & Participant",
    duration: "2024 - 2025",
    type: "Workshop",
    description: [
      "Co-organized institutional code camps, introducing Java collections and pointer maths to peer groups.",
      "Participated in multiple state-level hackathons and web development design challenges.",
      "Presented cloud architecture concepts and virtualization models in academic seminars."
    ],
    skills: ["Cloud Computing", "Technical Speaking", "Problem Solving"]
  }
];

export const achievementsData: Achievement[] = [
  {
    id: "ach-1",
    title: "LeetCode Platform Proficiency",
    category: "Coding",
    metric: "150+ Solved",
    description: "Active coder, mastering array manipulations, sorting algorithms, and standard string parsing constructs.",
    date: "2025"
  },
  {
    id: "ach-2",
    title: "HackerRank Skills Verification",
    category: "Coding",
    metric: "5-Star Gold",
    description: "Verified problem solving capabilities and core language logic, earning gold badges in Java and SQL algorithms.",
    date: "2024"
  },
  {
    id: "ach-3",
    title: "Infosys Springboard Certified Java Specialist",
    category: "Certification",
    metric: "Score: 92%",
    description: "Achieved elite passing standard on Infosys Springboard Java programming tests, certifying advanced Java capabilities.",
    date: "2024"
  },
  {
    id: "ach-4",
    title: "AgentVerse Hackathon Runner-up",
    category: "Competition",
    metric: "2nd Prize",
    description: "Secured second place in the AgentVerse Hackathon, designing and building autonomous multi-agent systems.",
    date: "2025",
    credentialUrl: "/agentverse.jpeg"
  }
];
