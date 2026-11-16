import { test, expect } from '@playwright/test';
import { DemoBlazeHomePage } from '../page-object/hompage.po';
import { ProductPage } from '../page-object/productpage.po';
import { CartPage } from '../page-object/cart.po';
import { ConfirmationPage } from '../page-object/confirmationpage.po';
let demoBalzeHomePage:DemoBlazeHomePage
let productpage:ProductPage
let cartpage:CartPage
let confirmationpage:ConfirmationPage

test.beforeEach('Navigate to url', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  demoBalzeHomePage=new DemoBlazeHomePage(page)
  productpage=new ProductPage(page)
  cartpage=new CartPage(page)
  confirmationpage=new ConfirmationPage(page)
  
});
test('DemoBalzeHomeScreenValidation', async ({ page }) => {
await demoBalzeHomePage.homepageValidation()
await demoBalzeHomePage.productnameandcountvalidation()
await demoBalzeHomePage.navigatetoproductpage('Samsung galaxy s6')
const productpagedetails=await productpage.productpagevalidation()
await expect(productpage.actualprodname).toHaveText('Samsung galaxy s6')
await expect(productpage.actualprodprice).toContainText('$360')
await productpage.clickonaddtocartbtn()
await productpage.clickoncartbtn()
await cartpage.cartPageValidation(productpagedetails.actprodname!,productpagedetails.actprodprice1!)
await cartpage.purchase('abc','123')
await confirmationpage.validateConfiramtionMsg()

});

