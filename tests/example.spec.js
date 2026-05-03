const { test, expect } = require('@playwright/test');

test('button click updates text', async ({ page }) => {
  await page.goto('file://' + __dirname + '/../index.html');

  await page.click('text=Click Me');
  await expect(page.locator('#text')).toHaveText('Updated!');
});