/* Change this file to get your Personal Portfolio */

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const greeting = {
  username: "Maximilian Georg",
  title: "Hi all, I'm Max",
  subTitle: emoji(
    "A passionate Senior Software Engineer & Technical Leader 🚀 with 5+ years of experience building and shipping products with real customer value. I love to build fast, learn, iterate, and lead teams to success!"
  ),
  resumeLink: "", // Add your resume link here
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/maxgeorg99",
  linkedin: "https://www.linkedin.com/in/maximilian-georg-73354a18a",
  gmail: "maxi.georg.mg@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE SENIOR SOFTWARE ENGINEER WHO LOVES TO EXPLORE AND BUILD WITH CUTTING-EDGE TECHNOLOGIES",
  skills: [
    emoji("⚡ Develop robust backend systems using Java/Spring and modern architecture patterns"),
    emoji("⚡ Lead technical teams and mentor junior developers"),
    emoji("⚡ Design and implement Domain-Driven Design (DDD) architectures"),
    emoji("⚡ Advocate for best practices and guide product decisions in cross-functional scrum teams"),
    emoji("⚡ Handle go lives and take full responsibility for production releases"),
    emoji("⚡ Build interactive and responsive frontend applications with Vue.js"),
    emoji("⚡ Build cross-platform mobile applications using Flutter/Dart"),
    emoji("⚡ Implement data pipelines and machine learning solutions with Python"),
    emoji("⚡ Create multiplayer games and real-time applications using SpacetimeDB"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring Framework",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "JavaScript/TypeScript",
      fontAwesomeClassname: "fab fa-js-square"
    },

    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Rust",
      fontAwesomeClassname: "fab fa-rust"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Karlsruhe Institute of Technology (KIT)",
      logo: require("./assets/images/kit-logo.png"), // Add KIT logo to assets/images/
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2020 - 2022",
      desc: "Graduated with Bachelor's degree in Computer Science. Thesis: Data Spring Dependency Estimation",
      descBullets: [
        "Specialized in software engineering and data analysis",
        "Completed thesis on advanced data dependency estimation algorithms"
      ]
    },
    {
      schoolName: "ETH Zürich",
      logo: require("./assets/images/ETH-Logo.png"), // Add ETH logo to assets/images/
      subHeader: "Computer Science Studies",
      duration: "2018 - 2020",
      desc: "Started Computer Science studies at one of Europe's top technical universities",
      descBullets: [
        "Strong foundation in computer science fundamentals",
        "Transferred to KIT to complete degree"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development (Java/Spring)", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Technical Leadership & Mentoring", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend Development (Vue.js)",
      progressPercentage: "85%"
    },
    {
      Stack: "Domain-Driven Design (DDD)",
      progressPercentage: "90%"
    },
    {
      Stack: "Database Design & SQL",
      progressPercentage: "90%"
    },
    {
      Stack: "Flutter/Mobile Development",
      progressPercentage: "80%"
    },
    {
      Stack: "SpacetimeDB",
      progressPercentage: "85%"
    },
    {
      Stack: "Python/Data Analysis",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to false to hide workExperiences section, defaults to true
  experience: [
    {
      role: "Senior Software Engineer & Technical Leader",
      company: "Chrono24",
      companylogo: require("./assets/images/chrono24-logo.png"), // Add company logo
      date: "June 2023 – Present",
      desc: "Leading backend development, serving as Domain (DDD) owner, and providing technical leadership for critical marketplace systems. Handling most live deployments and critical issues for the team and organization.",
      descBullets: [
        "Technical Owner for 'Certified' program - company-wide technical point of contact for authentication system",
        "Lead team guidance and mentorship, speaking up on technical decisions and product direction",
        "Handle critical live deployments and take full responsibility for production issues across the organization",
        "Developed premium upgrade payment system with PayPal integration for private sellers",
        "Architected Private Seller Funnel as cross-device solution with REST APIs for Web/iOS/Android",
        "Enhanced internal A/B testing tool with autonomous feature conception and implementation",
        "Active member of 'Agile Collaboration Exchange' improving Scrum processes across teams"
      ]
    },
    {
      role: "Junior Software Engineer",
      company: "Chrono24",
      companylogo: require("./assets/images/chrono24-logo.png"),
      date: "October 2022 – June 2023",
      desc: "One of two backend developers in a 7-person Scrum team, taking on diverse responsibilities and demonstrating leadership qualities.",
      descBullets: [
        "Handled full-stack development: concept design, data management, process development, API provision",
        "Developed features for marketplace seller side (both dealers and private sellers) in 'Supply' product area",
        "Moderated Daily Scrums and led product presentations inside and outside of reviews",
        "Gained recognition for technical problem-solving and proactive communication",
        "Began mentoring new team members and taking initiative on critical issues"
      ]
    },
    {
      role: "Working Student - Java Developer",
      company: "Chrono24",
      companylogo: require("./assets/images/chrono24-logo.png"),
      date: "April 2020 – October 2022",
      desc: "Started as working student while completing Bachelor's degree, quickly demonstrating exceptional potential and technical skills.",
      descBullets: [
        "Contributed to core marketplace functionality and backend services",
        "Gained expertise in Java/Spring ecosystem and Vue.js frontend development",
        "Participated in agile development processes and code reviews",
        "Built foundation in domain-driven design principles",
        "Showed early signs of technical leadership and initiative"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "MAJOR PROJECTS THAT SHOWCASE MY EXPERTISE IN BUILDING SCALABLE SOLUTIONS",
  projects: [
    {
      image: require("./assets/images/certification.png"),
      projectName: "Watch Certification System",
      projectDesc: "Built end-to-end certification process from scratch enabling authenticated watch verification between sellers and buyers through professional watchmakers. Achieved product-market fit through iterative development from smoke tests to MVP to V1. See the LinkedIn post for a visual and product journey!",
      footerLink: [
        {
          name: "LinkedIn Post",
          url: "https://www.linkedin.com/posts/jan-schuhmacher-head-of-product-management-chrono24_%F0%9D%97%96%F0%9D%97%B2%F0%9D%97%BF%F0%9D%98%81%F0%9D%97%B6%F0%9D%97%B3%F0%9D%97%B6%F0%9D%97%B2%F0%9D%97%B1-%F0%9D%97%AF%F0%9D%98%86-%F0%9D%97%96%F0%9D%97%B5%F0%9D%97%BF%F0%9D%97%BC%F0%9D%97%BB%F0%9D%97%BC%F0%9D%9F%AE-activity-7183422573307645952-cCSu?utm_source=share&utm_medium=member_desktop&rcm=ACoAACyTJ5cBNcsVttK6b7-jZfq_PJnlNrxcsA8"
        }
      ]
    },
    {
      image: require("./assets/images/private-seller-funnel.png"),
      projectName: "Private Seller Funnel Rebuild",
      projectDesc: "Completely rebuilt legacy seller onboarding system as modern Vue.js SPA with auto-generated TypeScript models, Jakarta validation, premium options, and PayPal integration. Dramatically improved user experience and conversion rates. See the LinkedIn post for a visual and product journey!",
      footerLink: [
        {
          name: "LinkedIn Post",
          url: "https://www.linkedin.com/posts/j%C3%B6rg-mascha-32557a188_private-seller-our-next-app-first-feature-activity-7234487488222810113-LvRH/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACyTJ5cBNcsVttK6b7-jZfq_PJnlNrxcsA8"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle: "CAREER MILESTONES AND PROFESSIONAL GROWTH",
  achievementsCards: [
    {
      title: "Technical Leadership Excellence",
      subtitle: "Natural technical leader guiding teams, handling critical deployments, and taking full responsibility for production issues across the organization",
      image: "https://informationage-production.s3.amazonaws.com/uploads/2022/10/information-ages-guide-to-tech-leadership-roles.jpeg", // Stock image: leadership
      footerLink: []
    },
    {
      title: "Rapid Career Progression",
      subtitle: "Promoted from Working Student → Junior → Senior Engineer in just 3 years, with exceptional performance at each level",
      image: "https://media.istockphoto.com/id/2168908844/de/foto/exzellenz-wachstumsstrategie-gesch%C3%A4ftstrendkonzept-gesch%C3%A4ftsmann-hand-auf-pfeil-investieren.jpg?s=612x612&w=0&k=20&c=wq28a6OzZ1WGAE5ymc3iKHKlmPe-VfZXQSoGWFwXGG0=", // Stock image: career growth
      footerLink: []
    },
    {
      title: "Mentorship & Team Development",
      subtitle: "Active mentor in Chrono24's Buddy Program, guiding multiple new hires and supporting their integration into the company",
      image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80", // Stock image: mentorship
      footerLink: []
    },
    {
      title: "Critical Systems Ownership",
      subtitle: "Trusted with most go lives of big project and critical issues, serving as Technical Owner for company-wide tech topics",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80", // Stock image: critical systems
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "I LOVE TO WRITE AND TEACH OTHERS WHAT I HAVE LEARNT.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    // Add your blog posts here if you have any
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    // Add your talks here if you have any
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // Add podcast links here if you have any
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+49 152 52866559",
  email_address: "maxi.georg.mg@gmail.com"
};

// Twitter Details

const twitterDetails = {
  userName: "twitter", // Replace with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Placeholder value for isHireable
const resumeSection = { resumeLink: "" }; // Placeholder for resumeSection
const splashScreen = { display: true }; // Placeholder for splashScreen
const illustration = { animated: true }; // Placeholder for illustration

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  splashScreen,
  illustration
};