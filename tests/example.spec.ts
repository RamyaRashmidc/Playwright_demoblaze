import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await expect(page.getByRole('link',{name:/PRODUCT STORE/})).toBeVisible()
  await expect(page.getByRole('link',{name:/Home/})).toBeVisible()
  await expect(page.getByRole('link',{name:/Contact/})).toBeVisible()
  await expect(page.getByRole('link',{name:/About us/})).toBeVisible()
  await expect(page.getByRole('link',{name:/Cart/})).toBeVisible()
  await expect(page.getByRole('link',{name:/Log in/})).toBeVisible()
  await expect(page.getByRole('link',{name:/Sign up/})).toBeVisible()
  await page.waitForSelector("//div[@class='card h-100']")
  const productcount=await page.locator("//div[@class='card h-100']").count()
  console.log(productcount)
});
