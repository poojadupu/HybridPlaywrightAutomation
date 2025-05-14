const { expect, test } = require("@playwright/test");

test("nested_frames", async ({ page }) => {
  await page.goto("https://demoqa.com/nestedframes");

  const frame = await page.frame({ url: "https://demoqa.com/sampleiframe" });

  const childframes = await frame.childFrames();

  const innerframe_text = await childframes[0]
    .locator("//p[contains(text(),'Child')]")
    .textContent();

  await page.waitForTimeout(3000);

  await console.log(innerframe_text);
});
