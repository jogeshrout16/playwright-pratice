class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.cartButton = page.locator('[data-test="cart-button"]');
    this.checkoutButton = page.locator('text=Checkout');
  }

  async openCart() {
    await this.cartButton.click();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}

module.exports = { CheckoutPage };
