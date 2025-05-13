exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.products = "//*[@id='tbodyid']/div/div/div/h4/a";
    this.addtocart = "//a[contains(text(),'Add to cart')]";
    this.cart = "//a[@id='cartur']";
  }
  //textcontent-page.locator-forloop
  async addproducts(productname) {
    const produs = await this.page.locator(this.products);

    for (let i = 0; i < produs.count(); i++) {
      const product = produs.nth(i);
      if (productname === (await product.textContent())) {
        await product.click();
      }
    }
  }

  async addtocartpage() {
    await this.page.locator(this.addtocart).click();
    return true;
  }

  async gotoCart() {
    await this.page.locator(this.cart);
  }
};
