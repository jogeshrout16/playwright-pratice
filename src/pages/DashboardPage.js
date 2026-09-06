class DashboardPage {
  constructor(page) {
    this.page = page;
    this.welcomeMessage = page.locator('text=Welcome');
  }

  async open() {
    await this.page.goto('/dashboard');
  }
}

module.exports = { DashboardPage };
