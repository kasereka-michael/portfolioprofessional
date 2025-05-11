import almaak from "@/assets/images/almaak.jpg";
import esyonyimbo from "@/assets/images/esyonyimbo sya kristo.png";
import pneumonia from "@/assets/images/pneumonia.png";
import onehealth from "@/assets/images/onehealth.png";
import eyano from "@/assets/images/eyano.png";

export const portfolioData = {
  user: {
    name: "Michael Kasereka",
    title: "Backend Developer",
    email: "kaserekamichael23526@gmail.com",
    location: "Uganda, Africa",
    bio: " I'm a passionate professional software engineer with 2+ years of experience building web applications and solving complex problems. My journey in tech started with a Computer Science degree, and I've been hooked on creating elegant solutions ever since.",
    avatar: "https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    about: "I'm specialized in back-end development with a focus on performance optimization and scalability When I'm not coding, you can find me exploring new technologies. When I'm not coding, you'll find me hiking, reading sci-fi novels, or contributing to open-source projects.",
    socialMedia: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  skills: {
    programming: [
      { name: "JavaScript", level: 70 },
      { name: "Python", level: 75 },
      { name: "Java", level: 85 },
      { name: "Html", level: 90 },
    ],
    frameworks: [
      { name: "React", level: 80 },
      { name: "React Native", level: 80 },
      { name: "Spring Boot", level: 90 },
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
    ],
    other: [
      "Database Design",
      "RESTful APIs",
      "UI/UX Design",
      "Testing (Unit, E2E)",
      "Performance Optimization",
      "SEO",
      "Responsive Design",
      "Agile development",
      "Mysql",
      "PostgreSQL",
      "IT support",
      "System admin",
    ],
  },
  projects: [
    {
      id: 1,
      title: "Almaak website",
      description: "This is a website of Almaakcorp SARL which is is a multifaceted company based in Goma, Democratic Republic of the Congo",
      image: almaak,
      github: "https://github.com",
      demo: "https://www.almaakcorp.com",
      featured: true,
      categories: ["react", "node"],
      technologies: [
        { name: "React", colorClasses: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
        { name: "Node.js", colorClasses: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" },
      ],
    },
    {
      id: 2,
      title: "Esyonyimbo sya kristo",
      description: "Esyo Nyimbo Sya Kristo mobile application. It's a digital hymnbook designed for speakers of the Bantu Yira language—commonly known as Kinande, Kiyira, Lukonjo, or Konjo—spoken in parts of the Democratic Republic of Congo and Uganda. This app is particularly popular among members of the Seventh-day Adventist Church.",
      image: esyonyimbo,
      github: "https://github.com",
      demo: "https://play.google.com/store/apps/details?id=yira.example.user.nandehymnalebook&hl=en",
      featured: false,
      categories: ["reactNative", "typescript"],
      technologies: [
        { name: "React Native", colorClasses: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
        { name: "typescript", colorClasses: "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200" },
      ],
    },
    {
      id: 3,
      title: "Equipment calibration and management system",
      description: "An enterprise application for managing budgets, expenses, and financial reporting.",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
      categories: ["java"],
      technologies: [
        { name: "Java", colorClasses: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200" },
        { name: "Spring Boot", colorClasses: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" },
        { name: "PostgreSQL", colorClasses: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
        { name: "Docker", colorClasses: "bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200" },
      ],
    },
    {
      id: 4,
      title: "EyanoServices WebSite",
      description: "A web application to expose the services of Eyanoservices, a company based in Durba, DRC.",
      image: eyano,
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
      categories: ["Html"],
      technologies: [
        { name: "html", colorClasses: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
        { name: "javascript", colorClasses: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" },
        { name: "amchart.js", colorClasses: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200" },
        { name: "FormSpree", colorClasses: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200" },
      ],
    },
    {
      id: 5,
      title: "One health Sentinel",
      description: "A web application for monitoring and managing health data using Spring boot and thymleaf.",
      image: onehealth,
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
      categories: ["spring"],
      technologies: [
        { name: "Spring boot", colorClasses: "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200" },
        { name: "Thymleaf", colorClasses: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
        { name: "amchart.js", colorClasses: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200" },
        // { name: "", colorClasses: "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200" },
      ],
    },
    {
      id: 6,
      title: "Pneumonia Detection System",
      description: "A machine learning model for detecting pneumonia from chest X-ray images using TensorFlow.",
      image: pneumonia,
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
      categories: ["python"],
      technologies: [
        { name: "Python", colorClasses: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
        { name: "Django", colorClasses: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200" },
        { name: "Pandas", colorClasses: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" },
        // { name: "OAuth2", colorClasses: "bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200" },
      ],
    },
  ],
  experiences: [
    {
      "title": "Mobile Application Developer",
      "company": "Eshyo Nyimbo Sya Kristo",
      "period": "January 2021 – Present",
      "description": "Designed and developed a mobile application 'Eshyo Nyimbo Sya Kristo' with over 10,000 active users using Java and React Native.",
      "achievements": [
        "Built a scalable and user-friendly app serving over 10,000 users",
        "Integrated database connectivity and optimized performance",
        "Maintained and updated the app regularly based on user feedback"
      ]
    },
    {
      "title": "Mobile Application Developer",
      "company": "Independent Project – Bible in Yira",
      "period": "2023 (Personal Project)",
      "description": "Developed a mobile Bible application using React Native and Expo for the Yira-speaking community.",
      "achievements": [
        "Used Expo and React Native for cross-platform compatibility",
        "Designed a clean and intuitive UI for scripture reading",
        "Enabled offline reading and basic navigation features"
      ]
    },
    {
      "title": "IT Support Specialist",
      "company": "Eyanoservices",
      "period": "February 2024 – Present",
      "description": "Provide technical support and maintain IT infrastructure for a company in Durba, DRC.",
      "achievements": [
        "Troubleshoot hardware, software, and network issues",
        "Maintain servers and databases with basic security practices",
        "Coordinate system updates and incident resolution with the IT team"
      ]
    },
    {
      "title": "IT Support Specialist",
      "company": "Almaakcorp",
      "period": "February 2024 – Present",
      "description": "Support IT infrastructure and conduct training at Almaakcorp in Durba, Congo.",
      "achievements": [
        "Manage user access and basic database maintenance",
        "Perform system checks and regular backups",
        "Train employees on IT tools to boost productivity"
      ]
    },
    {
      "title": "Software Development Intern",
      "company": "ASOM - Adventist School of Medicine",
      "period": "June 2023 – January 2024",
      "description": "Adding new features and improve the design of Asom amanagement system in Kigali, Rwanda.",
      "achievements": [
        "Implemention of notification system for students and staff",
        "redesign the user interface for better usability",
        "Optimize database queries for faster data retrieval",
      ]
    }
    ],
  education: [
    {
      degree: "BSc Computer Science",
      institution: "Adventist University of Central Africa",
      years: "2020 - 2025",
      description: "Graduated with honors. Focused on software engineering.",
    },
    {
      degree: "Linux System Administration",
      institution: "Cisco Networking Academy",
      years: "2023",
      description: "Expertise in System Administration, configuring Webserver and deploying Web applications",
    },
    {
      degree: "Java Programmer",
      institution: "Pipple Institute",
      years: "2022",
      description: "Intensive program covering modern Java frameworks, APIs, and backend Technics.",
    },
  ],
  blogs: [
    // {
    //   title: "Building Scalable React Applications",
    //   excerpt: "Best practices for structuring large-scale React applications to maintain code quality and developer productivity.",
    //   date: "2023-06-12",
    //   image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    //   category: {
    //     name: "React",
    //     colorClass: "bg-primary",
    //   },
    // },
    // {
    //   title: "Microservices vs Monoliths: Making the Right Choice",
    //   excerpt: "A practical guide to choosing between microservices and monolithic architectures for your next project.",
    //   date: "2023-05-24",
    //   image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    //   category: {
    //     name: "Architecture",
    //     colorClass: "bg-green-500",
    //   },
    // },
    // {
    //   title: "Machine Learning for Web Developers",
    //   excerpt: "How to integrate machine learning capabilities into your web applications using TensorFlow.js.",
    //   date: "2023-04-10",
    //   image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    //   category: {
    //     name: "AI & ML",
    //     colorClass: "bg-purple-500",
    //   },
    // },
  ],
  testimonials: [
    // {
    //   content: "John is an exceptional developer with a keen eye for detail. His ability to translate complex requirements into elegant solutions is remarkable.",
    //   name: "Sarah Johnson",
    //   position: "CTO at TechInnovate",
    //   image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    // },
    // {
    //   content: "Working with John was a pleasure. He not only delivered exceptional code but also provided valuable insights that improved our product.",
    //   name: "Michael Chen",
    //   position: "Product Manager at SoftServe",
    //   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    // },
    // {
    //   content: "John's technical skills are top-notch, but what truly sets him apart is his ability to communicate complex concepts in simple terms.",
    //   name: "Alexandra Rodriguez",
    //   position: "CEO at WebFusion",
    //   image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    // },
  ],
};
