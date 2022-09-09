import {test,expect} from '@playwright/test'

test.describe.skip('@API test', ()=>{

    test("create", async ({request, baseURL}) =>{
        await request.get(`${baseURL}`),{
            
        }
    })
})