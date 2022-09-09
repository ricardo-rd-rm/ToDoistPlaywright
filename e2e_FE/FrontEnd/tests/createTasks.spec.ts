import { test, expect } from "@playwright/test";
import { LoginPage} from '../pages/loginPage';
import { WelcomePage } from '../pages/welcomePage';
import { CREDENTIALS } from '../data/users';
import { URLS } from '../data/urls';
import { TaskPage } from '../pages/taskPage';
import {NUMBEROFTASKTOADD,DATA} from '../data/tasks'


test.describe.skip('AssetMark Demo', () =>{
let loginPage:LoginPage
let welcomePage:WelcomePage
let taskPage:TaskPage

test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page)
    welcomePage= new WelcomePage(page)
    taskPage= new TaskPage(page)

    await page.goto(URLS.BASE_URL);
    await welcomePage.clickLoginButton();
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    let numberOfTask = await taskPage.getTaskName.count()
    console.log('number of tasks added to delete '+numberOfTask)
    await taskPage.deleteTask(numberOfTask)
})

test('As an standar user i should able to add one task',async ({page}) => {
    await taskPage.addTask(NUMBEROFTASKTOADD.ONE_TASK,DATA.STATICWORD)

})

test('As an standar user i should be able to add 10 tasks',async ({page}) => {
    await taskPage.addTask(NUMBEROFTASKTOADD.TEN_TASKS,DATA.STATICWORD)

})

})