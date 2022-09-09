import { Locator, Page } from "@playwright/test";

export class LoginPage{
    readonly page:Page
    
    readonly openMenuButton:Locator
    readonly userEmailInput:Locator
    readonly userPwdInput:Locator
    readonly submitButton:Locator
    readonly errorMessageEmailPwd:Locator
    readonly errorMessageEmail:Locator
    readonly errorMessagePwd:Locator

    constructor(page: Page){
        this.page = page
        //login locators
        this.openMenuButton = page.locator('button._2IMIvwSBxjKyd4VR_bIwum._1XN4d3ZTKe1FFH2oIRgExP')
        this.userEmailInput = page.locator('input[type="email"]');
        this.userPwdInput = page.locator('input[type="password"]');
        this.submitButton = page.locator('button[type="submit"]');
        //error Messages 
        this.errorMessageEmailPwd = page.locator('div.a83bd4e0._266d6623');
        this.errorMessageEmail = page.locator('p#element-2');
        this.errorMessagePwd = page.locator('p#element-5');
    }

    async submitLoginForm(email , password)  {
        if(email && password === null){
            await this.userEmailInput.fill(email);
            await this.submitButton.click();
        }else if(email === null && password){
            await this.userPwdInput.fill(password);
            await this.submitButton.click();
        }else if(email === null && password === null){
            await this.submitButton.click();
        }else{
            await this.userEmailInput.fill(email);
            await this.userPwdInput.fill(password);
            await this.submitButton.click();
        } 
    }
    
}