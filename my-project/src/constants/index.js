import { FaLinkedin } from "react-icons/fa";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Experienced with 2.4 years of expertise in ensuring software quality across Salesforce and PMS (OKR/KPI) domains. Adept at developing comprehensive test strategies and detailed test cases that align with business requirements, ensuring software reliability and performance. Known for blending deep product knowledge with a strong grasp of business logic to deliver high quality results and enhance client satisfaction.`;

export const ABOUT_TEXT = `I am a dedicated QA Engineer with 2.4 years of experience, driven by a passion for learning and adapting to new technologies. My career goal is to continuously upskill by exploring new products, features, and AI advancements, ensuring I stay at the forefront of the industry.`;
export const ABOUT_TEXT_1 = `-I excel in quickly understanding complex business logic, solving problems efficiently, and collaborating effectively within teams. I take pride in my ability to independently manage product testing, ensuring quality and performance as a single point of responsibility.`;
export const ABOUT_TEXT_2 = `-Beyond my professional life, I am an avid sports enthusiast and a passionate cricket player. Whether it's on the field or in my career, I always bring a spirit of teamwork, resilience, and enthusiasm to everything I do. `;


export const EXPERIENCES = [
    {
        year: "2023 (Jan) - Currently Working",
        role: "QA Engineer",
        company: "Datalligence.AI",
        description: `As a QA Engineer, I take full responsibility for testing the entire OKR software, ensuring its quality, functionality, and usability. I manage the complete testing lifecycle, from identifying issues to verifying resolutions, and collaborate closely with the development team to deliver a seamless and user-friendly product. Additionally, I play a pivotal role in managing customer success, ensuring our clients have a positive experience with the software and addressing any concerns with efficiency and expertise.`,
        technologies: ["Selenium IDE", "Datalligence Software", "Wordpress", "Zoho Bug Tracker"]
    },
    {
        year: "2021 (Dec) - 2022 (July)",
        role: "Associate QA Engineer",
        company: "Merfantz Technology",
        description: `
As a Associate QA Engineer, I managed both existing and new projects, ensuring the successful implementation of Salesforce Cloud solutions and custom workflows. I developed and executed comprehensive test cases and scenarios to validate functionality and integration. My responsibilities included conducting API testing for seamless e-commerce data integration with Salesforce, tracking defects in JIRA, and providing regular progress reports. I actively participated in new project sprints and daily scrum meetings, collaborating closely with cross-functional teams to maintain quality standards. I also performed regression testing to ensure the stability and performance of the software during feature updates.`,
        technologies: ["Salesforce", "Jira", "Asana", "Workbench", "Slack", "Wordpress", "Postman"],
    },

];

export const PROJECTS = [

    {
        id: 1,
        // extra: "summa",
        title: 'Product Testing',
        description: 'Datalligence OKR software testing',
        technologies: ['Datalligence', 'Selenium IDE', 'WordPress'],
        code: `
Project: Datalligence OKR Testing
Company: Datalligence
Role: QA Engineer

Description:
As the sole QA Engineer for Datalligence’s OKR software, I am responsible for 
ensuring the product's quality, functionality, and usability. Through rigorous 
testing and detailed analysis, I help deliver a robust and user-friendly product 
to our clients. Utilizing Selenium IDE, I perform quick and efficient validations 
of critical functionalities, enhancing the testing process. In addition to testing, 
I manage customer success, providing support and conducting product walkthroughs to 
ensure client satisfaction and effective use of the software.

Responsibilities:

Developed and executed comprehensive test plans and test cases to validate the 
performance and functionality of the OKR software.Identified, documented, and 
tracked software defects using Zoho bug tools, maintaining accurate records and 
detailed descriptions of issues encountered during testing. Collaborated with 
cross-functional teams, including developers and product managers, to understand 
requirements and user scenarios for effective test planning and execution.Conducted 
manual exploratory testing to identify potential issues and usability concerns, 
improving overall user experience. Performed regression testing to verify that new 
features and enhancements did not impact existing functionality. Participated in 
requirement analysis and review sessions, providing valuable feedback from a QA 
perspective to improve product quality. Acted as a Customer Support Specialist, 
managing client relations by resolving queries, conducting weekly catch-ups, and 
providing detailed product walkthroughs.Proactively addressed client inquiries and 
feedback through various communication channels, ensuring high levels of customer 
satisfaction and facilitating feature enhancements based on user input.

Tools Used:
Test Management: Zoho Bug Tools, Excel
Automation Testing: Selenium IDE
Software: Datalligence OKR/KPI

      `
    },
    {
        id: 2,
        // extra: "summa",
        title: 'Salesforce Integration',
        description: 'Salesforce Integration for E-commerce Systems',
        technologies: ['Jira', 'Incadea', 'Postman'],
        code: `
Project: Salesforce integration for E-commerce Systems
Company: Merfantz Technology
Role: Associate QA Engineer

Description:
The Salesforce integration project focused on integrating website data with
Salesforce to streamline e-commerce operations. It involved managing vehicle
products, quotes, orders, and appointments. This integration enabled efficient
tracking of both online and offline sales, ensuring accurate order management.
Additionally, financial information was synchronized between Salesforce and 
Incadea, providing comprehensive financial oversight.

Responsibilities:
Analyzed customer requirements to align testing efforts with business needs.
Developed detailed test scenarios and test cases to cover all aspects of the
integration. Identified, documented, and tracked defects in JIRA, ensuring 
timely resolution. Prepared Test Summary Reports and Daily Summary Reports 
to communicate testing progress and outcomes. Verified all data conversion
rules and calculations to maintain data integrity across systems.

Tools Used:
Test Management: JIRA
API Testing: Postman
Financial Integration: Incadea
Platform: Salesforce, Magento

      `
    },

    {
        id: 3,
        // extra: "summa",
        title: 'Salesforce Testing',
        description: 'Salesforce Platform Testing for Business Requirements',
        technologies: ['Asana', 'Slack', 'Salesforce'],
        code: `
Project: Salesforce Testing
Company: Merfantz Technology
Role: Associate QA Engineer

Description:
This project focused on testing the Salesforce platform to ensure it met the
specified business requirements and developments. The objective was to validate 
both Salesforce Classic and Lightning interfaces, ensuring their functionality 
and usability. I collaborated with the development team to address necessary 
changes and enhancements tailored to the client's business needs. Data validation 
and manipulation were carried out using Workbench and the Salesforce Developer 
Console.

Responsibilities:

Tested Salesforce platform developments based on the given business requirements.
Conducted thorough testing on both Salesforce Classic and Lightning interfaces to 
ensure seamless functionality. Reported and tracked bugs using Asana, ensuring 
timely communication and resolution. Documented test cases and bugs in Excel for 
detailed tracking and reporting. Queried and validated data using Workbench and 
the Salesforce Developer Console.

Tools Used:
Test Management: Asana, Excel
Communication: Slack
Platform: Salesforce (Classic and Lightning)
Data Querying: Workbench, Developer Console

      `
    }
];

export const CONTACT = {
    FaLinkedin: "https://github.com/shahidyaaser",
    phoneNo: "+91 8610397797",
    email: "shahidyaaser18@gmail.com",
};
