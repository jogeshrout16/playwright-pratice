# Playwright Project

This project is set up using Playwright with JavaScript.

## Project structure

```text
playwright-project/
├─ tests/
│  ├─ example.spec.js
│  ├─ login.spec.js
│  └─ checkout.spec.js
├─ pages/
│  ├─ LoginPage.js
│  ├─ DashboardPage.js
│  └─ CheckoutPage.js
├─ utils/
│  ├─ helpers.js
│  └─ config.js
├─ fixtures/
│  ├─ auth.fixture.js
│  └─ userData.js
├─ dataset/
│  ├─ users.json
│  ├─ products.json
│  └─ testData.js
├─ reports/
│  └─ html/
├─ playwright.config.js
├─ package.json
├─ .gitignore
├─ README.md
└─ test-results/
```

## Install dependencies

```bash
npm install
```

## Run tests

```bash
npx playwright test
```

## Open HTML report

```bash
npx playwright show-report reports/html
```
