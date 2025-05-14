const { expect, test } = require("@playwright/test");

test("nested_frames", async ({ page }) => {
  await page.goto("https://demoqa.com/nestedframes");

  const framea = await page.frame({ url: "https://demoqa.com/sampleiframe" });

  const childframes = await framea.childFrames();

  const innerframe_text = await childframes[0]
    .locator("//p[contains(text(),'Child')]")
    .textContent();

  await page.waitForTimeout(3000);

  await console.log(innerframe_text);

  console.log("this is my second commit for master2");
});
