const { test, expect } = require("@playwright/test");

test("frames", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/iframe-demo/"
  );

  const frames = await page.frames();
  await console.log(frames.length);
  //await expect(frames).toHaveLength(8);

  //to handle frame -shou go with name or url

  // const frame_loc=await page.frame('name');

  //   const frame_loc = await page.frame({
  //     url: "https://www.lambdatest.com/selenium-playground/iframe-demo/contant",
  //   });

  //   await frame_loc.locator("//div[@class='rsw-ce']").fill("i am inside frame");

  //frame locator
  await page
    .frameLocator("//iframe[@id='iFrame1']")
    .locator("//div[@class='rsw-ce']")
    .fill("i am pooja");

  await page.waitForTimeout(5000);
});
