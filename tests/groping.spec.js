const { test, expect } = require("@playwright/test");

test.beforeAll(() => {
  console.log("I am excuting before all test methods of current js");
});

test.beforeEach(() => {
  console.log("I am excuting before each test methods of current js");
});

test.afterAll(() => {
  console.log("I am excuting after all test methods of current js");
});

test.afterEach(() => {
  console.log("I am excuting after each test methods of current js");
});

test.describe.only("grouping_1", () => {
  test("test1", () => {
    console.log("my first test");
  });

  test("test2", () => {
    console.log("my second test");
  });
});

test.describe.skip("grouping_2", () => {
  test("test3", () => {
    console.log("my third test");
  });

  test("test4", () => {
    console.log("my fourth test");
  });
});
