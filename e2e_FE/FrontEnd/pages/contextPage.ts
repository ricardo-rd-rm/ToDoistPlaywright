import { chromium, devices } from "@playwright/test";
import { URLS } from "../data/urls";
const iPad = devices['iPad Pro 11'];



(async()=>{
const browser = await chromium.launch({headless:false})   
const context = await browser.newContext({
    ...iPad,
    colorScheme:'dark',
    userAgent:'advisor'
   });
const page =await context.newPage();


} )();

