const { expect, test } = require("@playwright/test");

test("date_picker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //   await page.locator("//input[@id='datepicker']").fill("12/28/2024");

  //   await page.waitForTimeout(5000);

  //select particuar date from ui
  const Year = "2026";
  const Month = "January";

  await page.locator("//input[@id='datepicker']").click();

  const curr_year = await page.locator(".ui-datepicker-year").textContent();
  const curr_Month = await page.locator(".ui-datepicker-month").textContent();

  while (Year == curr_year && Month == curr_Month) {
    await page.locator("//span[contains(text(),'Next')]").click();
  }

  await page.locator("//a[contains(text(),14)]").click();
  await page.waitForTimeout(5000);
});
