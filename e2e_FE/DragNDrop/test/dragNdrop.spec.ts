import { test, expect } from "@playwright/test";
import { URLS } from "../data/urls";
import { DragNDropPage } from "../page/DragNDropPage";



test.describe('AssetMark Demo', () =>{
let homepage:DragNDropPage

test.beforeEach(async ({page}) => {
    homepage = new DragNDropPage(page)
    await page.goto(URLS.DRAG_N_DROP_URL);  
})

test('As an standar user i should be able to drag the widget to trash target', async ({page}) => {
    await homepage.dragToTrash();
})

})