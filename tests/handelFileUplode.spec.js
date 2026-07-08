import{test ,expect} from "@playwright/test"
test('handel file upload',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
     await expect (page).toHaveURL('https://rahulshettyacademy.com/AutomationPractice/')
})