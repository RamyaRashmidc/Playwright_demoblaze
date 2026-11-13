import { test, expect } from '@playwright/test';
import { DemoBlazeHomePage } from '../page-object/hompage.po';
import { ProductPage } from '../page-object/productpage.po';
let demoBalzeHomePage:DemoBlazeHomePage
let productpage:ProductPage

test.beforeEach('Navigate to url', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  demoBalzeHomePage=new DemoBlazeHomePage(page)
  productpage=new ProductPage(page)
  
});
test('DemoBalzeHomeScreenValidation', async ({ page }) => {
await demoBalzeHomePage.homepageValidation()
await demoBalzeHomePage.productnameandcountvalidation()
await demoBalzeHomePage.navigatetoproductpage('Samsung galaxy s6')
await productpage.productpagevalidation()
await expect(productpage.actualprodname).toHaveText('Samsung galaxy s6')
await expect(productpage.actualprodprice).toContainText('$360')
  
});

