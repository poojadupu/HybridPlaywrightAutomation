const { expect, test } = require("@playwright/test");

test("pagination_table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //no of columns
  const table = await page.locator("//table[@id='productTable']");

  const columns = await table.locator("//thead/tr/th");

  await expect(columns).toHaveCount(4);

  const rows = await table.locator("//tbody/tr");

  await expect(rows).toHaveCount(5);

  //to validate text of particulat row

  //   async function selectcheckbox({ page }, row, name) {
  //     const matchedrow = await row.filter({
  //       has: page.locator("td"),
  //       hasText: name,
  //     });
  //     await matchedrow.locator("input").check();
  //   }

  //   await selectcheckbox({ page }, rows, "Smartphone");

  //   await selectcheckbox({ page }, rows, "Smartwatch");
  // });

  //to print all product details using loop

  const pages = await page.locator("//ul[@id='pagination']/li/a");

  let k = 0;

  while (k < (await pages.count())) {
    await pages.nth(k).click();
    await console.log("page:" + k);
    for (let i = 0; i < (await rows.count()); i++) {
      const row = await rows.nth(i);

      const tds = await row.locator("td");

      for (let j = 0; j < (await columns.count()) - 1; j++) {
        console.log(await tds.nth(j).textContent());
      }
    }
    k++;
  }
});
