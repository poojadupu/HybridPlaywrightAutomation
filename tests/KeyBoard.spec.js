const { test, expect } = require("@playwright/test");

test("keyboard_test", async ({ page }) => {
  await page.goto("https://gotranscript.com/text-compare");

  await page.type("//textarea[@name='text1']", "Hi I am pooja");

  //ctrl+A

  await page.keyboard.press("Control+A");

  //ctrl+c

  await page.keyboard.press("Control+C");

  //tab

  await page.keyboard.down("Tab");
  await page.keyboard.up("Tab");

  //ctrl+v
  await page.keyboard.press("Control+V");

  await page.waitForTimeout(5000);
});
