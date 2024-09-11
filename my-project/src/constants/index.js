import { FaLinkedin } from "react-icons/fa";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Experienced with 2.4 years of focused expertise in manual testing, specializing in Salesforce
and PMS (OKR/KPI) domains. Proficient in developing detailed test cases and strategic test
plans to ensure software quality and reliability. Demonstrated ability to manage client
interactions, address queries, and provide outstanding support. Combines extensive product
knowledge with a deep understanding of business logic, contributing to effective software
testing and high client satisfaction.`;

export const ABOUT_TEXT = `I am a dedicated and versatile QA Engineer with a strong focus on manual testing, specializing in Salesforce and PMS (OKR/KPI) domains. Skilled in developing detailed test plans, executing test cases, and ensuring software quality using tools 
like Postman, Selenium IDE, and JIRA. Adept at identifying and resolving defects, collaborating with cross-functional teams, and providing effective client support. Passionate about continuously improving processes, exploring new technologies, and delivering high-quality software solutions.`;

export const EXPERIENCES = [
  {
    year: "2023(Jan) - Currently Working",
    role: "QA Engineer",
    company: "Datalligence.AI",
    description: `As a Manual Tester specializing in product testing, I play a critical role in ensuring the quality,
functionality, and usability of our OKR software. Through thorough testing and meticulous analysis,
I contribute to delivering a reliable and user-friendly product to our clients.`,
    technologies: ["Selenium IDE", "Datalligence OKR Software", "Wordpress",]
  },
  {
    year: "2021(Dec) - 2022(July)",
    role: "Associate QA Engineer",
    company: "Merfantz Technology",
    description: `
As a QA Engineer, I ensured the successful implementation of Salesforce Cloud and custom workflows by developing test cases and 
executing test scenarios. I conducted API testing for seamless e-commerce data integration with Salesforce, tracked defects in JIRA, 
and provided regular reports. Collaborated with teams to ensure
 quality and performed regression testing to maintain functionality during feature updates.`,
    technologies: ["Salesforce", "Jira", "Asana", "Workbench", "Slack", "Wordpress"],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  FaLinkedin: "https://github.com/shahidyaaser",
  phoneNo: "+91 8610397797",
  email: "shahidyaaser18@gmail.com",
};