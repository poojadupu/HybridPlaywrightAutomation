const { test, expect } = require("@playwright/test");

test("dropdown_jq", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo"
  );

  await page.locator("(//span[@role='combobox'])[1]").click();

  const options = await page.locator("//ul[@id='select2-country-results']/li");
  await expect(options).toHaveCount(11);

  //muti select drop-down

  await page.locator("//input[@role='textbox']");

  const multi_drop = await page.$$("//ul[@id='select2-ccg7-results']/li");
  let status = false;

  for (const option of multi_drop) {
    const option_val = option.textContent();

    if (option_val.trim() == "Arizona" || option_val.trim() == "Georgia") {
      await option.click();
      status = true;
    }
  }

  expect(status).toBeTruthy();
});

//$$-array of webhandles--cannot be used tobedisabled(it expects locator obJ)
//locator-return loctors--cannot be used forloop(it expects a array elements in the form of iterator)

test("disabled_drop", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo"
  );

  await page.locator("(//span[@role='combobox'])[3]").click();

  const options = await page.$$("//ul[contains(@id,'select2')]/li");
  var i = 0;
  // await expect(options).toHaveCount(6);

  for (const optione of options) {
    const stat = await optione.getAttribute("aria-disabled");
    const text = await optione.textContent();

    await console.log(stat);

    await page.waitForTimeout(5000);

    if (stat == "true") {
      i++;
    } else if (text == "Northern Mariana Islands") {
      const text = await optione.textContent();
      await optione.click();
    }
  }

  console.log(i);
});

test("search_drop", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo"
  );

  await page.locator("(//span[@role='combobox'])[1]").click();
  await page.locator("(//input[@class='select2-search__field'])[2]").click();

  await page
    .locator("(//input[@class='select2-search__field'])[2]")
    .fill("Hong");

  await page.locator("//ul[@id='select2-country-results']/li").click();
});
