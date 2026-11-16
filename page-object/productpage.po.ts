import { Locator, Page } from "@playwright/test";

export class ProductPage{
    readonly page:Page
    readonly actualprodname:Locator
    readonly actualprodprice:Locator
    readonly addtocartbtn:Locator
    readonly cartbtn:Locator

    constructor(page:Page){
        this.page=page
        this.actualprodname=page.locator("//h2[@class='name']")
        this.actualprodprice=page.locator("//h3")
        this.addtocartbtn=page.locator("//a[text()='Add to cart']")
        this.cartbtn=page.locator("//a[text()='Cart']")
    }

    async productpagevalidation(){
        const actprodname=await this.actualprodname.textContent()
        const actprodprice=await this.actualprodprice.textContent()
        console.log(actprodname)
        const actprodprice1=actprodprice?.replace(' *includes tax','')
        console.log(actprodprice1)
        return {actprodname,actprodprice1}
    }
    async clickonaddtocartbtn(){
        this.page.on('dialog',async(dialog)=>{
            dialog.accept()
        });
        await this.addtocartbtn.click()
    }
    async clickoncartbtn(){
        this.cartbtn.click()
    }

}