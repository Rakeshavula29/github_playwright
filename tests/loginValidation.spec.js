import{test,expect} from '@playwright/test'

test('handel LoginPage',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    await page.locator('#username').fill('rahulshettyacademy')
    await page.locator('#password').fill('Learning@830$3mK2')
      const checkbox =await page.locator('#terms')
      await checkbox.click()
      const status=await checkbox.isChecked()
      if(status){
        console.log('check box is select')
      }else{
        console.log('check box is not select')
      }
    await page.locator('#signInBtn')
      

})