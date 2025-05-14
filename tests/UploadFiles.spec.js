const { test, expect } = require("@playwright/test");

test("upload-files", async ({ page }) => {
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

  const choose = await page.locator("//input[@id='filesToUpload']");

  //   await choose.setInputFiles("tests\\UploadFiles\\testFile1.pdf");
  //   await page.waitForTimeout(5000);

  //select multiple files

  await choose.setInputFiles([
    "tests\\UploadFiles\\testFile1.pdf",
    "tests\\UploadFiles\\testFile2.pdf",
  ]);
  await page.waitForTimeout(5000);
  //remove files

  await choose.setInputFiles([]);

  await page.waitForTimeout(5000);
  expect(await page.locator("//ul[@id='fileList']/li")).toHaveText(
    "No Files Selected"
  );
  await page.waitForTimeout(5000);
});
