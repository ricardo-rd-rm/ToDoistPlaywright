import { Locator, Page } from "@playwright/test";

export class  TaskPage{
    readonly page:Page
    readonly pageTittle:Locator;
    readonly addTaskPlusBtn:Locator;
    readonly taskTextField:Locator;
    readonly taskDescription:Locator;
    readonly addTaskBtn:Locator;
    readonly cancelBtn:Locator;
    readonly getAllTask:Locator;
    readonly getTask:Locator;
    readonly getTaskName:Locator;
    readonly deleteTaskBtn:Locator;
    readonly deleteConfirmationBtn:Locator;

    constructor(page:Page){
        this.pageTittle = page.locator('h1 span')
        this.addTaskPlusBtn = page.locator('button.plus_add_button')
        this.taskTextField = page.locator('div.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
        this.taskDescription = page.locator('textarea.task_editor__description_field')
        this.addTaskBtn = page.locator('//span[text()="Add task"]')
        this.cancelBtn  = page.locator('//span[text()="Cancel"]')
        this.getAllTask = page.locator('.task_list_item__content')
        this.getTask = page.locator('span.task_list_item__project')
        this.getTaskName = page.locator('div.markdown_content.task_content')
        this.deleteTaskBtn = page.locator('li.menu_item.icon_menu_item.danger_menu')
        this.deleteConfirmationBtn = page.locator('.reactist_modal_box__actions .ist_button.ist_button_red')
    }


    //function to add task
    async addTask(numberOfTask, taskName){
        
            await this.addTaskPlusBtn.click();
        
        let j = 0;
        
        for(let i = 0; i <= numberOfTask; i++){
                await this.taskTextField.fill(taskName + "_" + i)
                await this.taskDescription.fill(taskName + "_" + i)
                await this.addTaskBtn.click();

                j++
                if(j === numberOfTask){
                    await this.cancelBtn.click();
                    break;
                }
        }
    }

    //function to delete tasks
    async deleteTask(taskAdded){
        if(taskAdded === 0){
            console.log('there is no Task added')
        } else{
            let j = taskAdded
            for (let i = 0; i<= taskAdded; i++){
                await this.getTask.click({button:"right"});
                await this.deleteTaskBtn.click();
                await this.deleteConfirmationBtn.click();
                j--
                if(j === 0){
                    break
                }
            }
        }
    }
}