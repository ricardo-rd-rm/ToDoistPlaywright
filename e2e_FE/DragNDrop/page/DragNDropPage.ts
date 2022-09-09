import { Locator, Page } from "@playwright/test";

export class DragNDropPage{
    readonly page:Page
    
    readonly widget0:Locator
    

    readonly trash:Locator

    constructor(page: Page){
        this.page = page
        
        this.widget0 = page.locator('#draggable').first(),{force:true};
        
        this.trash = page.locator('#droppable').first(),{force:true};

    }


    async dragToTrash(){
      if (this.widget0 && this.trash){
        const srcBound = await this.widget0.boundingBox()
        const dstBound = await this.trash.boundingBox()
        if(srcBound && dstBound){
            await this.page.mouse.move(srcBound.x + srcBound.width / 2, srcBound.y + srcBound.height / 2);
            await this.page.mouse.down();
            await this.page.mouse.move(dstBound.x + dstBound.width / 2, dstBound.y + dstBound.height / 2);
            await this.page.mouse.down();
        }else{
            throw new Error("No Element")
        }
      }
      
    
    }

}