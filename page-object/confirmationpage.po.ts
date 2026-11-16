import { expect, Locator, Page } from "@playwright/test";

export class ConfirmationPage{
    readonly page:Page
    readonly confirmationmsg:Locator
    readonly clickOnOkBtn:Locator
    readonly name:Locator
    readonly creditcardnum:Locator

    constructor(page:Page){
        this.page=page
        this.confirmationmsg=page.locator("//h2[text()='Thank you for your purchase!']")
        this.clickOnOkBtn=page.getByRole('button',{name:'OK'})
    
    }
    async validateConfiramtionMsg(){
        await expect(this.confirmationmsg).toBeVisible()
        await this.clickOnOkBtn.click()
    }
}