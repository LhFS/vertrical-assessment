# Vertrical Assessment

This repository contains automated tests for both UI and API using Cypress with TypeScript and Cucumber. Below are instructions on how to run the tests and additional information about the project structure.

## How to Run Cypress Tests

To run the Cypress tests, follow these steps:

1. **Install Dependencies**: First, ensure you have all the necessary dependencies installed by running:

   ```bash
   npm install
   ```

2. **Open Cypress UI or Run Tests in CLI**: After installing the dependencies, you can either open the Cypress UI or run all tests from the command line.

   - To open the Cypress UI, use the following command:

     ```bash
     npx cypress open
     ```

   - To run all tests in CLI mode, use:

     ```bash
     npx cypress run
     ```

## Project Structure

### UI Tests

The UI tests were designed using Cypress with TypeScript and Cucumber. Key directories and files related to UI testing include:

- **`cypress/features`**: Contains all feature files with scenarios written in Gherkin syntax.
- **`cypress/common-ui`**: Contains step definitions for UI tests.

### API Tests

The API tests were also designed using Cypress with TypeScript. You can run the API tests using the same commands mentioned above. The tests are organized into the following directories:

- **`cypress/common-API`**: Contains API test suites.

## Additional Information

In addition to automated tests, this repository also includes manual test specifications for the prototype. You can find them in the `test-scenarios` folder.
