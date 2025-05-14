const { test, expect } = require("@playwright/test");

test("Assertion", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register");

  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  const loc = await page.locator("//img[@alt='nopCommerce demo store']");
  await expect(loc).toBeVisible();

  const enab_btn = await page.locator("//button[@id='register-button']");
  await expect(enab_btn).toBeEnabled();

  //toBedisabled()

  const check = await page.locator("//input[@id='gender-male']");
  await check.click();
  await expect(check).toBeChecked();

  const input = await page.locator("//input[@id='FirstName']");

  await expect(input).toHaveAttribute("type", "text");

  await input.fill("pooja");

  await expect(input).toHaveValue("pooja");

  const dropdown = await page.locator(
    "//select[@name='DateOfBirthMonth']/option"
  );
  await expect(dropdown).toHaveCount(13);

  const text = await page.locator(
    "//strong[contains(text(),'Your Personal Details')]"
  );

  await expect(text).toHaveText("Your Personal Details");

  await expect(text).toContainText("Personal");
});
