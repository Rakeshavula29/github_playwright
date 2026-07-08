import { test, expect } from '@playwright/test';

// sampel 1
test('handel Radio buttons',async({page})=>{
 await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
 await page.getByText(' Radio1 ').click()
})
//sampel2
test('handelradio buttons verify',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    const radiobutton=await page.locator('//input[@type="radio"]')
    await expect(radiobutton).toHaveCount(3)

    const button=await page.locator("//input[@value='radio2']")
    await button.check()
    await expect(button).toBeChecked()
    
     const selectedValue = await button.getAttribute('value')
    console.log('Selected value is:', selectedValue)
})
//method 3
test('radio buttons count and print',async({page})=>{
     await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
     const radiobuttons=page.locator('//input[@type="radio"]')
     const count=await radiobuttons.count()
     console.log('total radio buttons+',count)

    for(let i=0;i<count;i++){
        const BTN= await radiobuttons.nth(i).getAttribute('value')
        console.log(BTN)
    }
    const selectbutton=await page.locator('//input[@value="radio1"]')
    await selectbutton.check()
    await expect(selectbutton).toBeChecked()

    const selectedValue = await selectbutton.getAttribute('value')
    console.log('Selected value is:', selectedValue)
})
