import{test,expect}from '@playwright/test'

test('unecpect errors',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    try{
        await page.click('#checkBoxOption1',{ timeout: 3000 })

    }catch(error){
        console.error('click is failed:',error)
         await page.screenshot({ path: 'failedimg.png' });
        throw error
    }
    
   

})