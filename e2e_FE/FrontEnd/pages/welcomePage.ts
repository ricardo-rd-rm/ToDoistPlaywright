import { Locator, Page } from "@playwright/test"

export class WelcomePage{
    readonly page:Page
    readonly loginBtn:Locator
    readonly burgerLoginMenu:Locator
    readonly loginBtnBurger:Locator
    
    constructor(page:Page){
        this.page = page
        this.loginBtn = page.locator('(//ul[@class="teIPYPpixXxJ2Ofky-cXf _1nZs85sdECowW42MzVnOXH"]//a)[1]');
        this.burgerLoginMenu = page.locator('button._2IMIvwSBxjKyd4VR_bIwum._1XN4d3ZTKe1FFH2oIRgExP');
        this.loginBtnBurger = page.locator('(//a[contains(@class,"_1vrBX-JExqmMRnkPWrYFN9 _2-FucBjoyl-bg-XwbTNCC8")])[1]')
    }

    async clickLoginButton(){
        if (await this.loginBtn.isVisible()){
            await this.loginBtn.click();
        }else{
            this.burgerLoginMenu.click();
            this.loginBtnBurger.click();
        } 
    }
}