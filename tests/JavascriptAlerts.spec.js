const { test, expect } = require("@playwright/test");

test("alert", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );

  //before clicking on the alert we have to enable the alert

  page.on("dialog", async (dialog) => {
    await expect(dialog.message()).toContain("I am an alert box!");
    await expect(dialog.type()).toContain("alert");
    await dialog.accept();
  });

  await page.locator("(//button[contains(text(),'Click Me')])[1]").click();
});

test("confirm", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );

  //enable alert

  page.on("dialog", async (dialog) => {
    await expect(dialog.type()).toContain("confirm");
    await expect(dialog.message()).toContain("Press a button!");
    await dialog.dismiss();
  });

  await page.locator("(//button[contains(text(),'Click Me')])[2]").click();
  await page.waitForTimeout(3000);
});

test("promt", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );

  page.on("dialog", async (dialog) => {
    await expect(dialog.type()).toContain("prompt");
    await expect(dialog.message()).toContain("Please enter your name");
    await expect(dialog.defaultValue()).toContain("Enter name");

    await dialog.defaultValue("pooja");

    await dialog.accept();
  });

  await page.locator("(//button[contains(text(),'Click Me')])[3]").click();
});
