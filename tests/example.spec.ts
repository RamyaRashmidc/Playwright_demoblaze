import { test, expect } from '@playwright/test';
import { DemoBlazeHomePage } from '../page-object/hompage.po';
let demoBalzeHomePage:DemoBlazeHomePage

test.beforeEach('Navigate to url', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  demoBalzeHomePage=new DemoBlazeHomePage(page)
  
});
test('DemoBalzeHomeScreenValidation', async ({ page }) => {
await demoBalzeHomePage.homepageValidation()
await demoBalzeHomePage.productnameandcountvalidation()
  
});

