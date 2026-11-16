import { expect, Locator, Page } from "@playwright/test";
import { ProductPage } from "./productpage.po";

export class CartPage extends ProductPage{
    readonly page:Page
    readonly productname:Locator
    readonly productprice:Locator
    readonly placeorder:Locator
    readonly name:Locator
    readonly creditcard:Locator
    readonly purchasebtn:Locator
    readonly confirmationmsg:Locator
    readonly clickOnOkBtn:Locator
    
    constructor(page:Page){
        super(page)
        this.page=page
        this.productname=page.locator("//tr[@class='success']//td[2]")
        this.productprice=page.locator("//tr[@class='success']//td[3]")
        this.placeorder=page.getByRole('button',{name:'Place Order'})
        this.name=page.locator("#name")
        this.creditcard=page.locator("#card")
        this.purchasebtn=page.getByRole('button',{name:'Purchase'})
        
    }
    async cartPageValidation(actprodname:string,actprodprice1:string){
        await expect(this.productname).toBeVisible()
        await expect(this.productprice).toBeVisible()
        const prodname=await this.productname.textContent()
        const prodprice=await this.productprice.textContent()
        console.log(prodname)
        console.log(prodprice)
        await expect(actprodname).toEqual(prodname)
        await expect(actprodprice1).toContain(prodprice)
        await this.placeorder.click()
        
    
    }
    async purchase(name:string,cardnumb:string){
        await this.name.fill(name)
        await this.creditcard.fill(cardnumb)
        await this.purchasebtn.click()
    }
    
}