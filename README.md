# QA Automation & Testing – Dealls

This repository contains the automation scripts and documentation for the QA challenges, including:

## Challenges Covered

### Challenge 1: Automation Testing (Technical Skills)

Includes:
- Functional, UI, API, Integration, Security & E2E test strategy
- Test environments: Dev, UAT, Prod
- High-level test scenarios for a mentor-mentee platform

📄 Full test strategy → [`docs/test-strategy.md`](docs/test-strategy.md)  
📄 Scenarios → [`docs/test-scenarios.md`](docs/test-scenarios.md)

### Challenge 2: UI Automation - Web Scenarios
I'm still in the process of learning and growing my skills in automation testing.

For this challenge, I used Playwright with JavaScript to automate one of the test scenarios — Authentication & User Access.
I structured my scripts using the Playwright Test Runner, utilizing describe blocks to ensure clarity and modularity.

This project contains end-to-end (E2E) test cases using Playwright to validate the registration and login flows for Mentee and Mentor users on a job-seeking platform.

Full automation code: ['tests/dealls.test.js'] (tests/dealls.test.js)

**✅  Features Tested**

    🧍‍♂️  Mentee Flows
        1. Register with valid credentials
        2. Register with already used email (expect failure)
        3. Log in with valid credentials
        4. Log in with invalid credentials (expect failure)
        5. Reset password flow

    🧑‍🏫 Mentor Flows
        1. Log in with valid credentials
        2. Log in with invalid credentials
        3. Reset password flow
        
### Challenge 3: Bug Investigation

**Bug Title:** Links Redirect to Wrong Domain (*.run.app)  
📄 Bug report → [`docs/bug-report.md`](docs/bug-report.md)  
🎥 [Recording Screenshot](https://jam.dev/c/7dc854e5-6912-4e1d-b625-1403308a6fcc)



## 🚀 Getting Started

    1.  Clone the repository
        git clone https://github.com/your-username/your-repo.git
        cd your-repo

    2.  Install dependencies
        npm install

    3.  Run tests
        npx playwright test

        To run in headed mode:
        npx playwright test --headed

        To run a specific test:
        npx playwright test tests/registration-login.spec.ts -g "Mentee can register with valid credentials"

**🛠️  Configuration**

    You can configure base URL, browsers, reporters, etc., in playwright.config.ts.
    Example:
    use: {
        baseURL: 'https://your-frontend-domain.com',
        browserName: 'chromium',
    }

**🔒  Notes**

    1. Make sure the test data for register (e.g. name, phone, email) is unique for every run or reset after each test.
    2. Avoid using production data—prefer staging environments.
    3. The test uses hardcoded credentials for login flows. Store secrets in environment variables for secure testing in CI/CD.

**🧩  Future Improvements**

    1. Modularize helpers into a utils/ or page-objects/ folder
    2. Add test reporting (HTML, Allure)
    3. Integrate with CI tools (e.g. GitHub Actions, GitLab CI, Jenkins)

# 👤  Author

    Nispi Amalia Adila - nispiamalia10@gmail.com
    Feel free to reach out for improvements or questions.


