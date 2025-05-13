const { test, expect } = require("@playwright/test");

test("dropdown", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );

  //default methods to select

  //   await page
  //     .locator("//select[@id='select-demo']")
  //     .selectOption({ label: "Sunday" }); //by label

  //   await page.waitForTimeout(5000);

  //   await page.locator("//select[@id='select-demo']").selectOption("Monday"); //by text
  //   await page.waitForTimeout(5000);
  //   await page
  //     .locator("//select[@id='select-demo']")
  //     .selectOption({ value: "Tuesday" }); //by value
  //   await page.waitForTimeout(5000);

  //   await page.locator("//select[@id='select-demo']").selectOption({ index: 4 }); //by value
  //   await page.waitForTimeout(5000);

  //   //to check number of options

  //   const options = await page.locator("//select[@id='select-demo']/option");

  //   await expect(options).toHaveCount(8);

  //second approach

  //   const options_d = await page.$$("//select[@id='select-demo']/option");

  //   await console.log(options_d.length);
  //   await expect(options_d).toHaveLength(8);

  //to check presence of an element in dropdown

  //   const drop = await page.locator("//select[@id='select-demo']").textContent();
  //   await expect(drop.includes("Saturday")).toBeTruthy();

  //using for loop
  const drop = await page.$$("//select[@id='select-demo']/option");
  let status = false;

  for (const option of drop) {
    const optionText = await option.textContent(); // Fetch text content of each option
    if (optionText.trim() === "Thursday") {
      await page
        .locator("//select[@id='select-demo']")
        .selectOption({ label: "Thursday" });
      status = true;
      break; // Exit loop once the option is found and selected
    }
  }

  expect(status).toBeTruthy();
});

test("multi_select", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );

  await page.selectOption("//select[@id='multi-select']", [
    "California",
    "New Jersey",
    "Texas",
  ]);

  await page.waitForTimeout(5000);

  const options = await page.locator("//select[@id='multi-select']/option");
  await expect(options).toHaveCount(8);

  const options_arr = await page.$$("//select[@id='multi-select']/option");
  await expect(options_arr).toHaveLength(8);

  const text = await page.locator("//select[@id='multi-select']").textContent();
  await expect(text.includes("New York")).toBeTruthy();

  await console.log("sucess");
});
