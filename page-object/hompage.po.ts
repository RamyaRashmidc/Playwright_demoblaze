import { expect, Locator, Page } from "@playwright/test";

export class DemoBlazeHomePage{
    readonly page:Page
    readonly productstore:Locator
    readonly home:Locator
    readonly contact:Locator
    readonly aboutus:Locator
    readonly cart:Locator
    readonly login:Locator
    readonly signup:Locator
    readonly productcards:Locator
    readonly nextbtn:Locator
    readonly productcardtitle:Locator

    constructor(page:Page){
        this.page=page
        this.productstore=page.getByRole('link',{name:/PRODUCT STORE/})
        this.home=page.getByRole('link',{name:/Home/})
        this.contact=page.getByRole('link',{name:/Contact/})
        this.aboutus=page.getByRole('link',{name:/About us/})
        this.cart=page.getByRole('link',{name:/Cart/})
        this.login=page.getByRole('link',{name:/Log in/})
        this.signup=page.getByRole('link',{name:/Sign up/})
       this.productcards=page.locator("//div[@class='card h-100']")
       this.nextbtn=page.locator("//button[text()='Next']")
       this.productcardtitle=page.locator("[class='card-title']")
       
    }
    productlink(productname:string):Locator{
        return this.page.locator(`//a[text()='${productname}']`)
    }
    productprice(productname:string):Locator{
        return this.page.locator(`//a[text()='${productname}']//ancestor::div[@class='card-block']//h5`)
    }
    async homepageValidation(){
        await expect(this.productstore).toBeVisible()
        await expect(this.home).toBeVisible()
        await expect(this.contact).toBeVisible()
        await expect(this.aboutus).toBeVisible()
        await expect(this.cart).toBeVisible()
        await expect(this.login).toBeVisible()
        await expect(this.signup).toBeVisible()
    }
    async productnameandcountvalidation(){
        await this.page.waitForSelector("//div[@class='card h-100']")
        let count = 0;
        let allproductname: string[] = [];

        while (await this.nextbtn.isVisible()) {

            const productcount = await this.productcards.count();

            const productnames = await this.productcardtitle.allTextContents();

            allproductname.push(...productnames);

            count = count + productcount;

            await this.nextbtn.click({ force: true });

            await this.page.waitForTimeout(1500);
        }

    // Last page
    const productcount = await this.productcards.count();

    const productnames = await this.productcardtitle.allTextContents();

    allproductname.push(...productnames);

    count = count + productcount;

    console.log("Total count:", count);
    console.log("All product names:", allproductname);

    }
    async navigatetoproductpage(productname:string){
        await this.home.click()
        await this.productlink(productname).waitFor({state:"visible"});
        const prodprice=await this.productprice(productname).allTextContents()
        console.log(prodprice)
        await this.productlink(productname).click()
        
    }
    }

