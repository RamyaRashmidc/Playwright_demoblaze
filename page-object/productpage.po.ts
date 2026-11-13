import { Locator, Page } from "@playwright/test";

export class ProductPage{
    readonly page:Page
    readonly actualprodname:Locator
    readonly actualprodprice:Locator

    constructor(page:Page){
        this.page=page
        this.actualprodname=page.locator("//h2")
        this.actualprodprice=page.locator("//h3")
    }

    async productpagevalidation(){
        const actprodname=await this.actualprodname.textContent()
        const actprodprice=await this.actualprodprice.textContent()
        console.log(actprodname)
        const actprodprice1=actprodprice?.replace(' *includes tax','')
        console.log(actprodprice1)
    }

}