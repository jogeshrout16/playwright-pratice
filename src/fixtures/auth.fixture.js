const base = require('@playwright/test');

const test = base.test.extend({
  authUser: async ({}, use) => {
    const user = {
      username: 'admin',
      password: 'admin123',
    };
    await use(user);
  },
});

module.exports = { test, expect: base.expect };
