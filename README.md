# dealls-playwright-e2e-tests

This project contains end-to-end (E2E) test cases using Playwright to validate the registration and login flows for Mentee and Mentor users on a job-seeking platform.

📁  Project Structure

    ├── tests/
    │   └── dealls.test.js        # Main test file with all scenarios
    ├── playwright.config.js      # Playwright config
    ├── package.json
    └── README.md

✅  Features Tested

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

🚀  Getting Started

    1.  Clone the repository
        git clone https://github.com/your-username/your-repo.git
        cd your-repo

    2. Install dependencies
        npm install

    3. Run tests
        npx playwright test

        To run in headed mode:
        npx playwright test --headed

        To run a specific test:
        npx playwright test tests/registration-login.spec.ts -g "Mentee can register with valid credentials"

🛠️  Configuration

    You can configure base URL, browsers, reporters, etc., in playwright.config.ts.
    Example:
    use: {
        baseURL: 'https://your-frontend-domain.com',
        browserName: 'chromium',
    }

🔒  Notes

    1. Make sure the test data (e.g. name, phone, email) is unique for every run or reset after each test.
    2. Avoid using production data—prefer staging environments.
    3. The test uses hardcoded credentials for login flows. Store secrets in environment variables for secure testing in CI/CD.

🧩  Future Improvements

    1. Modularize helpers into a utils/ or page-objects/ folder
    2. Add test reporting (HTML, Allure)
    3. Integrate with CI tools (e.g. GitHub Actions, GitLab CI, Jenkins)

👤  Author

    Nispi Amalia Adila - nispiamalia10@gmail.com
    Feel free to reach out for improvements or questions.


