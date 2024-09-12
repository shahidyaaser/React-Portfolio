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
    title: 'SELENIUM With JAVA',
    description: 'Login Page Automation using Selenium with Java',
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
  },
  {
    title: 'SELENIUM With JAVA',
    description: 'How to open DOM page using Actions',
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
  },
  {
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