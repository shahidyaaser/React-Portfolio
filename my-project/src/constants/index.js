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
        title: 'Salesforce integration for E-commerce Systems',
        description: 'Salesforce integration for E-commerce Systems',
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
Software: Salesforce

      `
    },
    {
        id: 2,
        // extra: "summa",
        title: 'Salesforce integration for E-commerce Systems',
        description: 'Salesforce integration for E-commerce Systems',
        technologies: ['Jira', 'Incadea', 'Postman'],
        code: `
Project: Salesforce integration for E-commerce Systems
Company: Merfantz Technology
Role: Associate QA Engineer
Duration: Jan 2023 - May 2023

Description:
The Salesforce integration project focused on integrating website data with Salesforce to streamline e-commerce operations. It involved managing vehicle products, quotes, orders, and appointments. This integration enabled efficient tracking of both online and offline sales, ensuring accurate order management. Additionally, financial information was synchronized between Salesforce and Incadea, providing comprehensive financial oversight.

Responsibilities:

Analyzed customer requirements to align testing efforts with business needs.
Developed detailed test scenarios and test cases to cover all aspects of the integration.
Identified, documented, and tracked defects in JIRA, ensuring timely resolution.
Prepared Test Summary Reports and Daily Summary Reports to communicate testing progress and outcomes.
Verified all data conversion rules and calculations to maintain data integrity across systems.
Tools Used:

Test Management: JIRA
API Testing: Postman
Financial Integration: Incadea
Software: Salesforce

      `
    },
    {
        id: 3,
        extra: "summa",
        title: 'SELENIUM With JAVA',
        description: 'Dropdown Automation testing',
        technologies: ['Java', 'Eclipse', 'Maven'],
        code: `
public class Classname {

    private WebDriver driver;
    private WebDriverWait wait;

    @BeforeClass
    public static void setUpBeforeClass() {
        // Setup before all tests
        System.out.println("BeforeClass: Setup before all tests");
    }

    @Before
    public void setUp() {
        // Initialize WebDriver
        driver = new ChromeDriver();
        wait = new WebDriverWait(driver, Duration.ofSeconds(10)); // Initialize WebDriverWait with a timeout of 10 seconds
        // Open the login page
        driver.get("URL");
       // driver.manage().window().maximize();
        System.out.println("BeforeMethod: Successfully Opened the URL Page");
    }



@Test
public void testLoginSuccess() throws Exception {
    try {
        WebElement username = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("username")));
        WebElement password = driver.findElement(By.id("password"));
        WebElement login = driver.findElement(By.xpath("//button[@type='submit']"));

        username.sendKeys("***");
        password.sendKeys("***");
        login.click();
        System.out.println("Test: Testing successful login");

        boolean loginSuccessful = wait.until(ExpectedConditions.urlContains("URL"));
        Assert.assertTrue("Login was not successful", loginSuccessful);

        // Take screenshot on successful login
        File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        Path destination = new File("Put Folder Path").toPath();
        Files.copy(screenshot.toPath(), destination);

        System.out.println("Screenshot saved to " + destination.toString());
    } catch (Exception e) {
        System.err.println("Exception in testLoginSuccess: " + e.getMessage());
        e.printStackTrace();
        throw e;
    }
}

@Test
public void testLoginFailure() throws Exception {
    try {
        WebElement username = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("username")));
        username.sendKeys("");

        WebElement password = driver.findElement(By.id("password"));
        password.sendKeys("***");

        WebElement login = driver.findElement(By.xpath("//button[@type='submit']"));
        login.click();

        System.out.println("Without Username - test passed");

        WebElement errorMessage = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='ant-form-item-explain-error']")));
        String errorMessageText = errorMessage.getText();
        System.out.println("Error message displayed: " + errorMessageText); 
        
        String expectedErrorMessage = "Required";
        
        Assert.assertEquals("Error message does not match the expected value.", expectedErrorMessage, errorMessageText);

        // Take screenshot
        File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        File destination = new File("Put Folder Path");
        Files.copy(screenshot.toPath(), destination.toPath());

        System.out.println("Screenshot saved to " + destination.getPath());
        
    } catch (Exception e) {
        System.err.println("Exception in testLoginFailure: " + e.getMessage());
        e.printStackTrace();
        throw e;
    }
}


@Test
public void testLoginFailure2() throws Exception {
    try {
        WebElement username = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("username")));
        username.sendKeys("***");

        WebElement password = driver.findElement(By.id("password"));
        password.sendKeys("");

        WebElement login = driver.findElement(By.xpath("//button[@type='submit']"));
        login.click();

        System.out.println("Without Password - test passed");

        WebElement errorMessage = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='ant-form-item-explain-error']")));
        String errorMessageText = errorMessage.getText();
        System.out.println("Error message displayed: " + errorMessageText); 
        
        String expectedErrorMessage = "Required";
        
        Assert.assertEquals("Error message does not match the expected value.", expectedErrorMessage, errorMessageText);

        // Take screenshot
        File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        File destination = new File("Put Folder Path");
        Files.copy(screenshot.toPath(), destination.toPath());

        System.out.println("Screenshot saved to " + destination.getPath());
        
    } catch (Exception e) {
        System.err.println("Exception in testLoginFailure2: " + e.getMessage());
        e.printStackTrace();
        throw e;
    }
}


@Test
public void testLoginFailure3() throws Exception {
    try {
        WebElement username = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("username")));
        username.sendKeys("***");

        WebElement password = driver.findElement(By.id("password"));
        password.sendKeys("***");

        WebElement login = driver.findElement(By.xpath("//button[@type='submit']"));
        login.click();

        WebElement errorMessage = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='ant-notification-notice-message']")));
        String errorMessageText = errorMessage.getText();
        System.out.println("Incorrect password - test passed");

        String expectedErrorMessage = "Username or Password Invalid";
        
        Assert.assertEquals("Error message does not match the expected value.", expectedErrorMessage, errorMessageText);

        // Take screenshot
        File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        File destination = new File("Put Folder Path");
        Files.copy(screenshot.toPath(), destination.toPath());

        System.out.println("Screenshot saved to " + destination.getPath());
        
    } catch (Exception e) {
        System.err.println("Exception in testLoginFailure3: " + e.getMessage());
        e.printStackTrace();
        throw e;
    }
}




@Test
public void testLoginFailure4() throws Exception {
    try {
        WebElement username = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("username")));
        username.sendKeys("");

        WebElement password = driver.findElement(By.id("password"));
        password.sendKeys("");

        WebElement login = driver.findElement(By.xpath("//button[@type='submit']"));
        login.click();

        WebElement errorMessage = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='ant-form-item-explain-error']")));
        String errorMessageText = errorMessage.getText();
        System.out.println("Without Username and Password - test passed");
        
        String expectedErrorMessage = "Required";
        
        Assert.assertEquals("Error message does not match the expected value.", expectedErrorMessage, errorMessageText);

        // Take screenshot
        File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        File destination = new File("Put Folder Path");
        Files.copy(screenshot.toPath(), destination.toPath());

        System.out.println("Screenshot saved to " + destination.getPath());
        
    } catch (Exception e) {
        System.err.println("Exception in testLoginFailure4: " + e.getMessage());
        e.printStackTrace();
        throw e;
    }
}


    @After
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
        System.out.println("AfterMethod: Teardown after each test");
    }

    @AfterClass
    public static void tearDownAfterClass() {
        System.out.println("AfterClass: Teardown after all tests");
    }
}

      `
    }
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
