import { test, expect } from "@playwright/test";

test("input_valid", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/");

  await page.click("//a[contains(text(),'Auto Healing')]");

  await expect(await page.getByPlaceholder("username")).toBeEnabled();
  await expect(await page.getByPlaceholder("username")).toBeVisible();
  await expect(await page.getByPlaceholder("username")).toBeEditable();
  await expect(await page.getByPlaceholder("username")).toBeEmpty();

  await page.getByPlaceholder("username").fill("pooja");
});

test("checkbox_valid", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/");

  await page.click("//a[contains(text(),'Checkbox Demo')]");

  await expect(await page.getByLabel("Option 1")).toBeEnabled();
  await expect(await page.getByLabel("Option 1").isChecked()).toBeFalsy();
  await page.getByLabel("Option 1").click();
  await expect(await page.getByLabel("Option 1").isChecked()).toBeTruthy();

  const option3 = page.locator(
    "(//label[contains(text(),'Option 3')]/preceding-sibling::input)[1]"
  );
  await expect(option3).toBeDisabled();
});

test("multi_check", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/");
  await page.click("//a[contains(text(),'Checkbox Demo')]");
  const checkbox_locators = [
    "//input[contains(@id,'ex1-check1')]",
    "//input[contains(@id,'ex1-check2')]",
    "(//input[contains(@id,'ex1-check3')])[1]",
    "(//input[contains(@id,'ex1-check3')])[2]",
  ];
  for (const loc of checkbox_locators) {
    await page.click(loc);
    await expect(await page.locator(loc)).toBeChecked();
  }
});
