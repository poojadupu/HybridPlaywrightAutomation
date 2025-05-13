const { test, expect } = require("@playwright/test");
const { LoginPage } = require("./pages/LoginPage");
const { HomePage } = require("./pages/HomePage");

test("this my POM test", async ({ page }) => {
  //login

  const loginpageob = new LoginPage(page);
  await loginpageob.loginpage();
  await loginpageob.clickonLogin("pavanol", "test@123");
  await page.waitForTimeout(5000);

  //home

  const homepageobj = new HomePage(page);
  await homepageobj.addproducts("Nexus 6");
  await page.waitForTimeout(5000);

  page.on("dialog", async ({ dialog }) => {
    await expect(dialog.message()).toContain("Product added.");
    await dialog.accept();
  });
  const value = await homepageobj.addtocartpage();
  await expect(value).toBeTruthy();

  await homepageobj.gotoCart();
});
