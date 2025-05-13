const { expect, test } = require("@playwright/test");

test("screenShot", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground");

  await page.screenshot({
    path: "tests\\Screenshots\\" + Date.now() + "defaultScreenshot.png",
  });
});

test("screenShot_fullpage", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground");

  await page.screenshot({
    path: "tests\\Screenshots\\fullPageScreenshot.png",
    fullPage: true,
  });
});

test("screenShot_eleimage", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground");
  const ele = await page.locator("//a[contains(text(),'Ajax Form Submit')]");
  await ele.screenshot({
    path: "tests\\Screenshots\\ElementScreenshot.png",
  });
});
