const { test, expect } = require("@playwright/test");

test("types of Locating Elements", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/");
  //by xpath
  //await page.locator("//a[contains(text(),'Ajax Form Submit')]").click();
  await page.click("//a[contains(text(),'Ajax Form Submit')]");
  //by property

  await page.waitForSelector("#title");
  await page.locator("id=title").fill("pooja");

  //by css
  await page.fill(
    "textarea#description",
    "This is my first playwright project"
  );

  //await page.type("textarea#description","This is my first playwright project");

  await page.click("//input[@id='btn-submit']");

  const locator = await page.locator("//div[@id='submit-control']");

  await expect(locator).toHaveText("Ajax Request is Processing!");
});

test("select multiple ele", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/");

  const links = await page.$$("//li[@class='pt-10']/a");
  for (const hyper of links) {
    const url = await hyper.getAttribute("href");
    const inner_text = await hyper.textContent();
    await console.log(url);
    await console.log(inner_text);
  }
});

//built-in locators
test("built", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/");

  const image = await page.getByAltText("LambdaTest Logo");

  await expect(image).toBeVisible();

  await page.click("//a[contains(text(),'Auto Healing')]");
  const label = await page.locator('label:has-text("Username*")').textContent();
  console.log(label);

  await page.getByTitle("Selenium Grid Online | Run Selenium Test On Cloud");

  await page.getByPlaceholder("username").fill("pooja");
  await page.getByRole("textbox", { name: "Password" }).fill("pooja");
  const button_ele = await page.getByRole("button", { name: "submit" });
  await button_ele.click();

  const msg = await page.getByText("Login Successful");
  await expect(msg).toHaveText("Login Successful");
});
