const { test, expect } = require("@playwright/test");

test("mouse_hover", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/hover-demo");
  const ele = await page.locator(
    "//*[@id='__next']/section[3]/div/div/div/div/div/div/div/div[5]/div/img"
  );

  await ele.hover();

  await page.waitForTimeout(5000);
});

test("right_click", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/context-menu"
  );
  //enable alert

  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("You selected a context menu");
    await dialog.accept();
  });
  const ele = page.locator("//div[@id='hot-spot']");

  await ele.click({ button: "right" });

  await page.waitForTimeout(5000);
});

test("double_click", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const btn = await page.locator("//button[@ondblclick='myFunction1()']");

  await btn.dblclick();

  const filed_value = await page.locator("//input[@id='field2']");
  await expect(filed_value).toHaveValue("Hello World!");
});

test("drag_drop", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/drag-and-drop-demo"
  );

  const src = await page.locator("//span[contains(text(),'Draggable 1')]");
  const des = await page.locator("//div[@id='mydropzone']");

  // await src.hover();
  // await page.mouse.down();

  // await des.hover();
  // await page.mouse.up();
  // await page.waitForTimeout(5000);

  await src.dragTo(des);
  await page.waitForTimeout(5000);
});
