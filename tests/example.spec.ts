import { test, expect } from '@playwright/test';

test('home screen', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await expect(page.getByRole('link',{name:/PRODUCT STORE/})).toBeVisible()
  await expect(page.getByRole('link',{name:/Home/})).toBeVisible()
  await expect(page.getByRole('link',{name:/Contact/})).toBeVisible()
  await expect(page.getByRole('link',{name:/About us/})).toBeVisible()
  await expect(page.getByRole('link',{name:/Cart/})).toBeVisible()
  await expect(page.getByRole('link',{name:/Log in/})).toBeVisible()
  await expect(page.getByRole('link',{name:/Sign up/})).toBeVisible()
  await page.waitForSelector("//div[@class='card h-100']")
  let count = 0;
let allproductname: string[] = [];

while (await page.locator("//button[text()='Next']").isVisible()) {

    const productcount = await page.locator("//div[@class='card h-100']").count();

    const productnames = await page.locator("[class='card-title']").allTextContents();

    allproductname.push(...productnames);

    count = count + productcount;

    await page.locator("//button[text()='Next']").click({ force: true });

    await page.waitForTimeout(1500);
}

// Last page
const productcount = await page.locator("//div[@class='card h-100']").count();

const productnames = await page.locator("[class='card-title']").allTextContents();

allproductname.push(...productnames);

count = count + productcount;

console.log("Total count:", count);
console.log("All product names:", allproductname);

});

