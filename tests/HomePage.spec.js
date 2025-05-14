const { test, expect } = require("@playwright/test");

test("Homepage title check", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/");
  const title_page = page.title();
  console.log(title_page);
  await expect(page).toHaveTitle(
    "Selenium Grid Online | Run Selenium Test On Cloud"
  );

  await expect(page).toHaveURL(
    "https://www.lambdatest.com/selenium-playground/"
  );

  const page_url = page.url();
  console.log(page_url);

  await page.close();
});
