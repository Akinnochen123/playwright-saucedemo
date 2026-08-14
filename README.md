# SauceDemo Playwright Automation

## Project Description

This project contains an automated UI test suite for the SauceDemo application using Microsoft Playwright. The framework follows the Page Object Model (POM) design pattern to improve maintainability and reusability.

## Test Scenarios

- Valid Login
- Invalid Login
- Product Interaction
- Product Sorting
- Checkout

## Technologies

- JavaScript
- Playwright
- Node.js

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

## Run Tests

```bash
npx playwright test
```

Run specific test

```bash
npx playwright test tests/login.spec.js
```

Run headed

```bash
npx playwright test --headed
```

## Generate Report

```bash
npx playwright test --reporter=html
```

Open report

```bash
npx playwright show-report
```

## Project Structure

```
pages/
tests/
playwright.config.js
README.md
```

## Design Pattern

This framework uses the **Page Object Model (POM)** to separate page interactions from test logic, improving code readability, maintainability, and scalability.

## Assertions

The test suite validates:

- Successful login
- Failed login error message
- URL verification
- Product visibility
- Cart updates
- Product sorting
- Successful checkout
- Order confirmation