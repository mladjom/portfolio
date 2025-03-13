// Define types for our portfolio data
export interface Skill {
    name: string;
    category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
    level: number; // 1-5
    icon?: string;
  }
  
  export interface Experience {
    company: string;
    position: string;
    period: string;
    description: string;
    skills: string[];
  }
  
  export interface Education {
    institution: string;
    degree: string;
    period: string;
    description?: string;
  }
  
  export interface Project {
    title: string;
    description: string;
    technologies: string[];
    image?: string;
    link?: string;
    github?: string;
  }
  
  export interface PortfolioData {
    name: string;
    title: string;
    summary: string;
    location: string;
    phone: string;
    email: string;
    website: string;
    github: string;
    skills: Skill[];
    experiences: Experience[];
    education: Education[];
    projects: Project[];
    languages: { language: string; proficiency: string }[];
  }
  
  const portfolioData: PortfolioData = {
    name: "Mladen Milentijevic",
    title: "Software Developer | Web Engineer | Tech Enthusiast",
    summary: "Experienced software developer with a strong background in full-stack development, web-based applications, and UI/UX. Skilled in React, Laravel, PHP, and modern web technologies, with a passion for performance optimization and scalable architectures.",
    location: "Malmö, Sweden",
    phone: "+46(0)762340545",
    email: "mladenmilentijevic@gmail.com",
    website: "https://milentijevic.com/",
    github: "github.com/mladjom",
    
    skills: [
      { name: "PHP OOP", category: "backend", level: 5 },
      { name: "Symfony", category: "backend", level: 4 },
      { name: "Laravel", category: "backend", level: 5 },
      { name: "WordPress", category: "backend", level: 5 },
      { name: "WooCommerce", category: "backend", level: 4 },
      { name: "REST APIs", category: "backend", level: 5 },
      { name: "SOAP", category: "backend", level: 4 },
      { name: "OAuth", category: "backend", level: 4 },
      { name: "Linux", category: "devops", level: 4 },
      { name: "Ubuntu", category: "devops", level: 4 },
      { name: "CentOS", category: "devops", level: 3 },
      { name: "Vagrant", category: "devops", level: 3 },
      { name: "MySQL", category: "database", level: 5 },
      { name: "PostgreSQL", category: "database", level: 4 },
      { name: "MongoDB", category: "database", level: 3 },
      { name: "Database Design", category: "database", level: 4 },
      { name: "CSS", category: "frontend", level: 5 },
      { name: "SCSS", category: "frontend", level: 4 },
      { name: "SASS", category: "frontend", level: 4 },
      { name: "LESS", category: "frontend", level: 4 },
      { name: "JavaScript", category: "frontend", level: 5 },
      { name: "jQuery", category: "frontend", level: 5 },
      { name: "JSON", category: "frontend", level: 5 },
      { name: "AJAX", category: "frontend", level: 5 },
      { name: "Angular", category: "frontend", level: 3 },
      { name: "React", category: "frontend", level: 4 },
      { name: "Next.js", category: "frontend", level: 3 },
      { name: "Git", category: "devops", level: 4 },
      { name: "Subversion", category: "devops", level: 3 },
      { name: "HTML", category: "frontend", level: 5 },
      { name: "Bootstrap", category: "frontend", level: 4 },
      { name: "Ionic Framework", category: "frontend", level: 3 },
      { name: "C#", category: "backend", level: 3 },
      { name: "ASP.NET", category: "backend", level: 3 },
      { name: "MVC", category: "backend", level: 3 },
      { name: "Azure", category: "devops", level: 2 },
      { name: "SQL Server", category: "database", level: 3 },
      { name: "Tailwind CSS", category: "frontend", level: 4 },
      { name: "UI/UX Design", category: "frontend", level: 4 },
    ],
    
    experiences: [
      {
        company: "Tiles R Us AB",
        position: "Senior Web Developer",
        period: "2014-2019",
        description: "Developed and maintained web applications with PHP, MySQL, WordPress, and WooCommerce. Created custom plugins and themes, and integrated with various APIs including Swish and DHL.",
        skills: ["PHP", "MySQL", "WordPress", "WooCommerce", "Custom Plugins & Themes", "Swish API", "DHL API"]
      },
      {
        company: "Facetime Media AB",
        position: "System Developer",
        period: "2013-2014",
        description: "Developed backend systems using PHP and MongoDB. Integrated with Facebook API and created RESTful services. Implemented frontend functionality using AJAX.",
        skills: ["PHP", "MongoDB", "Facebook API", "REST", "AJAX"]
      },
      {
        company: "Stratega Group AB",
        position: "Frontend Developer",
        period: "2013",
        description: "Developed frontend interfaces using HTML, CSS, JavaScript, and SASS. Worked on responsive designs and cross-browser compatibility.",
        skills: ["HTML", "CSS", "JS", "SASS"]
      },
      {
        company: "Computer Sciences Corporation (CSC)",
        position: "GUI Designer",
        period: "2011-2012",
        description: "Designed user interfaces and improved user experience for web applications. Created wireframes and prototypes.",
        skills: ["UI", "UX"]
      },
      {
        company: "Visual Hosting LTD",
        position: "Software Developer",
        period: "2005-2017",
        description: "Worked on web hosting solutions, server management, and software development, ensuring high availability and performance.",
        skills: ["Linux", "Server Management", "Web Hosting", "Performance Optimization"]
      },
      {
        company: "Freelancer & Independent Projects",
        position: "Web Developer",
        period: "2017-Present",
        description: "Developed custom software solutions, built web applications, and contributed to open-source projects.",
        skills: ["Full-stack Development", "Web Applications", "Open-source Contributions"]
      }
    ],
    
    education: [
      {
        institution: "Lexicon",
        degree: "System Developer .NET",
        period: "2021-2022",
        description: "Specialized in .NET development, including C#, ASP.NET, MVC, Azure, and SQL Server."
      },
      {
        institution: "The School of Electrical Engineering, Belgrade",
        degree: "Bachelor's Degree",
        period: "1997-2002"
      }
    ],
    
    projects: [
      {
        title: "E-commerce Platform",
        description: "Custom WooCommerce implementation with multiple payment gateways and shipping integrations.",
        technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "Swish API", "DHL API"],
        image: "ecommerce.jpg"
      },
      {
        title: "Content Management System",
        description: "Tailor-made CMS for a media company with social media integration and analytics.",
        technologies: ["PHP", "Laravel", "MySQL", "REST API", "React"],
        image: "cms.jpg"
      },
      {
        title: "Portfolio Website",
        description: "Responsive personal portfolio with modern design and animations.",
        technologies: ["Next.js", "TypeScript", "SCSS", "Radix UI"],
        image: "portfolio.jpg",
        link: "https://milentijevic.com/",
        github: "github.com/mladjom/portfolio"
      },
      {
        title: "Typography Tool",
        description: "Web-based typography tool for designers and developers.",
        technologies: ["React", "CSS", "JavaScript"],
        image: "typography.jpg"
      }
    ],
    
    languages: [
      { language: "Swedish", proficiency: "Fluent" },
      { language: "English", proficiency: "Fluent" },
      { language: "Serbian", proficiency: "Native" }
    ]
  };
  
  export default portfolioData;