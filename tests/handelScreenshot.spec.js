import{test,expect} from "@playwright/test"
import path from "node:path"

test('handel screenshot',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/practicess')
   await page.screenshot({path:'fullpage.png'})
   
})
//method 2
test('handel screenshoot',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/practice')
   await page.screenshot({path:'testrakes/fullpage.png',fullPage:true})
   
})
test(' element screenshots',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    const username=await page.locator('#username')
    await username.fill('rakeashwd')
    await username.screenshot({path: 'usdfes.png'})
})