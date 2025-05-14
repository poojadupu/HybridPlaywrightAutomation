const { test, expect } = require("@playwright/test");

// test.only("test_Annotaions_1", () => {
//   console.log("this is only annotation");
// });

test.skip("test_Annotaions_2", () => {
  console.log("this is skip annotation");
});

test.fixme("test_Annotaions_3", () => {
  console.log("this is fixme annotation");
});

let page;
test("test_Annotaions_4", async ({ browser }) => {
  // test.slow(); it multilplies 3times the timeout
  test.setTimeout(3000);
  page = await browser.newPage();
  await page.goto("https://www.lambdatest.com/selenium-playground/");
  console.log("this is slow  annotation");
  console.log("I am changin on master brnach")
});
