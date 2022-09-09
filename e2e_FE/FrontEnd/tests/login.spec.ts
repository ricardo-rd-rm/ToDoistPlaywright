import { test, expect } from "@playwright/test";
import { LoginPage} from '../pages/loginPage';
import { WelcomePage } from '../pages/welcomePage';
import { CREDENTIALS } from '../data/users';
import { ERRORMSG } from '../data/errorMsg';
import { URLS } from '../data/urls';
import { TaskPage } from '../pages/taskPage';


test.describe('AssetMark Demo', () =>{
let loginPage:LoginPage
let welcomePage:WelcomePage
let taskPage:TaskPage

test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page)
    welcomePage= new WelcomePage(page)

    await page.goto(URLS.BASE_URL);
    await welcomePage.clickLoginButton();
})

test('As an standar user i should be able to login with valid credencials', async ({page}) => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
    await expect(page).toHaveTitle('Today: Todoist');
})

test('As an standar user i should not login with invalid credentials',async ({page}) => {
    await loginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await expect(loginPage.errorMessageEmailPwd).toContainText(ERRORMSG.EMAIL_PWD)
})

test('As an standar user i should see error message if i just click submit without credentials',async ({page}) => {
    await loginPage.submitLoginForm(null,null)
    await expect(loginPage.errorMessageEmail).toContainText(ERRORMSG.EMAIL)    
})

test('As an standar user i should see error message if only type password',async ({page}) => {
    await loginPage.submitLoginForm(null, CREDENTIALS.VALID_USER.PASSWORD)
    await expect(loginPage.errorMessageEmail).toContainText(ERRORMSG.EMAIL)
})
test('As an standar user i should see error meesage if only type email',async ({page}) => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, null)
    await expect(loginPage.errorMessagePwd).toContainText(ERRORMSG.PWD)
    
})
})