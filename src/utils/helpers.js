const { expect } = require('@playwright/test');

async function assertPageTitle(page, expectedText) {
  await expect(page).toHaveTitle(new RegExp(expectedText, 'i'));
}

module.exports = {
  assertPageTitle,
};
