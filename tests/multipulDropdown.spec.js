
const{test,expect}=require('@playwright/test')
test("multipul dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#colors").selectOption(['Red','Blue'])
    await page.screenshot({ path: 'fullpage.png' });
})