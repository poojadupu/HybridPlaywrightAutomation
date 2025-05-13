const { test, expect } = require("@playwright/test");

test("test1 @reg", () => {
  console.log("my first test");
});

test("test2 @reg @sanity", () => {
  console.log("my second test");
});

test("test3 @sanity", () => {
  console.log("my third test");
});

test("test4 @smoke", () => {
  console.log("my fourth test");
});
