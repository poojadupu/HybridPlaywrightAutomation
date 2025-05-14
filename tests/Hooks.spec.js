const { expect, test } = require("@playwright/test");

let page;
test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("https://www.lambdatest.com/selenium-playground/");
});

test("Auto-healing", async () => {
  await page.waitForTimeout(2000);

  await page.click("//a[contains(text(),'Auto Healing')]");
  await page.type("#username", "hello");
  await page.type("#password", "hello");
  await page.locator("//button[contains(text(),'Submit')]").click();
});

test("form_submit", async () => {
  await page.click("//a[contains(text(),'Ajax Form Submit')]");
  await page.type("#title", "Hi");
  await page.type("#description", "Hi");
  await page.locator("#btn-submit").click();
});

test.afterEach(async () => {
  await page.goBack();
});
